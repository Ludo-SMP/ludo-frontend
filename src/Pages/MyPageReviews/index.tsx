import { DefaultStudyThumbnail } from '@/Assets';
import { Accordion } from '@/Components/Accordion';
import { useReviews } from '@/Hooks/review/useReviews';
import styled from 'styled-components';

export const MyPageReviews = () => {
  const { data: reviews, isLoading } = useReviews();
  console.log(reviews);
  return (
    <MyPageReviewsLayout>
      <ReviewBox>
        <Accordion title="스터디명" imgUrl={DefaultStudyThumbnail}>
          스터디
        </Accordion>
      </ReviewBox>
    </MyPageReviewsLayout>
  );
};

const MyPageReviewsLayout = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

const ReviewBox = styled.li`
  width: 100%;
  max-width: 912px;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  border: 1px solid ${({ theme }) => theme.color.black1};
`;
