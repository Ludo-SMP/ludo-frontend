import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '.';
import { DefaultStudyThumbnail } from '@/Assets';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: '알림 제목',
    imgUrl: DefaultStudyThumbnail,
    children: '알림 내용',
  },
} satisfies Story;
