import type { Meta, StoryObj } from '@storybook/react';
import { StackContent } from './StackContent';

const meta = {
  component: StackContent,
} satisfies Meta<typeof StackContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
