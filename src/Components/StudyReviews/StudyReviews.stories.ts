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
      {
        selfReview: {
          reviewerId: 1,
          revieweeId: 3,
          activenessScore: 2,
          professionalismScore: 3,
          communicationScore: 4,
          togetherScore: 5,
          recommendScore: 1,
        },
        peerReview: {
          reviewerId: 3,
          revieweeId: 1,
          activenessScore: 5,
          professionalismScore: 1,
          communicationScore: 3,
          togetherScore: 2,
          recommendScore: 4,
        },
      },
      {
        selfReview: null,
        peerReview: {
          reviewerId: 4,
          revieweeId: 1,
          activenessScore: 5,
          professionalismScore: 1,
          communicationScore: 3,
          togetherScore: 2,
          recommendScore: 4,
        },
      },
      {
        selfReview: {
          reviewerId: 1,
          revieweeId: 5,
          activenessScore: 2,
          professionalismScore: 3,
          communicationScore: 4,
          togetherScore: 5,
          recommendScore: 1,
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
