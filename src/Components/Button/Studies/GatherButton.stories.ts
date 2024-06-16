import type { Meta, StoryObj } from '@storybook/react';
import { GatherButton } from './GatherButton';

const meta = {
  component: GatherButton,
} satisfies Meta<typeof GatherButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
