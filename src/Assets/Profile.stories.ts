import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from './Profile';

const meta = {
  component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {} satisfies Story;

/** 이메일 주소가 있을 경우, 해당 이메일 주소의 Gravatar 이미지를 불러옵니다. */
export const Gravatar: Story = {
  args: {
    email: 'support@ludo.study',
  },
} satisfies Story;
