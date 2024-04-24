import type { Meta, StoryObj } from '@storybook/react';
import { ContactButton } from './ContactButton';

const meta = {
  component: ContactButton,
} satisfies Meta<typeof ContactButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
