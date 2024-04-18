import type { Meta, StoryObj } from '@storybook/react';
import { ContactUrlInput } from './ContactUrlInput';

const meta = {
  component: ContactUrlInput,
  args: {
    setForm: () => void 0,
    useForm: {},
  },
} satisfies Meta<typeof ContactUrlInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
