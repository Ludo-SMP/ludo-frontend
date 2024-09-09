import type { Meta, StoryObj } from '@storybook/react';
import { RecruitmentDetailModal } from '.';

const meta = {
  component: RecruitmentDetailModal,
  args: {
    handleModal: () => {},
    recruitmentId: 1,
  },
} satisfies Meta<typeof RecruitmentDetailModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
