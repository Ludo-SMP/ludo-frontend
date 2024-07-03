import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '.';

const meta = {
  component: Stack,
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 진행 중 */
export const Primary: Story = {
  args: {
    children: [<div>1</div>, <div>2</div>, <div>3</div>],
  },
};
