import { Review } from '@/Types/review';
import styled from 'styled-components';

export interface PeerToPeerReview {
  selfReview: Review | null;
  peerReview: Review | null;
}

export const PeerToPeerReview = ({ selfReview, peerReview }: PeerToPeerReview) => {
  return <PeerToPeerReviewBox></PeerToPeerReviewBox>;
};

const PeerToPeerReviewBox = styled.div`
  display: flex;
  min-width: 300px;
  padding: 24px 0px 24px 32px;
  align-items: center;
  gap: var(--Spacing-40, 40px);
  align-self: stretch;
`;
