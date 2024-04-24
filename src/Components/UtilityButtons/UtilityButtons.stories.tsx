import type { Meta, StoryObj } from '@storybook/react';
import UtilityButtons from '.';
import Button from '@/Components/Common/Button';
import { Create, Up } from '@/Assets';

const meta = {
  component: UtilityButtons,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof UtilityButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Button>
          <Up />
          <span>위로가기</span>
        </Button>
        <Button>
          <Create />
          <span>스터디 생성</span>
        </Button>
      </>
    ),
  },
};
