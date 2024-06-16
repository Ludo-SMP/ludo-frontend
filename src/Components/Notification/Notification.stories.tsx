import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '.';

const meta = {
  component: Notification,
  args: {
    type: 'RECRUITMENT',
    notificationId: 2,
    title: '관심 항목으로 선택한 디자이너 모집 공고가 나왔습니다.',
    content: '관심 항목으로 선택한 디자이너 모집 공고가 나왔습니다.',
    read: false,
    params: {
      studyId: 3,
      userId: 5,
    },
    createdAt: '2024-05-21T20:34:19.884948',
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const STUDY_APPLICANT_ACCEPT: Story = {
  args: {
    notificationId: 4,
    title: '스터디 LUDO 지원결과가 나왔습니다.',
    content: '스터디 LUDO에 합류하게 되신 것을 축하드립니다.',
    type: 'STUDY_APPLICANT_ACCEPT',
    read: false,
    params: {
      studyId: 3,
    },
    createdAt: '2024-05-21T20:34:19.884948',
  },
};
