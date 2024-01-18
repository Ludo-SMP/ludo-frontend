import styled from 'styled-components';

export type FilterProps = {
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
  onClick: () => void;
  children?: React.ReactNode;
};

export const FilterButton = ({ children, onClick }: FilterProps) => {
  return (
    <>
      <FilterContainer onClick={onClick}>
        <FilterText>{children}</FilterText>
      </FilterContainer>
    </>
  );
};

const FilterContainer = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray4};
  width: 156px;
  height: 46px;
`;

const FilterText = styled.text`
  text-align: center;
  font-size: ${({ theme }) => theme.font.xsmall};
  color: ${({ theme }) => theme.color.white1};
`;
