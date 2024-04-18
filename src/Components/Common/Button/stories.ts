import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Submit: Story = {
  args: {
    children: '제출',
    type: 'submit',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    scheme: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    scheme: 'secondary',
  },
};

export const Third: Story = {
  args: {
    children: 'Third',
    scheme: 'third',
  },
};

export const Normal: Story = {
  args: {
    children: 'Normal',
    scheme: 'normal',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Disabled',
    size: 'fullWidth',
  },
};
