import type { Meta, StoryObj } from '@storybook/react';
import { ApplicantCard } from '.';

const meta = {
  component: ApplicantCard,
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
    totalAttendance: 20,
    recentAttendanceDate: '2024-05-21',
    isOwner: false,
    reviewStatistics: {
      activeness: 35,
      professionalism: 93,
      communication: 11,
      together: 55,
      recommend: 64,
    },
  },
} satisfies Meta<typeof ApplicantCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 기본 */
export const Primary: Story = {};

/**
 * 스터디장의 경우, 해당 지원을 수락 또는 거절할 수 있는 버튼이 표시됩니다.
 */
export const Owner: Story = {
  args: {
    isOwner: true,
  },
};

/**
 * 신규 사용자의 경우, 리뷰 통계 데이터가 표시되지 않습니다.
 */
export const Newbie: Story = {
  args: {
    reviewStatistics: {
      activeness: 0,
      professionalism: 0,
      communication: 0,
      together: 0,
      recommend: 0,
    },
  },
};
