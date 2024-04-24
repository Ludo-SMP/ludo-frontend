import type { Meta, StoryObj } from '@storybook/react';
import Modal from '.';
import { fn } from '@storybook/test';

const meta = {
  component: Modal,
  parameters: {
    docs: {
      story: {
        height: '250px',
      },
    },
    layout: 'padded',
  },
  args: {
    handleApprove: fn(),
    children: '내용',
    approveBtnText: '승인',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

/** 제목이 있는 모달 */
export const Title: Story = {
  args: {
    title: '제목',
  },
};

/** 제목이 중앙 정렬된 경우 */
export const CenteredTitle: Story = {
  args: {
    title: '제목',
    alignTitle: 'center',
  },
};

/** 취소 가능한 모달 */
export const Cancelable: Story = {
  args: {
    cancelBtnText: '취소',
  },
};

/** 취소 버튼의 너비가 승인 버튼과 다른 형태 */
export const CancelableAsymmetric: Story = {
  args: {
    cancelBtnText: '취소',
    isBtnWidthEqual: false,
  },
};
