import type { Meta, StoryObj } from '@storybook/react';
import { ReviewQuestion } from './ReviewQuestion';

const meta = {
  component: ReviewQuestion,
} satisfies Meta<typeof ReviewQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '1. 이 스터디원은 스터디에 적극적이었나요?',
    contents: ['아쉬워요.', '적극적이에요.'],
  },
};

export const MoreTahnFiveOptions: Story = {
  args: {
    title: '2. 이 스터디원은 본인의 업무에 전문적이있나요?',
    contents: ['아쉬워요.', '적극적이에요.'],
    optionCnt: 7,
  },
};
