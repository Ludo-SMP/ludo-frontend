import type { Meta, StoryObj } from '@storybook/react';
import { BigCategoryButton } from './BigCategoryButton';

const meta = {
  component: BigCategoryButton,
} satisfies Meta<typeof BigCategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
