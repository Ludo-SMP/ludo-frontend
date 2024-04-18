import type { Meta, StoryObj } from '@storybook/react';
import { FilterButton } from './FilterButton';

const meta = {
  component: FilterButton,
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '필터',
    onClick: () => void 0,
  },
};
