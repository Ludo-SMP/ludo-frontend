import type { Meta, StoryObj } from '@storybook/react';
import { CustomArrowBtn } from '.';

const meta = {
  component: CustomArrowBtn,
  args: {
    type: 'PREV',
  },
} satisfies Meta<typeof CustomArrowBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

/* Custom Prev Button */
export const PrevButton: Story = {};

/* Custom Next Button */
export const NextButton: Story = {
  args: { type: 'NEXT' },
};
