import type { Meta, StoryObj } from '@storybook/react';
import { MypageGnb } from '.';

const meta = {
  component: MypageGnb,
} satisfies Meta<typeof MypageGnb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { handleMypageGnbMenu: () => {} },
};
