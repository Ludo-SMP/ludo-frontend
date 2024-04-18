import type { Meta, StoryObj } from '@storybook/react';
import MemberProfile from '.';

const meta = {
  component: MemberProfile,
  args: {
    id: 1,
    nickname: '스터디원',
    email: 'user@example.com',
    position: {
      id: 1,
      name: '백엔드',
    },
    role: 'MEMBER',
  },
} satisfies Meta<typeof MemberProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
