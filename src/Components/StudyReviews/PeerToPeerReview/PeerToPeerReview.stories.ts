import type { Meta, StoryObj } from '@storybook/react';
import { PeerToPeerReview } from '.';

const meta = {
  component: PeerToPeerReview,
  args: {
    selfReview: {
      reviewerId: 1,
      revieweeId: 2,
      activeness: 4,
      professionalism: 5,
      communication: 1,
      together: 2,
      recommend: 3,
    },
    peerReview: {
      reviewerId: 2,
      revieweeId: 1,
      activeness: 5,
      professionalism: 5,
      communication: 3,
      together: 2,
      recommend: 1,
    },
  },
} satisfies Meta<typeof PeerToPeerReview>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 서로 간에 리뷰를 남겼을 때 */
export const ReviewBetweenPeers: Story = {};

/* 자신만 다른 스터디원에게 리뷰를 남겼을 때 */
export const OnlyReviewToPeer: Story = {
  args: {
    selfReview: {
      reviewerId: 1,
      revieweeId: 2,
      activeness: 4,
      professionalism: 5,
      communication: 1,
      together: 2,
      recommend: 3,
    },
    peerReview: null,
  },
};

/* 스터디원만 나에게 리뷰를 남겼을 때 */
export const OnlyReviewFromPeer: Story = {
  args: {
    selfReview: null,
    peerReview: {
      reviewerId: 2,
      revieweeId: 1,
      activeness: 5,
      professionalism: 5,
      communication: 3,
      together: 2,
      recommend: 1,
    },
  },
};
