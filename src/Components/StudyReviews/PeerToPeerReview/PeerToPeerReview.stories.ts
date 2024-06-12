import type { Meta, StoryObj } from '@storybook/react';
import { PeerToPeerReview } from '.';

const meta = {
  component: PeerToPeerReview,
  args: {
    selfReview: {
      reviewerId: 1,
      revieweeId: 2,
      activenessScore: 4,
      professionalismScore: 5,
      communicationScore: 1,
      togetherScore: 2,
      recommendScore: 3,
    },
    peerReview: {
      reviewerId: 2,
      revieweeId: 1,
      activenessScore: 5,
      professionalismScore: 5,
      communicationScore: 3,
      togetherScore: 2,
      recommendScore: 1,
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
      activenessScore: 4,
      professionalismScore: 5,
      communicationScore: 1,
      togetherScore: 2,
      recommendScore: 3,
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
      activenessScore: 5,
      professionalismScore: 5,
      communicationScore: 3,
      togetherScore: 2,
      recommendScore: 1,
    },
  },
};
