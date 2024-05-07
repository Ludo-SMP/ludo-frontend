import { screen } from '@testing-library/react';
import Button from './index';
import Render from '@/__test__/Render';

describe('Button 컴포넌트 테스트', () => {
  it('Button 컴포넌트 텍스트 확인', () => {
    Render(<Button scheme="primary">버튼</Button>);
    expect(screen.getByText('버튼'));
  });

  it('Button 컴포넌트 텍스트 Color Style 테스트', () => {
    Render(<Button scheme="primary">버튼</Button>);
    expect(screen.getByRole('button')).toHaveStyleRule('color', '#ffffff');
  });
});
