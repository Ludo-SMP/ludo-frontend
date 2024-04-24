import type { Meta, StoryObj } from '@storybook/react';
import ApplyModal from '.';
import { fn } from '@storybook/test';

const meta = {
  component: ApplyModal,
  args: {
    handleApplyApprove: fn(),
    studyId: 1,
    recruitmentId: 1,
  },
} satisfies Meta<typeof ApplyModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    positions: [
      {
        id: 1,
        name: '백엔드',
      },
      {
        id: 2,
        name: '디자이너',
      },
      {
        id: 3,
        name: '프론트엔드',
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    positions: [],
  },
};
