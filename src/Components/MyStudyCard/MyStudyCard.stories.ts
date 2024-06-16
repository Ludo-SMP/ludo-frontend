import type { Meta, StoryObj } from '@storybook/react';
import { MyStudyCard } from '.';

const meta = {
  component: MyStudyCard,
  args: {
    id: 1,
    title: '스터디 제목',
    status: 'PROGRESS',
    position: {
      id: 1,
      name: '백엔드',
    },
  },
} satisfies Meta<typeof MyStudyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    period: '2021-01-01 ~ 2021-12-31',
    participantCount: 3,
  },
};

/** 팀장 / 상태 : 진행중 / 스터디 모집 공고가 없는 경우 */
export const WithoutRecruitment: Story = {
  args: {
    hasRecruitment: false,
    status: 'PROGRESS',
    isOwner: true,
    period: '2021-01-01 ~ 2021-12-31',
    participantCount: 3,
  },
};

/** 팀장  / 상태 : 모집중 / 스터디 모집 공고가 있는 경우 */
export const WithRecruitment: Story = {
  args: {
    hasRecruitment: true,
    status: 'RECRUITING',
    isOwner: true,
    period: '2021-01-01 ~ 2021-12-31',
    participantCount: 3,
  },
};

/** 팀원 / 상태 : 진행중 / 스터디에 참여중인 경우 */
export const ParticipatedStudy: Story = {
  args: {
    status: 'PROGRESS',
    period: '2021-01-01 ~ 2021-12-31',
    participantCount: 3,
  },
};

/** 팀장 또는 팀원 / 상태 : 모집완료 / 모집완료 되었으나 스터디가 시작되지 않은 경우 */
export const RecruitedStudy: Story = {
  args: {
    status: 'RECRUITED',
    period: '2021-01-01 ~ 2021-12-31',
    participantCount: 3,
  },
};

/** 팀장 또는 팀원 / 상태 : 완료 / 스터디가 완료된 경우 */
export const CompletedStudy: Story = {
  args: {
    status: 'COMPLETED',
    period: '2021-01-01 ~ 2021-12-31',
    participantCount: 3,
  },
};

/** 팀원 / 상태 : 지원중 / 지원을 하였으나 스터디장의 수락/거절이 진행되지 않은 경우 */
export const UnCheckedApply: Story = {
  args: {
    status: 'UNCHECKED',
  },
};

/** 팀원 / 상태 : 지원 수락 / 지원 요청이 수락되었을 때 */
export const DeleteApply: Story = {
  args: {
    status: 'ACCEPTED',
  },
};

/** 팀원 / 상태 : 지원 거절 / 지원 요청이 거절되었을 때 */
export const RefusedApply = {
  args: {
    status: 'REFUSED',
  },
};
