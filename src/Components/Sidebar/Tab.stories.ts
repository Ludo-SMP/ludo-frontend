import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta = {
  component: Tab,
  args: {
    children: '제목',
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Active: Story = {
  args: {
    $active: true,
  },
};
