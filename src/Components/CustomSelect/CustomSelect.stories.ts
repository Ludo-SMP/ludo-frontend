import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CustomSelect from './CustomSelect';
import { POSITION } from '@/Shared/study';

const meta = {
  component: CustomSelect,
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    values: POSITION,
    placeholder: '포지션을 선택해주세요',
    label: '포지션',
    onChange: fn(),
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: POSITION[0],
  },
};

export const MultiSelect: Story = {
  args: {
    defaultValue: POSITION[0],
    values: POSITION,
    isMulti: true,
    onChange: fn(),
  },
};
