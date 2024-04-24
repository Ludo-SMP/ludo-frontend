import type { Meta, StoryObj } from '@storybook/react';
import { Titlearea } from './Titlearea';
import { fn } from '@storybook/test';

const meta = {
  component: Titlearea,
  args: {
    setForm: fn(),
    useForm: {},
  },
} satisfies Meta<typeof Titlearea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
