import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '.';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    notificationId: 1,
    title: 'Ludo 스터디에 지원한 지원자가 있습니다.',
    content: 'Ludo 스터디에 지원한 지원자가 있습니다.',
    type: 'STUDY_APPLICANT',
    read: false,
    params: {
      studyId: 3,
    },
    createdAt: '2024-05-21T20:34:19.884948',
  },
} satisfies Story;
