import type { Meta, StoryObj } from '@storybook/react';
import EditProfileModal from '.';
import { fn } from '@storybook/test';

const meta = {
  component: EditProfileModal,
  args: {
    userNickname: '팀원',
    handleEdit: fn(),
  },
} satisfies Meta<typeof EditProfileModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
