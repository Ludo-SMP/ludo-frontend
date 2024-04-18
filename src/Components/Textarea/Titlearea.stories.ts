import type { Meta, StoryObj } from '@storybook/react';
import { Titlearea } from './Titlearea';

const meta = {
  component: Titlearea,
  args: {
    setForm: () => void 0,
    useForm: {},
  },
} satisfies Meta<typeof Titlearea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
