import type { Meta, StoryObj } from '@storybook/react';
import InputText from './iindex';

const meta = {
  component: InputText,
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
