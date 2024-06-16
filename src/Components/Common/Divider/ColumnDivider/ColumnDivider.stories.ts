import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDivider } from '.';

/** 세로 구분선 */
const meta = {
  component: ColumnDivider,
} satisfies Meta<typeof ColumnDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
