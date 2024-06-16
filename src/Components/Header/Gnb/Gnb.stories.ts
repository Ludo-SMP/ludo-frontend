import type { Meta, StoryObj } from '@storybook/react';
import Gnb from '.';

const meta = {
  component: Gnb,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Gnb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
