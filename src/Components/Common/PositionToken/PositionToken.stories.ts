import type { Meta, StoryObj } from '@storybook/react';
import PositionToken from '.';

const meta = {
  component: PositionToken,
} satisfies Meta<typeof PositionToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: '백엔드',
  },
};

/** `name`이 주어지지 않았을 때, 흰 글씨로 "포지션" 이 표시되어야 합니다. */
export const IsEmpty: Story = {};
