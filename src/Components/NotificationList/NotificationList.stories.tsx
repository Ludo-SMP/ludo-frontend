import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from '.';
import { Accordion } from '../Accordion';

const meta = {
  component: NotificationList,
  args: {
    children: (
      <Accordion title="스터디 탈퇴 승인 결과가 나왔습니다.">
        스터디 ‘스터디 이름’에서 팀장에게 요청한 스터디 탈퇴가 승인 되었습니다.
      </Accordion>
    ),
  },
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 아코디언 목록 제목 있는 경우 */
export const Primary: Story = {
  args: {
    title: '루도가 알려요',
  },
};
