import type { Meta, StoryObj } from '@storybook/react';
import { ReviewQuestion } from './ReviewQuestion';

const meta = {
  component: ReviewQuestion,
  args: {
    title: '1. 이 스터디원은 스터디에 적극적이었나요?',
    contents: ['아쉬워요.', '적극적이에요.'],
  },
} satisfies Meta<typeof ReviewQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const MoreThanFiveOptions: Story = {
  args: {
    optionCnt: 7,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};
