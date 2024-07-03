import type { Meta, StoryObj } from '@storybook/react';
import { StarScore } from '.';

const meta = {
  component: StarScore,
  args: {
    score: 0,
    studyId: 1,
  },
} satisfies Meta<typeof StarScore>;

export default meta;
type Story = StoryObj<typeof meta>;

/* 0점 */
export const ScoreZero: Story = {};

/** 1점 */
export const ScoreOne: Story = {
  args: { score: 1 },
};

/** 2점 */
export const ScoreTwo: Story = { args: { score: 2 } };

/** 3점 */
export const ScoreThree: Story = { args: { score: 3 } };

/** 4점 */
export const ScoreFour: Story = { args: { score: 4 } };

/** 5점 */
export const ScoreFive: Story = { args: { score: 5 } };
