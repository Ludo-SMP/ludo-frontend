import type { Meta, StoryObj } from '@storybook/react';
import DropdownItem from '.';
import { fn } from '@storybook/test';

const meta = {
  component: DropdownItem,
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: fn(),
    children: '선택 아이템',
  },
};
