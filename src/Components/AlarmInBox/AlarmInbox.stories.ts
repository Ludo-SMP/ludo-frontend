import type { Meta, StoryObj } from '@storybook/react';
import { AlarmInbox } from '.';

const meta = {
  component: AlarmInbox,
} satisfies Meta<typeof AlarmInbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { alarmPreviews: [] },
} satisfies Story;

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
