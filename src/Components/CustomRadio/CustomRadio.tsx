import styled from 'styled-components';
import { SetStateAction } from 'react';
export interface CustomRadioProps {
  /* 값 */
  value: number;

  /** 체크 여부 */
  checked?: boolean;

  /** 버튼 사이즈 */
  size?: number;

  /** 선택된 값을 변경하는 handler */
  setSelectedValue: React.Dispatch<SetStateAction<number | null>>;
}

const RADIO_COLOR = { 1: '#F7A477', 2: '#E1A193', 3: '#CB9FAE', 4: '#B59CCA', 5: '#7170BF' };

export const CustomRadio = ({ value, checked, setSelectedValue, size = 32 }: CustomRadioProps) => {
  return (
    <Label>
      <span>{value}</span>
      <Radio value={value} checked={checked} size={size}>
        <div className="inner" />
        <input type="radio" value={value} checked={checked} onChange={() => setSelectedValue(value)} />
      </Radio>
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & > span {
    color: ${({ theme }) => theme.color.black2};
    text-align: center;
    font-family: 'Pretendard400';
    font-size: ${({ theme }) => theme.font.small};
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

const Radio = styled.div<{ value: number; checked: boolean; size: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.color.black1};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};

  &:hover {
    cursor: pointer;
  }

  .inner {
    width: ${({ size }) => `${size * 0.8}px`};
    height: ${({ size }) => `${size * 0.8}px`};
    position: absolute;
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    background-color: ${({ value, checked, theme }) =>
      checked ? (value in RADIO_COLOR ? RADIO_COLOR[value] : theme.color.gray5) : 'none'};
  }

  input {
    visibility: hidden;
  }
`;
