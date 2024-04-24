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

/** 스터디 작성 임시저장 */
export const Study: Story = {
  args: {
    card: 'STUDY',
  },
};

/** 스터디 모집 공고 임시저장 */
export const Recruitment: Story = {
  args: {
    card: 'RECRUITMENT',
  },
};
