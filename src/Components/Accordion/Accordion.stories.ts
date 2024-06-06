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
    createdAt: '2024-05-21T20:34:19.884948',
    children: '알림 내용',
  },
} satisfies Story;
