import type { Meta, StoryObj } from '@storybook/react';
import UTBanner from '.';

const meta = {
  component: UTBanner,
} satisfies Meta<typeof UTBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
