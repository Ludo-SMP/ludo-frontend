import { MouseEventHandler } from 'react';
import styled from 'styled-components';

export type ChipButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  checked: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const ChipButton = ({ onClick, checked, children, disabled, className }: ChipButtonProps) => (
  <ChipButtonContainer {...{ checked, onClick, disabled, className }}>
    <>{children}</>
  </ChipButtonContainer>
);

const ChipButtonContainer = styled.button<{ checked: boolean }>`
  display: flex;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  border: 1px solid ${({ checked, theme }) => (checked ? theme.color.orange3 : theme.color.black1)};
  background: ${({ theme }) => theme.color.white};
  color: ${({ checked, theme }) => (checked ? theme.color.orange3 : theme.color.black3)};
  text-align: center;
  font-family: Pretendard;
  font-size: ${({ theme }) => theme.font.small};
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
`;

export default ChipButton;
