import type { Meta, StoryObj } from '@storybook/react';
import SocialLogin from '.';

const meta = {
  component: SocialLogin,
} satisfies Meta<typeof SocialLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    socialType: 'google',
    signType: 'signup',
  },
};
