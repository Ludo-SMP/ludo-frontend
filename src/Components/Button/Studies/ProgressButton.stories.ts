import type { Meta, StoryObj } from '@storybook/react';
import { ProgressButton } from './ProgressButton';

const meta = {
  component: ProgressButton,
} satisfies Meta<typeof ProgressButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
