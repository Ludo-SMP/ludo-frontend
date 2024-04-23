import type { Meta, StoryObj } from '@storybook/react';
import SocialLogin from '.';

const meta = {
  component: SocialLogin,
} satisfies Meta<typeof SocialLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Google: Story = {
  args: {
    socialType: 'google',
    signType: 'signup',
  },
};

export const Kakao: Story = {
  args: {
    socialType: 'kakao',
    signType: 'signup',
  },
};

export const Naver: Story = {
  args: {
    socialType: 'naver',
    signType: 'signup',
  },
};

export const GoogleLogin: Story = {
  args: {
    socialType: 'google',
    signType: 'login',
  },
};

export const KakaoLogin: Story = {
  args: {
    socialType: 'kakao',
    signType: 'login',
  },
};

export const NaverLogin: Story = {
  args: {
    socialType: 'naver',
    signType: 'login',
  },
};
