import type { Meta, StoryObj } from '@storybook/react';
import SkeletonRecruitmentCard from '.';

const meta = {
  component: SkeletonRecruitmentCard,
} satisfies Meta<typeof SkeletonRecruitmentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
