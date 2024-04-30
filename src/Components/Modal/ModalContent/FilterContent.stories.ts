import type { Meta, StoryObj } from '@storybook/react';
import { FilterContent } from './FilterContent';

const meta = {
  component: FilterContent,
} satisfies Meta<typeof FilterContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
