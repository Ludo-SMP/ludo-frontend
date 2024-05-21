import type { Meta, StoryObj } from '@storybook/react';
import { CustomRadio } from './CustomRadio';

const meta = {
  component: CustomRadio,
} satisfies Meta<typeof CustomRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 1,
    checked: true,
    setSelectedValue: () => {},
  },
};

export const NotChecked: Story = {
  args: {
    value: null,
    checked: false,
    setSelectedValue: () => {},
  },
};

export const LargeSize: Story = {
  args: {
    value: 4,
    checked: true,
    size: 80,
    setSelectedValue: () => {},
  },
};
