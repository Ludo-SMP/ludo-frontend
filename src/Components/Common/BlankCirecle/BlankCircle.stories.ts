import type { Meta, StoryObj } from '@storybook/react';
import BlankCircle from '.';

const meta = {
  component: BlankCircle,
} satisfies Meta<typeof BlankCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
