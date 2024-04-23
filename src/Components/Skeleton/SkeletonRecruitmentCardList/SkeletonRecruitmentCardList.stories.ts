import type { Meta, StoryObj } from '@storybook/react';
import SkeletonRecruitmentCardList from '.';

const meta = {
  component: SkeletonRecruitmentCardList,
} satisfies Meta<typeof SkeletonRecruitmentCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
