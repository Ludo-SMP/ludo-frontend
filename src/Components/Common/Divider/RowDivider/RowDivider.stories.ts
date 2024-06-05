import type { Meta, StoryObj } from '@storybook/react';
import { RowDivider } from '.';

const meta = {
  component: RowDivider,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof RowDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    rowHeight: 8,
  },
};

export const Margin: Story = {
  args: {
    margin: 24,
  },
};
