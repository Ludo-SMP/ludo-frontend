import { Loading, SignUpFail } from '@/Assets';
import { StudyReviews } from '@/Components/StudyReviews';
import { useReviews } from '@/Hooks/review/useReviews';
import { media } from '@/Styles/theme';
import { StudyReviewsType } from '@/Types/review';
import { Children, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

export const MyPageReviews = () => {
  const { data: allStudyreviews, isLoading } = useReviews();

  return (
    <MyPageReviewsLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <StudyReviewList
          placeholder={
            <PlaceHolder>
              <PlaceHolderTitle>아직 받은 리뷰가 없습니다.</PlaceHolderTitle>
              <img src={SignUpFail} width={392} height={240} alt="no saved items" />
            </PlaceHolder>
          }
        >
          {allStudyreviews?.studies.map((studyReviews: StudyReviewsType) => (
            <StudyReviews key={studyReviews.id} {...studyReviews} />
          ))}
        </StudyReviewList>
      )}
    </MyPageReviewsLayout>
  );
};

const MyPageReviewsLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudyReviewList = ({
  placeholder,
  children,
}: PropsWithChildren<{
  placeholder?: ReactNode;
}>) =>
  Children.toArray(children).length !== 0 ? <StudyReviewsListInner>{children}</StudyReviewsListInner> : placeholder;

const StudyReviewsListInner = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  overflow: auto;

  ${media.mobile} {
    gap: 0;
  }
`;

const PlaceHolder = styled.div`
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};
`;

const PlaceHolderTitle = styled.span`
  color: ${({ theme }) => theme.color.black4};
  ${({ theme }) => theme.typo.ListLabel};
`;
