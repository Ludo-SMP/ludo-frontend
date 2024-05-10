import type { Meta, StoryObj } from '@storybook/react';
import { ProgressPeriod } from './ProgressPeriod';

const meta = {
  component: ProgressPeriod,
  parameters: {
    docs: {
      story: {
        height: '300px',
      },
    },
  },
} satisfies Meta<typeof ProgressPeriod>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
