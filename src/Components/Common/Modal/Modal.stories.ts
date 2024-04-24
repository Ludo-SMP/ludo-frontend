import type { Meta, StoryObj } from '@storybook/react';
import Modal from '.';
import { fn } from '@storybook/test';

const meta = {
  component: Modal,
  args: {
    handleApprove: fn(),
    children: '내용',
    approveBtnText: '승인',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Title: Story = {
  args: {
    title: '제목',
  },
};

export const CenteredTitle: Story = {
  args: {
    title: '제목',
    alignTitle: 'center',
  },
};

export const Cancelable: Story = {
  args: {
    cancelBtnText: '취소',
  },
};

export const CancelableAsymmetric: Story = {
  args: {
    cancelBtnText: '취소',
    isBtnWidthEqual: false,
  },
};
