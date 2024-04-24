import type { Meta, StoryObj } from '@storybook/react';
import { PositionButton } from './PositionButton';

const meta = {
  component: PositionButton,
} satisfies Meta<typeof PositionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
