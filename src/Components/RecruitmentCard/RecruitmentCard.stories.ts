import type { Meta, StoryObj } from '@storybook/react';
import RecruitmentCard from '.';

const meta = {
  component: RecruitmentCard,
  args: {
    id: 1,
    title: '강남역 코테 준비 스터디',
    stacks: [
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
    positions: [
      {
        id: 1,
        name: '프론트엔드',
      },
    ],
    category: {
      id: 1,
      name: '코딩 테스트',
    },
    ownerNickname: '방장님',
    way: 'OFFLINE',
    startDateTime: '2021-02-01T00:00:00',
    endDateTime: '2021-12-31T00:00:00',
    recruitmentEndDateTime: '2021-01-31T00:00:00',
    createdDateTime: '2021-01-01T00:00:00',
    hits: 123,
  },
} satisfies Meta<typeof RecruitmentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
