import type { Meta, StoryObj } from '@storybook/react';
import HamburgerSection from '.';

const meta = {
  component: HamburgerSection,
} satisfies Meta<typeof HamburgerSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
