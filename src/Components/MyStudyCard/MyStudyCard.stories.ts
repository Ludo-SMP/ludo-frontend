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

/** 스터디 모집 공고가 없을 때 */
export const WithoutRecruitment: Story = {
  args: {
    hasRecruitment: false,
    isOwner: true,
  },
};

/** 지원을 넣었을 때 */
export const CancelApply: Story = {
  args: {
    status: 'UNCHECKED',
  },
};

/** 지원 요청이 수락되었을 때 */
export const DeleteApply: Story = {
  args: {
    status: 'ACCEPTED',
  },
};
