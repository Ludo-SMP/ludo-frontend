import type { Meta, StoryObj } from '@storybook/react';
import { InfoField } from '.';

const meta = {
  component: InfoField,
} satisfies Meta<typeof InfoField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '포지션',
    content: '백엔드',
  },
};
