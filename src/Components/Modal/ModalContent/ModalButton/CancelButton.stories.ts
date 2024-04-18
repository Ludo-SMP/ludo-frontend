import type { Meta, StoryObj } from '@storybook/react';
import { CancelButton } from './CancelButton';

const meta = {
  component: CancelButton,
  args: {
    children: '선택취소',
  },
} satisfies Meta<typeof CancelButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
