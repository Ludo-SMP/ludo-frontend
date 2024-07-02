import { screen } from '@testing-library/react';

import CustomSelect from './CustomSelect';
import Render from '@/__test__/Render';

describe('CustomSelect 컴포넌트 테스트', () => {
  it('CustomSelect defaultValue 확인', () => {
    Render(<CustomSelect defaultValue={{ label: '백엔드', value: 1 }} />);
    expect(screen.getByText('백엔드'));
  });
});
