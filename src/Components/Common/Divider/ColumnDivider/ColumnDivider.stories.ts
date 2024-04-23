import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDivider } from '.';

const meta = {
  component: ColumnDivider,
} satisfies Meta<typeof ColumnDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
