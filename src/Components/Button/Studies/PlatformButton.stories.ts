import type { Meta, StoryObj } from '@storybook/react';
import { PlatformButton } from './PlatformButton';

const meta = {
  component: PlatformButton,
} satisfies Meta<typeof PlatformButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
