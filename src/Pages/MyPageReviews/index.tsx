import { Loading } from '@/Assets';
import { StudyReviews } from '@/Components/StudyReviews';
import { useReviews } from '@/Hooks/review/useReviews';
import { StudyReviewsType } from '@/Types/review';
import styled from 'styled-components';

export const MyPageReviews = () => {
  const { data: allStudyreviews, isLoading } = useReviews();

  return (
    <MyPageReviewsLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <StudyReviewsList>
          {allStudyreviews?.studies.map((studyReviews: StudyReviewsType) => (
            <StudyReviews key={studyReviews.id} {...studyReviews} />
          ))}
        </StudyReviewsList>
      )}
    </MyPageReviewsLayout>
  );
};

const MyPageReviewsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const StudyReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  overflow: auto;
`;
