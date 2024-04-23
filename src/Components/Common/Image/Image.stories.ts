import type { Meta, StoryObj } from '@storybook/react';
import Image from '.';

const meta = {
  component: Image,
  args: {
    size: 128,
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Src: Story = {
  args: {
    src: 'https://via.placeholder.com/128',
  },
};

export const Alt: Story = {
  args: {
    alt: 'Alt text',
  },
};
