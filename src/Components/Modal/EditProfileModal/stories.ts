import type { Meta, StoryObj } from '@storybook/react';
import EditProfileModal from '.';

const meta = {
  component: EditProfileModal,
  args: {
    userNickname: '팀원',
    handleEdit: () => void 0,
  },
} satisfies Meta<typeof EditProfileModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
