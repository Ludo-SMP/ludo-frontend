import { SelectArrow } from '@/Assets/SelectArrow';
import { ComponentProps, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

// RHF와 호환되는 범용 SelectBox 컴포넌트
export const SelectBox = forwardRef<
  HTMLSelectElement,
  ComponentProps<'select'> & {
    // 선택지로 등장할 값을 키: 표시값 형태의 객체로 전달
    values?: Record<string, string>;
    defaultValue?: string;
    icon?: ReactNode;
  }
>(({ onChange, onBlur, name, values, defaultValue, icon }, ref) => {
  return (
    <Box>
      <Select ref={ref} onChange={onChange} onBlur={onBlur} name={name} required>
        <Option value="" disabled selected hidden>
          {defaultValue}
        </Option>
        {Object.entries(values ?? {}).map(([k, v]) => (
          <Option value={k}>{v}</Option>
        ))}
      </Select>
      <IconWrap>{icon ?? <SelectArrow />}</IconWrap>
    </Box>
  );
});

const Select = styled.select`
  height: 44px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background-color: ${(props) => props.theme.color.white};
  flex: 1;

  &:invalid {
    color: #00000073;
  }
`;

const Option = styled.option`
  font-family: Pretendard600;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.color.gray3};
`;

const Box = styled.div`
  position: relative;
  display: flex;
`;

const IconWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
`;
