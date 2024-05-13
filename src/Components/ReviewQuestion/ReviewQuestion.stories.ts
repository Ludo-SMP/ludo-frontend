import type { Meta, StoryObj } from '@storybook/react';
import { ReviewQuestion } from './ReviewQuestion';

const meta = {
  component: ReviewQuestion,
} satisfies Meta<typeof ReviewQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '평가 문항',
    contents: ['매우 만족', '매우 불만족'],
  },
};
