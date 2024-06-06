import type { Meta, StoryObj } from '@storybook/react';
import { NotificationWithText } from '.';

const meta = {
  component: NotificationWithText,
  args: {
    type: 'RECRUITMENT',
    notificationId: 2,
    title: '관심 항목으로 선택한 디자이너 모집 공고가 나왔습니다.',
    content: '관심 항목으로 선택한 디자이너 모집 공고가 나왔습니다.',
    read: false,
    params: {
      recruitmentId: 2,
    },
    createdAt: '2024-05-21T20:34:19.884948',
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const ReviewReceive: Story = {
  args: {
    notificationId: 10,
    title: '진행 완료된 스터디에서 다른 스터디원의 리뷰가 업로드되었습니다.',
    content: '진행 완료된 스터디에서 다른 스터디원의 리뷰가 업로드되었습니다.',
    type: 'REVIEW_RECEIVE',
    read: false,
    params: {
      studyId: 3,
      userId: 3,
    },
    createdAt: '2024-05-21T20:34:19.884948',
  },
};
