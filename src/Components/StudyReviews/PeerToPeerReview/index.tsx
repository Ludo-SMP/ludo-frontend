import { ReviewType } from '@/Types/review';
import styled from 'styled-components';
import { TwoWay } from '@/Assets';
import { Review } from './Review';

export interface PeerToPeerReviewProps {
  selfReview: ReviewType | null;
  peerReview: ReviewType | null;
}

export const PeerToPeerReview = ({ selfReview, peerReview }: PeerToPeerReviewProps) => {
  return (
    <PeerToPeerReviewBox>
      <Review {...selfReview} type="SELF" />
      <TwoWay />
      <Review {...peerReview} type="PEER" />
    </PeerToPeerReviewBox>
  );
};

const PeerToPeerReviewBox = styled.li`
  display: flex;
  min-width: 300px;
  padding: 24px 0px 24px 32px;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  width: 100%;

  & + & {
    border-top: 1px solid #e5e6e8;
  }
`;
