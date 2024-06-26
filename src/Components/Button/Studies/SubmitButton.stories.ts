import type { Meta, StoryObj } from '@storybook/react';
import { SubmitButton } from './SubmitButton';

const meta = {
  component: SubmitButton,
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '제출',
  },
};
