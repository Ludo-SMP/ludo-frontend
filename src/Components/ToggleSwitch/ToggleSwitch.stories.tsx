import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from '.';

const meta = {
  component: ToggleSwitch,
  args: {
    toggleMutate: () => Promise<any>,
  },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'ALL_CONFIG',
    toggleMutate: () => Promise<any>,
    disabled: false,
    defaultChecked: true,
  },
};
