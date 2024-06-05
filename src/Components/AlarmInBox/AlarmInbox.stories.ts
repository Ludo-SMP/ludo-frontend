import type { Meta, StoryObj } from '@storybook/react';
import { AlarmInbox } from '.';

const meta = {
  component: AlarmInbox,
} satisfies Meta<typeof AlarmInbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { alarmPreviews: [] },
} satisfies Story;

export const AlarmInboxWithSeveralAlarms: Story = {
  args: {
    alarmPreviews: [
      {
        alarmType: 'STUDY',
        title: '스터디',
        description: '산토끼토끼야어디를가느냐깡총깡총뛰면서어디를가느냐산고개고개를나혼자넘어서토실토실알밤을주워',
        createdAt: '2024-05-14T02:16:03.598Z',
      },
      {
        alarmType: 'LUDO',
        title: '루도루도루도',
        description: '산토끼토끼야어디를가느냐깡총깡총뛰면서어디를가느냐산고개고개를나혼자넘어서토실토실알밤을주워',
        createdAt: '2024-05-14T02:16:03.598Z',
      },
      {
        alarmType: 'LUDO',
        title: '루도루도루도~~~',
        description: '루도루도루돌두로',
        createdAt: '2024-05-12T02:16:03.598Z',
      },
    ],
  },
};
