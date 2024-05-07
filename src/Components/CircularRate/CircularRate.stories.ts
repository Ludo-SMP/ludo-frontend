import type { Meta, StoryObj } from '@storybook/react';
import { CircularRate } from '.';

const meta = {
  component: CircularRate,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
} satisfies Meta<typeof CircularRate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percentage: 70,
  },
};
