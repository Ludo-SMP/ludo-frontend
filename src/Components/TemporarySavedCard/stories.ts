import type { Meta, StoryObj } from '@storybook/react';
import TemporarySavedCard from '.';

const meta = {
  component: TemporarySavedCard,
  args: {
    title: '제목',
    content: '내용',
  },
} satisfies Meta<typeof TemporarySavedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    card: 'STUDY',
  },
};

export const Recruitment: Story = {
  args: {
    card: 'RECRUITMENT',
  },
};
