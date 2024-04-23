import type { Meta, StoryObj } from '@storybook/react';
import UserCard from '.';

const meta = {
  component: UserCard,
} satisfies Meta<typeof UserCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    nickname: '스터디원',
    email: 'user@example.com',
  },
};
