import { CircularRate } from '.';
import Render from '@/__test__/Render';
import '@testing-library/jest-dom';

describe('CircularRate', () => {
  it('Button 컴포넌트 텍스트 확인', () => {
    const { container } = Render(<CircularRate percentage={(4 / 7) * 100} label="전문성" />);

    expect(container).toHaveTextContent('57');
  });
});
