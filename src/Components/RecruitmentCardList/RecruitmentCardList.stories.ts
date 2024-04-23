import type { Meta, StoryObj } from '@storybook/react';
import RecruitmentCardList from '.';

const meta = {
  component: RecruitmentCardList,
} satisfies Meta<typeof RecruitmentCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
