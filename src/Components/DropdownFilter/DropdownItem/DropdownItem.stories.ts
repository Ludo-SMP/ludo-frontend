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
    handleClick: fn(),
    filterOption: 'CATEGORY',
    item: { id: 1, name: '프로젝트' },
  },
};
