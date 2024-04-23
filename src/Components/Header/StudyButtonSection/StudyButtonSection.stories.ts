import type { Meta, StoryObj } from '@storybook/react';
import StudyButtonSection from '.';

const meta = {
  component: StudyButtonSection,
} satisfies Meta<typeof StudyButtonSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
