import type { Meta, StoryObj } from '@storybook/react';
import Modal from '.';

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '내용',
    approveBtnText: '승인',
    handleApprove: () => void 0,
  },
};
