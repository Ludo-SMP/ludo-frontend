import type { Meta, StoryObj } from '@storybook/react';
import Chip from '.';

const meta = {
  component: Chip,
  args: {
    onClick: () => void 0,
    children: '모의 면접',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checked: false,
  },
};
