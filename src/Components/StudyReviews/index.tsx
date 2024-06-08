import styled from 'styled-components';
import { Accordion } from '../Accordion';
import { PeerToPeerReviewType } from '@/Types/review';
import { PeerToPeerReview } from './PeerToPeerReview';
import { DefaultStudyThumbnail } from '@/Assets';
import { v1 as uuidv1 } from 'uuid';

export interface StudyReviewsProps {
  /** 스터디 id */
  id: number;
  /** 스터디 제목 */
  title: string;
  /** 스터디원 상호간의 리뷰 목록 */
  reviews: PeerToPeerReviewType[];
}

export const StudyReviews = ({ title, reviews: peerTopeerReviews }: StudyReviewsProps) => {
  return (
    <StudyReviewsBox>
      <Accordion title={title} imgUrl={DefaultStudyThumbnail}>
        <PeerToPeerReviewList>
          {peerTopeerReviews.map((peerTopeerReview: PeerToPeerReviewType) => {
            /** Unique Key를 처리방안 고민 */
            const { peerReview, selfReview } = peerTopeerReview;
            const uniqueKey = peerReview
              ? `${peerReview.revieweeId}-${peerReview.revieweeId}-${uuidv1()}`
              : `${selfReview.revieweeId}-${selfReview.revieweeId}-${uuidv1()}`;
            return <PeerToPeerReview {...peerTopeerReview} key={uniqueKey} />;
          })}
        </PeerToPeerReviewList>
      </Accordion>
    </StudyReviewsBox>
  );
};

const StudyReviewsBox = styled.div`
  width: 100%;
  max-width: 912px;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  border: 1px solid ${({ theme }) => theme.color.black1};
`;

const PeerToPeerReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
