import type { Meta, StoryObj } from '@storybook/react';
import ApplicationCard from '.';

const meta = {
  component: ApplicationCard,
} satisfies Meta<typeof ApplicationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 1,
    nickname: '닉네임',
    email: 'user@example.com',
    position: {
      id: 1,
      name: '백엔드',
    },
    studyId: 1,
    title: '스터디',
    isOwner: true,
  },
};
