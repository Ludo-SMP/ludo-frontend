import type { Meta, StoryObj } from '@storybook/react';
import Chip from '.';

const meta = {
  component: Chip,
  args: {
    onClick: () => void 0,
    checked: false,
    children: '모의 면접',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
