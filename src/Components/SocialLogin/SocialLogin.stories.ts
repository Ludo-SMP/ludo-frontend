import type { Meta, StoryObj } from '@storybook/react';
import SocialLogin from '.';

const meta = {
  component: SocialLogin,
} satisfies Meta<typeof SocialLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 구글 회원가입 */
export const Google: Story = {
  args: {
    socialType: 'google',
    signType: 'signup',
  },
};

/** 카카오 회원가입 */
export const Kakao: Story = {
  args: {
    socialType: 'kakao',
    signType: 'signup',
  },
};

/** 네이버 회원가입 */
export const Naver: Story = {
  args: {
    socialType: 'naver',
    signType: 'signup',
  },
};

/** 구글 로그인 */
export const GoogleLogin: Story = {
  args: {
    socialType: 'google',
    signType: 'login',
  },
};

/** 카카오 로그인 */
export const KakaoLogin: Story = {
  args: {
    socialType: 'kakao',
    signType: 'login',
  },
};

/** 네이버 로그인 */
export const NaverLogin: Story = {
  args: {
    socialType: 'naver',
    signType: 'login',
  },
};
