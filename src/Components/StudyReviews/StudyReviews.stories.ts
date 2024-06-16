import type { Meta, StoryObj } from '@storybook/react';
import { StudyReviews } from '.';

const meta = {
  component: StudyReviews,
  args: {
    id: 1,
    title: 'Ludo 1',
    reviews: [
      {
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
      {
        selfReview: {
          reviewerId: 1,
          revieweeId: 3,
          activeness: 2,
          professionalism: 3,
          communication: 4,
          together: 5,
          recommend: 1,
        },
        peerReview: {
          reviewerId: 3,
          revieweeId: 1,
          activeness: 5,
          professionalism: 1,
          communication: 3,
          together: 2,
          recommend: 4,
        },
      },
      {
        selfReview: null,
        peerReview: {
          reviewerId: 4,
          revieweeId: 1,
          activeness: 5,
          professionalism: 1,
          communication: 3,
          together: 2,
          recommend: 4,
        },
      },
      {
        selfReview: {
          reviewerId: 1,
          revieweeId: 5,
          activeness: 2,
          professionalism: 3,
          communication: 4,
          together: 5,
          recommend: 1,
        },
        peerReview: null,
      },
    ],
  },
} satisfies Meta<typeof StudyReviews>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 특정 스터디의 id, 제목, 리뷰 */
export const Primary: Story = {};
