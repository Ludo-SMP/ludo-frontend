import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LabelForm } from '.';

const meta = {
  component: LabelForm,
  args: {
    label: '포지션',
    children: React.createElement('input', { placeholder: 'input' }, null),
  },
} satisfies Meta<typeof LabelForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

/** 유효하지 않을 경우, 에러메시지를 표시합니다. 추후 작성*/
// export const Errors: Story = {
//   args: {
//     errors: {
//       positionIds: {
//         message: '포지션을 선택해주세요.',
//       },
//     },
//     name: 'positionIds',
//   },
// };

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
