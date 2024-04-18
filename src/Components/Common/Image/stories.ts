import type { Meta, StoryObj } from '@storybook/react';
import Image from '.';

const meta = {
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 128,
  },
};
