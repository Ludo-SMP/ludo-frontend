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

/** `type` 속성을 `submit`으로 설정하면 해당 버튼이 폼을 제출하는 역할을 합니다. */
export const Submit: Story = {
  args: {
    children: '제출',
    type: 'submit',
  },
};

/** 중요한 의미를 가지는 버튼에 사용합니다. */
export const Primary: Story = {
  args: {
    children: 'Primary',
    scheme: 'primary',
  },
};

/** Primary에 비해 덜 중요한 의미를 가지는 버튼에 사용합니다. */
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

/** 일반적인 형태의 버튼입니다. */
export const Normal: Story = {
  args: {
    children: 'Normal',
    scheme: 'normal',
  },
};

/** 비활성화된 상태의 버튼입니다. */
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

/** 버튼의 크기를 부모 요소의 전체 너비로 설정합니다. */
export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    children: 'Full Width',
    size: 'fullWidth',
  },
};
