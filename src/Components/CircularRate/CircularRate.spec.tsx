import { CircularRate } from '.';
import Render from '@/__test__/Render';
import '@testing-library/jest-dom';

describe('CircularRate', () => {
  it('자릿수는 항상 내림되어야 한다', () => {
    const { container } = Render(<CircularRate percentage={(4 / 7) * 100} label="전문성" />);

    expect(container).toHaveTextContent('57');
  });
});
