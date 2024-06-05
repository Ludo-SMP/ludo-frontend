import type { Meta, StoryObj } from '@storybook/react';
import { TopBar } from '.';

const meta = {
  component: TopBar,
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '스터디원이 남긴 나의 리뷰',
  },
} satisfies Story;
