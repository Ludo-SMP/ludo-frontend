import React from 'react';
import styled from 'styled-components';
import { ToggleSwitch } from '../ToggleSwitch';
import { textEllipsis } from '@/Styles/theme';
import { useOnOffNotifications } from '@/Hooks/notifications/useOnOffNotifications';
import { NotificationsType } from '@/Types/notifications';

export interface ToggleSwitchListProps {
  type: NotificationsType | 'ALL';

  /** 제목 */
  label: string;

  /** 설명 */
  description?: string;

  /* 초기 checked 상태 */
  defaultChecked?: boolean;
}

/** 토글 스위치 리스트 */
const ToggleSwitchList = React.forwardRef<boolean, ToggleSwitchListProps>(
  ({ label, description, defaultChecked = false, type }, ref) => {
    // if (type === 'ALL') console.log(defaultChecked);
    const { mutate } = useOnOffNotifications({ type });
    return (
      <Container>
        <ContainerText>
          <Label>{label}</Label>
          <Description>{description}</Description>
        </ContainerText>
        <ToggleSwitch ref={ref} defaultChecked={defaultChecked} toggleMutate={mutate} />
      </Container>
    );
  },
);

export { ToggleSwitchList };

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 912px;
  padding: 24px 0px;
  gap: 24px;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 52px);
  min-width: 300px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.black5};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* Page/Sub Title-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;

  ${textEllipsis}
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.color.black2};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  line-height: 24px;

  ${textEllipsis}
`;
