import styled from 'styled-components';

interface DropdownItemProps {
  onClick: () => void;
  children: React.ReactNode;
}

const DropdownItem = ({ onClick, children }: DropdownItemProps) => {
  return <DropDownItemWrapper onClick={onClick}>{children}</DropDownItemWrapper>;
};

const DropDownItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 184px;
  height: 40px;
  padding: 12px 8px 12px 16px;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black3};
  font-family: 'Pretendard500';
  font-size: ${({ theme }) => theme.font.small};
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    color: ${({ theme }) => theme.color.black4};
    background: linear-gradient(
        0deg,
        ${({ theme }) => theme.color.black1} 0%,
        ${({ theme }) => theme.color.black1} 100%
      ),
      ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;

export default DropdownItem;
