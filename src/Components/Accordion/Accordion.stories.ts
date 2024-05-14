import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '.';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '알림 제목',
    children: '알림 내용',
  },
} satisfies Story;

export const Description: Story = {
  args: {
    title: '알림 제목',
    description: '알림 설명',
    children: '알림 내용',
  },
} satisfies Story;
