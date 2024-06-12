import type { Meta, StoryObj } from '@storybook/react';
import { Review } from '.';

const meta = {
  component: Review,
  args: {
    type: 'SELF',
  },
} satisfies Meta<typeof Review>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 자신이 다른 스터디원에게 남긴 리뷰가 없을 때 */
export const NoReviewToPeer: Story = {};

/* 자신이 다른 스터디원에게 남긴 리뷰 */
export const ReviewToPeer: Story = {
  args: {
    type: 'SELF',
    reviewerId: 1,
    revieweeId: 2,
    activenessScore: 4,
    professionalismScore: 5,
    communicationScore: 1,
    togetherScore: 2,
    recommendScore: 3,
  },
};

/* 스터디원이 나에게 남긴 리뷰가 없을 때 */
export const NoReviewFromPeer: Story = {
  args: {
    type: 'PEER',
  },
};

/* 다른 스터디원이 자신에게 남긴 리뷰 */
export const ReviewFromPeer: Story = {
  args: {
    type: 'PEER',
    reviewerId: 1,
    revieweeId: 2,
    activenessScore: 4,
    professionalismScore: 5,
    communicationScore: 1,
    togetherScore: 2,
    recommendScore: 3,
  },
};
