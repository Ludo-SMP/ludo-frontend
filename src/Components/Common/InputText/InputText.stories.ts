import type { Meta, StoryObj } from '@storybook/react';
import InputText from './iindex';

const meta = {
  component: InputText,
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PlaceHolder: Story = {
  args: {
    placeholder: '여기에 입력하세요',
  },
};

export const Email: Story = {
  args: {
    inputType: 'email',
    placeholder: '이메일 주소를 입력하세요',
  },
};

export const Password: Story = {
  args: {
    inputType: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
};

export const Member: Story = {
  args: {
    inputType: 'member',
    placeholder: '멤버를 입력하세요',
  },
};
