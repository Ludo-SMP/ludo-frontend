import type { Meta, StoryObj } from '@storybook/react';
import { LeaveModal } from '.';
import { fn } from '@storybook/test';

const meta = {
  component: LeaveModal,
  args: {
    handleApprove: fn,
    handleCancel: fn,
  },
  decorators: [
    (Story: any) => (
      <div
        style={{
          height: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LeaveModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
