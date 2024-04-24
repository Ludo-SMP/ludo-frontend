import type { Meta, StoryObj } from '@storybook/react';
import { SaveButton } from './SaveButton';

const meta = {
  component: SaveButton,
} satisfies Meta<typeof SaveButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
