import { ComponentProps, forwardRef } from 'react';
import styled from 'styled-components';

// RHF와 호환되는 범용 SelectBox 컴포넌트
export const SelectBox = forwardRef<
  HTMLSelectElement,
  ComponentProps<'select'> & {
    label?: string;
    // 선택지로 등장할 값을 키: 표시값 형태의 객체로 전달
    values?: Record<string, string>;
  }
>(({ onChange, onBlur, name, label, values }, ref) => {
  return (
    <Label>
      {label}
      <Select ref={ref} onChange={onChange} onBlur={onBlur} name={name}>
        {Object.entries(values ?? {}).map(([k, v]) => (
          <Option value={k}>{v}</Option>
        ))}
      </Select>
    </Label>
  );
});

const Label = styled.label`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Select = styled.select`
  height: 44px;
  padding: 10px 16px 10px 16px;
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.gray3};
`;

const Option = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;
