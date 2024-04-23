import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

/**
 * `Radio`는 공용 라디오 컴포넌트입니다. 크기가 작기 때문에 단독으로 쓰이기보다는 다른 요소들과 같이 쓰입니다.
 */
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

/**
 * `Checkbox`와 달리, `Radio`의 경우 해당 컴포넌트가 이미 선택되어 있을 경우 클릭하더라도 `onChange` 이벤트가 트리거되지 않습니다. 따라서 이 경우 클릭해도 함수가 호출되지 않습니다.
 */
export const FullWidth: Story = {
  args: {
    children: 'Disabled',
    size: 'fullWidth',
  },
};
