import type { Meta, StoryObj } from '@storybook/react';
import StudyToken from '.';

const meta = {
  component: StudyToken,
} satisfies Meta<typeof StudyToken>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 진행 중 */
export const Progress: Story = {
  args: {
    status: 'PROGRESS',
  },
};

/** 모집 중 */
export const Recruiting: Story = {
  args: {
    status: 'RECRUITING',
  },
};

/** 모집 완료 */
export const Recruited: Story = {
  args: {
    status: 'RECRUITED',
  },
};

/** 진행 완료 */
export const Completed: Story = {
  args: {
    status: 'COMPLETED',
  },
};

/** 지원 중 */
export const Unchecked: Story = {
  args: {
    status: 'UNCHECKED',
  },
};

/** 지원 수락 */
export const Accepted: Story = {
  args: {
    status: 'ACCEPTED',
  },
};

/** 지원 거절 */
export const Refused: Story = {
  args: {
    status: 'REFUSED',
  },
};

/** 참여 중인 스터디 */
export const Participated: Story = {
  args: {
    status: 'PARTICIPATED',
  },
};
