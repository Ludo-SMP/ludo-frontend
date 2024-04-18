import type { Meta, StoryObj } from '@storybook/react';
import MyStudyCard from '.';

const meta = {
  component: MyStudyCard,
  args: {
    id: 1,
    title: '스터디',
    status: 'PROGRESS',
    position: {
      id: 1,
      name: '백엔드',
    },
  },
} satisfies Meta<typeof MyStudyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
