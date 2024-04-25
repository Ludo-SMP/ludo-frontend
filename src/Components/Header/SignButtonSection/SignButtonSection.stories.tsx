import type { Meta, StoryObj } from '@storybook/react';
import SignButtonSection from '.';

const meta = {
  component: SignButtonSection,
} satisfies Meta<typeof SignButtonSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
