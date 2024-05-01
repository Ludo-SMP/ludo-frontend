import type { Meta, StoryObj } from '@storybook/react';
import Filter from '.';

const meta = {
  component: Filter,
  args: {
    children: '백엔드',
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

/** 필터가 선택되었을 때 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};
