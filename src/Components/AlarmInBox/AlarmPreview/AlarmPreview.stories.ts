import type { Meta, StoryObj } from '@storybook/react';
import { AlarmPreview } from '.';

const meta = {
  component: AlarmPreview,
} satisfies Meta<typeof AlarmPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    notificationId: 1,
    title: '스터디 지원 현황 알림',
    content: '스터디 지원 현황 알림',
    type: 'STUDY_APPLICANT',
    params: {
      studyId: 3,
    },
    createdAt: '2024-05-21T20:34:19.884948',
  },
} satisfies Story;
