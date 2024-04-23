import type { Meta, StoryObj } from '@storybook/react';
import NotFoundResult from '.';

const meta = {
  component: NotFoundResult,
} satisfies Meta<typeof NotFoundResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
