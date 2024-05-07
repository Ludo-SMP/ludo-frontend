import type { Meta, StoryObj } from '@storybook/react';
import { LabelText } from '.';

const meta = {
  component: LabelText,
  args: {
    label: '포지션',
  },
} satisfies Meta<typeof LabelText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: '포지션',
    text: '백엔드',
  },
};
