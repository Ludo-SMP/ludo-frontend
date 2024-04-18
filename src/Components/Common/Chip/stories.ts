import type { Meta, StoryObj } from '@storybook/react';
import Chip from '.';

const meta = {
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    chipType: 'Primary',
    position: {
      id: 1,
      name: '백엔드',
    },
  },
};
