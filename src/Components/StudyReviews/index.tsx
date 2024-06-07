import styled from 'styled-components';
import { Accordion } from '../Accordion';
import { PeerToPeerReview } from '@/Types/review';
import { DefaultStudyThumbnail } from '@/Assets';

export interface StudyReviewsProps {
  /** 스터디 id */
  id: number;
  /** 스터디 제목 */
  title: string;
  /** 스터디원 상호간의 리뷰 목록 */
  reviews: PeerToPeerReview[];
}

export const StudyReviews = ({ title }: StudyReviewsProps) => {
  return (
    <StudyReviewsBox>
      <Accordion title={title} imgUrl={DefaultStudyThumbnail}>
        {title}
      </Accordion>
    </StudyReviewsBox>
  );
};

const StudyReviewsBox = styled.li`
  width: 100%;
  max-width: 912px;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  border: 1px solid ${({ theme }) => theme.color.black1};
`;
