import type { Meta, StoryObj } from '@storybook/react';
import StudyToken from '.';

const meta = {
  component: StudyToken,
} satisfies Meta<typeof StudyToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    status: 'RECRUITED',
  },
};
