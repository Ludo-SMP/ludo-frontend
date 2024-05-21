import type { Meta, StoryObj } from '@storybook/react';
import { StudyProgress } from './StudyProgress';

const meta = {
  component: StudyProgress,
  args: {
    totalStudy: 9,
    completedStudy: 6,
  },
  decorators: [
    (S) => (
      <div
        style={{
          width: 400,
        }}
      >
        <S />
      </div>
    ),
  ],
} satisfies Meta<typeof StudyProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Newbie: Story = {
  args: {
    totalStudy: 0,
    completedStudy: 0,
  },
};

export const Max: Story = {
  args: {
    totalStudy: 10,
    completedStudy: 10,
  },
};
