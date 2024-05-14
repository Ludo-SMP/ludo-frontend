import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';

const meta = {
  component: Tab,
  args: {
    title: '프로필 설정',
    to: '/profile',
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

/** 현재 페이지에 보여지는 탭일 때 */
export const Active: Story = {
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
