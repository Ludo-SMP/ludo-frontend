import type { Meta, StoryObj } from '@storybook/react';
import TemporarySavedCard from '.';
import { fn } from '@storybook/test';

const meta = {
  component: TemporarySavedCard,
  args: {
    title: '제목',
    onRemove: fn(),
  },
} satisfies Meta<typeof TemporarySavedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 스터디 작성 임시저장 */
export const Study: Story = {
  args: {
    savedKey: 'STUDY-UUID-KEY',
  },
};

/** 스터디 모집 공고 임시저장 */
export const Recruitment: Story = {
  args: {
    savedKey: 'RECRUITMENT-UUID-KEY',
  },
};
