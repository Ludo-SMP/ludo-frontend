import type { Meta, StoryObj } from '@storybook/react';
import { CalendarButton } from './CalendarButton';

const meta = {
  component: CalendarButton,
} satisfies Meta<typeof CalendarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '캘린더',
  },
};
