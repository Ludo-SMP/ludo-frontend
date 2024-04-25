import type { Meta, StoryObj } from '@storybook/react';
import { ModalContainer } from './ModalContainer';

const meta = {
  component: ModalContainer,
} satisfies Meta<typeof ModalContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div>Modal</div>,
  },
};
