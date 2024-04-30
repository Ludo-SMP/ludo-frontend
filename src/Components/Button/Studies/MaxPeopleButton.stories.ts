import type { Meta, StoryObj } from '@storybook/react';
import { MaxPeopleButton } from './MaxPeopleButton';

const meta = {
  component: MaxPeopleButton,
} satisfies Meta<typeof MaxPeopleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
