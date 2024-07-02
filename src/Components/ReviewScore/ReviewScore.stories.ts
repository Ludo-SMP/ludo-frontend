import type { Meta, StoryObj } from '@storybook/react';
import { ReviewScore } from '.';

const meta = {
  component: ReviewScore,
  args: {
    studyId: 1,
    standard: '적극성',
    score: 1,
  },
} satisfies Meta<typeof ReviewScore>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 적극성 점수 */
export const ActivenessScore: Story = {};

/** 전문성 점수*/
export const ProfessionalismScore: Story = {
  args: {
    standard: '전문성',
    score: 2,
  },
};

/**소통력 점수*/
export const CommunicationScore: Story = {
  args: {
    standard: '소통력',
    score: 3,
  },
};

/** 만족도 점수*/
export const TogetherScore: Story = {
  args: {
    standard: '만족도',
    score: 4,
  },
};

/** 전문성 점수*/
export const RecommendScore: Story = {
  args: {
    standard: '추천도',
    score: 5,
  },
};
