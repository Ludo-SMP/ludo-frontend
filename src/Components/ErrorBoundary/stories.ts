import type { Meta, StoryObj } from '@storybook/react';
import ErrorBoundary from '.';

const meta = {
  component: ErrorBoundary,
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
