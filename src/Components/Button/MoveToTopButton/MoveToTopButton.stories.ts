import type { Meta, StoryObj } from '@storybook/react';
import MoveToTopButton from '.';

const meta = {
  component: MoveToTopButton,
} satisfies Meta<typeof MoveToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '위로',
  },
};
