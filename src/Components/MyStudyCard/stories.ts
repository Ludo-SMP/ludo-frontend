import type { Meta, StoryObj } from '@storybook/react';
import MyStudyCard from '.';

const meta = {
  component: MyStudyCard,
  args: {
    id: 1,
    title: '스터디',
    status: 'PROGRESS',
    position: {
      id: 1,
      name: '백엔드',
    },
    period: '2021-01-01 ~ 2021-12-31',
    participantCount: 3,
  },
} satisfies Meta<typeof MyStudyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithoutRecruitment: Story = {
  args: {
    hasRecruitment: false,
    isOwner: true,
  },
};

export const CancelApply: Story = {
  args: {
    status: 'UNCHECKED',
  },
};

export const DeleteApply: Story = {
  args: {
    status: 'ACCEPTED',
  },
};
