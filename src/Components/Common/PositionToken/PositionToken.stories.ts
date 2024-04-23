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
