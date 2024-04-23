import type { Meta, StoryObj } from '@storybook/react';
import { BlankSquare } from '.';

const meta = {
  component: BlankSquare,
} satisfies Meta<typeof BlankSquare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
