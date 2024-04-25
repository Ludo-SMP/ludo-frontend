import type { Meta, StoryObj } from '@storybook/react';
import { StudyButton } from './StudyButton';
import { fn } from '@storybook/test';

const meta = {
  component: StudyButton,
} satisfies Meta<typeof StudyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '스터디',
    onClick: fn(),
  },
};
