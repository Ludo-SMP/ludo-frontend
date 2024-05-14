import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';

const meta = {
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

/** 프로필 설정 탭이 활성화된 상태 */
export const ActiveProfile: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: [
        {
          path: '/profile',
          useStoryElement: true,
        },
      ],
    }),
  },
};
