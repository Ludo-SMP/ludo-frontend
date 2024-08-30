import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from '.';

const meta = {
  component: LoadingSpinner,
  args: {},
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
