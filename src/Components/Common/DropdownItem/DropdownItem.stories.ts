import type { Meta, StoryObj } from '@storybook/react';
import DropdownItem from '.';

const meta = {
  component: DropdownItem,
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: () => void 0,
    children: '선택 아이템',
  },
};
