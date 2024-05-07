import { screen } from '@testing-library/react';

import CustomSelect from './CustomSelect';
import { POSITION } from '@/Shared/study';
import Render from '@/__test__/Render';

describe('CustomSelect 컴포넌트 테스트', () => {
  it('CustomSelect defaultValue 확인', () => {
    Render(<CustomSelect defaultValue={POSITION[0]} />);
    expect(screen.getByText(POSITION[0].label));
  });
});
