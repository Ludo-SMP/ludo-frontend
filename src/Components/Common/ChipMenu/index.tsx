import styled from 'styled-components';

export type ChipMenuProps = {
  onClick: () => void;
  checked: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const ChipMenu = ({ onClick, checked, children, disabled, className }: ChipMenuProps) => (
  <ChipMenuContainer {...{ checked, onClick, disabled, className }}>
    <>{children}</>
  </ChipMenuContainer>
);

const ChipMenuContainer = styled.div<{ checked: boolean }>`
  display: flex;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  border: 1px solid ${({ checked, theme }) => (checked ? theme.color.orange3 : theme.color.black1)};
  background: ${({ theme }) => theme.color.white};
  color: ${({ checked, theme }) => (checked ? theme.color.orange3 : theme.color.black3)};
  text-align: center;
  font-family: 'Pretendard600';
  font-size: ${({ theme }) => theme.font.small};
  font-style: normal;
  font-weight: 600;
  line-height: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export default ChipMenu;
