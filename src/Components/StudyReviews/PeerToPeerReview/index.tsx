import { ReviewType } from '@/Types/review';
import styled from 'styled-components';
import { TwoWay } from '@/Assets';
import { Review } from './Review';
import { media } from '@/Styles/theme';

export interface PeerToPeerReviewProps {
  studyId: number;
  selfReview: ReviewType | null;
  peerReview: ReviewType | null;
}

export const PeerToPeerReview = ({ studyId, selfReview, peerReview }: PeerToPeerReviewProps) => {
  return (
    <PeerToPeerReviewBox>
      <Review studyId={studyId} {...selfReview} type="SELF" />
      <TwoWay />
      <Review studyId={studyId} {...peerReview} type="PEER" />
    </PeerToPeerReviewBox>
  );
};

const PeerToPeerReviewBox = styled.li`
  display: flex;
  min-width: 300px;
  padding: 24px 0px 24px 32px;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  width: 100%;

  & + & {
    border-top: 1px solid #e5e6e8;
  }

  ${media.custom(1000)} {
    flex-direction: column;
    padding: 24px 0;
    gap: 16px;

    & > svg {
      transform: rotate(90deg);
    }
  }
`;
