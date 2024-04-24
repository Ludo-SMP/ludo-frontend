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

export const Primary: Story = {
  args: {
    src: 'https://via.placeholder.com/128',
  },
};

/** 이미지가 로딩되지 않을 경우, 대체 텍스트를 표시합니다. */
export const Alt: Story = {
  args: {
    alt: 'Alt text',
  },
};
