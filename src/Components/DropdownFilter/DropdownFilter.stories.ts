import type { Meta, StoryObj } from '@storybook/react';
import DropdownFilter from '.';

const meta = {
  component: DropdownFilter,
  args: {
    filterName: '카테고리',
    filterOption: 'CATEGORY',
    items: [
      { id: 1, name: '프로젝트' },
      { id: 2, name: '코딩 테스트' },
      { id: 3, name: '모의 면접' },
    ],
  },
} satisfies Meta<typeof DropdownFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
