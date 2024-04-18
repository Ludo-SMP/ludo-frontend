import type { Meta, StoryObj } from '@storybook/react';
import { InfoField } from '.';

const meta = {
  component: InfoField,
  args: {
    title: '포지션',
    content: '백엔드',
  },
} satisfies Meta<typeof InfoField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const FlexDirection: Story = {
  args: {
    flexDirection: 'column',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
