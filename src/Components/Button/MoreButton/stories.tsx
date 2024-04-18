import type { Meta, StoryObj } from '@storybook/react';
import MoreButton from '.';

const meta = {
  component: MoreButton,
} satisfies Meta<typeof MoreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div>More</div>,
  },
};
