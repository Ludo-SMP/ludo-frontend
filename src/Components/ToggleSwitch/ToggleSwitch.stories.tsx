import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from '.';

const meta = {
  component: ToggleSwitch,
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
} satisfies Story;
