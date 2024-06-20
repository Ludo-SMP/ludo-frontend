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
    totalAttendance: 10,
    recentAttendanceDate: '2024-5-21',
  },
} satisfies Meta<typeof MemberProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

/** 해당 스터디원이 본인인 경우 */
export const IsSelf: Story = {
  args: {
    isSelf: true,
  },
};

/** 당일 출석을 완료한 경우 */
export const Attended: Story = {
  args: {
    attended: true,
  },
};
