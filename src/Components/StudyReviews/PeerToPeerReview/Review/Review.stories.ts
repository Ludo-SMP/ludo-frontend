import type { Meta, StoryObj } from '@storybook/react';
import { Review } from '.';

const meta = {
  component: Review,
  args: {
    studyId: 1,
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
    activeness: 4,
    professionalism: 5,
    communication: 1,
    together: 2,
    recommend: 3,
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
    activeness: 4,
    professionalism: 5,
    communication: 1,
    together: 2,
    recommend: 3,
  },
};
