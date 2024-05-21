import type { Meta, StoryObj } from '@storybook/react';
import { ProfileSection } from './ProfileSection';

const meta = {
  component: ProfileSection,
} satisfies Meta<typeof ProfileSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
