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

/** 시작과 끝점이 같은 그라데이션 */
export const CirculatingGradient: Story = {
  args: {
    gradientColors: [theme.color.purple1, theme.color.orange1, theme.color.purple1],
    percentage: 100,
  },
};

/** 단색 그래프 */
export const Monotone: Story = {
  args: {
    gradientColors: [theme.color.purple1, theme.color.purple1],
  },
};

/** 적극성 */
export const Proactiveness: Story = {
  args: {
    percentage: 70,
    label: '적극성',
  },
};

/** 큰 사이즈 */
export const Bigger: Story = {
  args: {
    size: 100,
  },
};

/** 굵은 그래프 선 굵기 */
export const Bold: Story = {
  args: {
    barWeight: 8,
  },
};

/** 0% */
export const ZeroPercent: Story = {
  args: {
    percentage: 0,
  },
};

/** 100% */
export const FullPercent: Story = {
  args: {
    percentage: 100,
  },
};
