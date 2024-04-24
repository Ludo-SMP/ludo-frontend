import type { Meta, StoryObj } from '@storybook/react';
import { ModalItem } from './Modalitem';

const meta = {
  component: ModalItem,
} satisfies Meta<typeof ModalItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
