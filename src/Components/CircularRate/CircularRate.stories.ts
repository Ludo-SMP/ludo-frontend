import type { Meta, StoryObj } from '@storybook/react';
import { CircularRate } from '.';
import { theme } from '@/Styles/theme';

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
  args: {
    percentage: 70,
    label: '전문성',
  },
} satisfies Meta<typeof CircularRate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CirculatingGradient: Story = {
  args: {
    gradientColors: [theme.color.purple1, theme.color.orange1, theme.color.purple1],
  },
};
