import type { Meta, StoryObj } from '@storybook/react';
import { ModalContent } from './ModalContent';
import { fn } from '@storybook/test';

const meta = {
  component: ModalContent,
  args: {
    onClose: fn(),
    open: true,
    children: 'yeee',
  },
} satisfies Meta<typeof ModalContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
