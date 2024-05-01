import type { Meta, StoryObj } from '@storybook/react';
import { StackModal } from '.';

const meta = {
  component: StackModal,
  args: {
    handleModal: () => {},
    initialSelectedStacks: [
      {
        id: 93,
        name: 'ReactJS',
        imageUrl: '/static/stack/images/reactjs.png',
      },
      {
        id: 96,
        name: 'React Query',
        imageUrl: '/static/stack/images/react_query.png',
      },
    ],
    handleSelectedStacks: () => {},
  },
} satisfies Meta<typeof StackModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
