import type { Meta, StoryObj } from '@storybook/react';
import { AlarmPreview } from '.';

const meta = {
  component: AlarmPreview,
} satisfies Meta<typeof AlarmPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    alarmType: 'LUDO',
    title: '루도가 알려요',
    description: '산토끼토끼야어디를가느냐깡총깡총뛰면서어디를가느냐산고개고개를나혼자넘어서토실토실알밤을주워',
    createdAt: '2024-05-01T03:16:03.598Z',
  },
} satisfies Story;

export const StudyAlarmPreview: Story = {
  args: {
    alarmType: 'STUDY',
    title: '스터디',
    description: '산토끼토끼야어디를가느냐깡총깡총뛰면서어디를가느냐산고개고개를나혼자넘어서토실토실알밤을주워',
    createdAt: '2024-05-14T03:16:03.598Z',
  },
};
