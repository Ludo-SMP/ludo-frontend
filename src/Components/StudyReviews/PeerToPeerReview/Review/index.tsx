import { ReviewType } from '@/Types/review';
import styled from 'styled-components';
import { Profile } from '@/Assets';

interface ReviewProps extends Partial<ReviewType> {
  /** 리뷰를 작성한 사람(reviewer) 기준으로 분류하는 type  */
  type: 'SELF' | 'PEER';
}

const getReviewTitleTexts = (type: 'SELF' | 'PEER', reviewerId?: number) => {
  const revieweeText = type === 'SELF' ? "'스터디원'" : reviewerId ? '나는' : '';
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

export const Review = ({
  type,
  revieweeId,
  reviewerId,
  activenessScore,
  professionalismScore,
  communicationScore,
  togetherScore,
  recommendScore,
}: ReviewProps) => {
  const { revieweeText, descText } = getReviewTitleTexts(type, revieweeId);
  return (
    <ReviewBox>
      <ReviewRow>
        <Profile width={24} height={24} />
        <ReviewTitle>
          <RevieweeText>{revieweeText}</RevieweeText>
          <DescText>{descText}</DescText>
        </ReviewTitle>
      </ReviewRow>
    </ReviewBox>
  );
};

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const ReviewRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const ReviewTitle = styled.p``;

const RevieweeText = styled.span`
  color: ${({ theme }) => theme.color.black4};

  /* List,Alert/Body-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const DescText = styled.span`
  color: ${({ theme }) => theme.color.black2};

  /* List,Alert/Body-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
