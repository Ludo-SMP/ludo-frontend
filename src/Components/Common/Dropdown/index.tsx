import styled from 'styled-components';

interface DropdownProps {
  onClick: () => void;
  checked: boolean;
  children: React.ReactNode;
}

const Dropdown = ({ onClick, children }: DropdownProps) => {
  return <DropDownWrapper>{children}</DropDownWrapper>;
};

const DropDownWrapper = styled.div`
  width: 184px;
  height: 40px;
  display: inline-flex;
  padding: 8px 8px 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black3};
  font-family: Pretendard;
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
  }
`;

export default Dropdown;
