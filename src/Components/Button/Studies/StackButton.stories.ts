import type { Meta, StoryObj } from '@storybook/react';
import { StackButton } from './StackButton';
import { fn } from '@storybook/test';

const meta = {
  component: StackButton,
} satisfies Meta<typeof StackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: fn(),
    children: '스택',
  },
};
