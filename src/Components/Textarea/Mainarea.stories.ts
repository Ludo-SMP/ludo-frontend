import type { Meta, StoryObj } from '@storybook/react';
import { ContactUrlInput } from './ContactUrlInput';
import { fn } from '@storybook/test';

const meta = {
  component: ContactUrlInput,
  args: {
    setForm: fn(),
    useForm: {},
  },
} satisfies Meta<typeof ContactUrlInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
