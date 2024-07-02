import styled from 'styled-components';
import { Accordion } from '../Accordion';
import { PeerToPeerReviewType } from '@/Types/review';
import { PeerToPeerReview } from './PeerToPeerReview';
import { DefaultStudyThumbnail } from '@/Assets';
import { media } from '@/Styles/theme';

export interface StudyReviewsProps {
  /** 스터디 id */
  id: number;
  /** 스터디 제목 */
  title: string;
  /** 스터디원 상호간의 리뷰 목록 */
  reviews: PeerToPeerReviewType[];
}

export const StudyReviews = ({ id: studyId, title, reviews: peerTopeerReviews }: StudyReviewsProps) => {
  return (
    <StudyReviewsBox>
      <Accordion title={title} imgUrl={DefaultStudyThumbnail}>
        <PeerToPeerReviewList>
          {peerTopeerReviews.map((peerTopeerReview: PeerToPeerReviewType) => {
            const { peerReview, selfReview } = peerTopeerReview;
            const uniqueKey = peerReview
              ? `${peerReview.reviewerId}-${peerReview.revieweeId}`
              : `${selfReview.reviewerId}-${selfReview.revieweeId}`;
            return <PeerToPeerReview {...peerTopeerReview} key={`review-${studyId}-${uniqueKey}`} />;
          })}
        </PeerToPeerReviewList>
      </Accordion>
    </StudyReviewsBox>
  );
};

const StudyReviewsBox = styled.div`
  width: 100%;
  max-width: 912px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  border: 1px solid ${({ theme }) => theme.color.black1};

  & > li {
    & > div:first-child {
      height: 40px;
    }

    & > div:last-child {
      padding: 0;
    }
  }

  ${media.mobile} {
    padding: 16px 24px;
    border: 0;
    border-radius: 0;

    & + & {
      border-top: 1px solid #e5e6e8;
    }

    & > li {
      & > div:last-child {
        padding: 0;
      }
    }
  }
`;

const PeerToPeerReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
