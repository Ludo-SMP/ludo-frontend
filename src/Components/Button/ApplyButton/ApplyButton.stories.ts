import type { Meta, StoryObj } from '@storybook/react';
import ApplyButton from '.';

const meta = {
  component: ApplyButton,
} satisfies Meta<typeof ApplyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '지원',
  },
};
