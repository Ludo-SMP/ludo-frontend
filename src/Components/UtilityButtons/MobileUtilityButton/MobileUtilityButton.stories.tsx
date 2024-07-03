import type { Meta, StoryObj } from '@storybook/react';
import { MobileUtilityBtn } from '.';
import { CreateStudy } from '@/Assets';
import { Logo } from '@/Assets';
import { SearchRecruitment } from '@/Assets';

const meta = {
  component: MobileUtilityBtn,
} satisfies Meta<typeof MobileUtilityBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

/** 스터디 생성 버튼 */
export const CreateMyStudy: Story = {
  args: {
    destUrl: '#',
    icon: <CreateStudy />,
    content: '스터디 생성',
  },
} satisfies Story;

/** 모집공고 페이지로 이동하기 버튼 */
export const MoveToRecruitmentPage: Story = {
  args: {
    destUrl: '#',
    icon: <SearchRecruitment />,
    content: '스터디 모집 공고 보러가기',
  },
} satisfies Story;

/** svg 컴포넌트가 아닌 img가 들어온 경우 */
export const NotSvgIcon: Story = {
  args: {
    destUrl: '#',
    icon: Logo,
    content: 'Home',
  },
} satisfies Story;
