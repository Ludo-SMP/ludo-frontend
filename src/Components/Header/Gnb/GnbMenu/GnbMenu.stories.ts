import type { Meta, StoryObj } from '@storybook/react';
import GnbMenu from '.';
import { fn } from '@storybook/test';

const meta = {
  component: GnbMenu,
} satisfies Meta<typeof GnbMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: '메인 페이지',
    onClick: fn(),
  },
};
