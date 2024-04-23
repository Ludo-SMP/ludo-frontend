import type { Meta, StoryObj } from '@storybook/react';
import DropdownItem from '.';

const meta = {
  component: DropdownItem,
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    handleClick: () => void 0,
    filterOption: 'CATEGORY',
    item: { id: 1, name: '프로젝트' },
  },
};
