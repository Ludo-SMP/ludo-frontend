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
