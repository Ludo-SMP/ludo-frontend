import React from 'react';
import styled from 'styled-components';
import { UseMutateFunction } from '@tanstack/react-query';
import { NotificationsSettingConfigType } from '@/Types/notifications';
import { useClickedNotificationSettingConfig } from '@/store/notificationSettingClicked';

export interface ToggleSwitchProps {
  /** 알림 설정 타입 */
  type: NotificationsSettingConfigType;

  toggleMutate: UseMutateFunction<unknown, Error, { on: boolean }>;

  /** 비활성 여부 */
  disabled?: boolean;

  /* 초기 checked 상태 */
  checked?: boolean;
}

/** 토글 스위치 */
const ToggleSwitch = React.forwardRef<boolean, ToggleSwitchProps>(
  ({ disabled = false, toggleMutate, type, checked }, ref) => {
    const { setAllOffSettingConfigs, setSettingConfig, settingConfigs } = useClickedNotificationSettingConfig();
    // console.log(settingConfigs[type], type);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (ref && typeof ref !== 'function') {
        ref.current = null;
      }
      if (type === 'ALL_CONFIG' || type === 'RECRUITMENT_CONFIG') {
        setAllOffSettingConfigs();
        toggleMutate({ on: !checked });
        return;
      }
      setSettingConfig({ configType: type, on: !settingConfigs[type] });
      toggleMutate({ on: e.target.checked });
    };

    return (
      <Container>
        <Switch
          type="checkbox"
          role="switch"
          checked={checked ? !settingConfigs[type] : settingConfigs[type]}
          onChange={handleChange}
          disabled={disabled}
        />
      </Container>
    );
  },
);

export { ToggleSwitch };

const Container = styled.div``;

const Switch = styled.input`
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
    transition: left 0.15s ease;
  }

  /** 체크된 상태 */
  &:checked {
    background-color: ${({ theme }) => theme.color.purple1};
    transition: 0.15s ease;
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
      box-shadow: 0 0 0 8px ${({ checked }) => (checked ? 'rgba(103, 80, 164, 0.08)' : 'rgba(28, 27, 31, 0.08)')};
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
