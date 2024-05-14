import { useRef } from 'react';
import styled from 'styled-components';
import { ToggleSwitch } from '../ToggleSwitch';
import { textEllipsis } from '@/Styles/theme';

export interface ToggleSwitchListProps {
  label: string;
  description?: string;
}

const ToggleSwitchList = ({ label, description }: ToggleSwitchListProps) => {
  /** 토글 스위치 목록이 리렌더링하지 않도록 ref로 값을 관리합니다. */
  const toggleSwitchRef = useRef<boolean>(false);

  return (
    <Container>
      <ContainerText>
        <Label>{label}</Label>
        <Description>{description}</Description>
      </ContainerText>
      <ToggleSwitch ref={toggleSwitchRef} />
    </Container>
  );
};

export { ToggleSwitchList };

/* TODO: 아코디언 Container, Title, Description 재사용 검토 */
const Container = styled.div`
  display: flex;
  max-width: 912px;
  padding: 24px 0px;
  gap: 24px;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 52px);
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
