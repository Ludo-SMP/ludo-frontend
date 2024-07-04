import { ReviewType } from '@/Types/review';
import styled from 'styled-components';
import { Profile } from '@/Assets/Profile';
import { ReviewScore } from '@/Components/ReviewScore';

export interface ReviewProps extends Partial<ReviewType> {
  /** 리뷰를 작성한 사람(reviewer) 기준으로 분류하는 type  */
  type: 'SELF' | 'PEER';
  studyId: number;
}

const getReviewTitleTexts = (type: 'SELF' | 'PEER', reviewerId?: number) => {
  const revieweeText = type === 'SELF' ? "'스터디원'" : reviewerId ? '나는 ' : '';
  const descText =
    type === 'SELF'
      ? reviewerId
        ? '에게 이런 리뷰를 남겼어요!'
        : '을 리뷰하지 못했어요.'
      : reviewerId
        ? '팀원에게 이렇게 리뷰 받았어요!'
        : '팀원에게 리뷰받지 못했어요.';
  return { revieweeText, descText };
};

export const Review = (reviewProps: ReviewProps) => {
  const { studyId, revieweeId, reviewerId, type, ...reviewScores } = reviewProps;
  const { revieweeText, descText } = getReviewTitleTexts(type, reviewerId);
  return (
    <ReviewBox>
      <ReviewRow>
        <Profile width={24} height={24} id={studyId} />
        <ReviewTitle>
          <RevieweeText>{revieweeText}</RevieweeText>
          <DescText>{descText}</DescText>
        </ReviewTitle>
      </ReviewRow>
      {revieweeId ? (
        <ReviewScoreList>
          <ReviewScore studyId={studyId} standard="적극성" score={reviewScores.activeness} />
          <ReviewScore studyId={studyId} standard="전문성" score={reviewScores.professionalism} />
          <ReviewScore studyId={studyId} standard="소통력" score={reviewScores.communication} />
          <ReviewScore studyId={studyId} standard="만족도" score={reviewScores.together} />
          <ReviewScore studyId={studyId} standard="추천도" score={reviewScores.recommend} />
        </ReviewScoreList>
      ) : (
        <EmptyReviewText>
          {type === 'SELF' ? '해당 스터디원에 대한 리뷰가 없어요.' : '스터디원이 나에게 남긴 리뷰가 없어요.'}
        </EmptyReviewText>
      )}
    </ReviewBox>
  );
};

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 292px;
  gap: 16px;
`;

const ReviewRow = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 8px;
`;

const ReviewTitle = styled.span`
  /* List,Alert/Body-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const RevieweeText = styled.span`
  color: ${({ theme }) => theme.color.black4};
`;

const DescText = styled.span`
  color: ${({ theme }) => theme.color.black2};
`;

const ReviewScoreList = styled.ul`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 72px;
  gap: 12px;
`;

const EmptyReviewText = styled.p`
  display: flex;
  width: 100%;
  height: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.black2};
  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
