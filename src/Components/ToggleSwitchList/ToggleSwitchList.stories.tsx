import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitchList } from '.';

const meta = {
  component: ToggleSwitchList,
  args: {
    label: '전체 알림',
    description: '제목',
  },
} satisfies Meta<typeof ToggleSwitchList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'ALL_CONFIG',
    defaultChecked: false,
  },
};

export const Disabled: Story = {
  args: {
    type: 'ALL_CONFIG',
    disabled: true,
  },
};
