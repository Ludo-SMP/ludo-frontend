import type { Meta, StoryObj } from '@storybook/react';
import { AlarmInbox } from '.';
import { mockNotifications } from '@/Mocks/data/mockNotifications';

const meta = {
  component: AlarmInbox,
  args: {
    isOpen: true,
    alarmPreviews: mockNotifications.slice(0, 3),
  },
} satisfies Meta<typeof AlarmInbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { isOpen: true },
} satisfies Story;

export const Close: Story = {
  args: {
    isOpen: false,
  },
};

export const AlarmInboxWithSeveralAlarms: Story = {
  args: {
    alarmPreviews: [
      {
        notificationId: 1,
        title: '스터디 지원 현황 알림',
        content: '스터디 지원 현황 알림',
        type: 'STUDY_APPLICANT',
        read: false,
        params: {
          studyId: 3,
        },
        createdAt: '2024-05-21T20:34:19.884948',
      },
    ],
  },
};
