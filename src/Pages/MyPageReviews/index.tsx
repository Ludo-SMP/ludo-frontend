import { DefaultStudyThumbnail } from '@/Assets';
import { Accordion } from '@/Components/Accordion';
import styled from 'styled-components';

export const MyPageReviews = () => {
  return (
    <MyPageReviewsLayout>
      <Accordion title="스터디명" imgUrl={DefaultStudyThumbnail}>
        스터디
      </Accordion>
    </MyPageReviewsLayout>
  );
};

const MyPageReviewsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;
