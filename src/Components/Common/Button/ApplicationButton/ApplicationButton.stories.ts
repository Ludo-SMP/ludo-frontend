import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationButton } from './ApplicationButton';
import { fn } from '@storybook/test';

const meta = {
  component: ApplicationButton,
} satisfies Meta<typeof ApplicationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '더보기',
    onClick: fn(),
  },
};
