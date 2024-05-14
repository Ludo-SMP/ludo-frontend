import React, { useState } from 'react';
import styled from 'styled-components';

export interface ToggleSwitchProps {
  disabled?: boolean;
}

const ToggleSwitch = React.forwardRef<boolean, ToggleSwitchProps>(({ disabled = false }, ref) => {
  const [clicked, setClicked] = useState(false);

  const handleChange = () => {
    setClicked((prev) => !prev);
    if (ref && typeof ref !== 'function') {
      ref.current = !clicked;
    }
  };

  return (
    <Container>
      <Switch type="checkbox" role="switch" $isChecked={clicked} onChange={handleChange} disabled={disabled} />
    </Container>
  );
});

export { ToggleSwitch };

const Container = styled.div``;

const Switch = styled.input<{ $isChecked: boolean }>`
  /** 체크되지 않은 상태 */
  appearance: none;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.black3};
  border-radius: 100px;
  width: 52px;
  height: 32px;
  cursor: pointer;

  /** 좌우로 움직이는 동그란 부분 (thumb) */
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 8px);
    left: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.black3};
    transition: left 0.3s linear;
  }

  /** 체크된 상태 */
  &:checked {
    background-color: ${({ theme }) => theme.color.purple1};
    transition: background-color: 0.3s linear;
    border: none;

    /** 체크됐을 때 좌우로 움직이는 thumb 스타일 */
    &::before {
        position: absolute;
        top: calc(50% - 12px);
        left: calc(100% - 24px - 6px);
        width: 24px;
        height: 24px;
        background-color: ${({ theme }) => theme.color.white};
    }
  }

  /** thumb 호버됐을 때 */
  &:enabled:hover {
    &::before {
        // x-offset, y-offset, blur-radius, spread-radius, color
        box-shadow: 0 0 0 8px ${({ $isChecked }) => ($isChecked ? 'rgba(103, 80, 164, 0.08)' : 'rgba(28, 27, 31, 0.08)')};
    }
  }

  /** 비활성화된 상태 */
  &:disabled {
    border-color: lightgray;
    opacity: 0.7;
    cursor: not-allowed;

    &::before {
      background-color: lightgray;
    }
  }

  /** 포커스 상태 스타일, 키보드 포커스가 스위치로 오면 포커스 링 나타남 */
  &:focus-visible {
    outline-offset: 2px;
    outline: 2px solid ${({ theme }) => theme.color.purple1};
  }
`;
