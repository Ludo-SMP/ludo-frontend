import { Right } from '@/Assets';
import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ApplicationButtonProps {
  /** 버튼 텍스트 */
  children?: ReactNode;

  /** 버튼 클릭 시 실행할 함수 */
  onClick?: () => void;
}

/** 응용 버튼 */
export const ApplicationButton = ({ children, onClick }: ApplicationButtonProps) => {
  return (
    <ButtonBox onClick={onClick}>
      <ButtonText>{children}</ButtonText>
      <Right />
    </ButtonBox>
  );
};

const ButtonBox = styled.button`
  display: inline-flex;
  padding: 12px 16px 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ButtonText = styled.span`
  color: ${({ theme }) => theme.color.black3};
  text-align: center;
  font-family: Pretendard600;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.color.black4};
  }
`;
