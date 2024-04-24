import type { Meta, StoryObj } from '@storybook/react';
import { SelectButton } from './SelectButton';

const meta = {
  component: SelectButton,
  args: {
    children: '선택완료',
  },
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
