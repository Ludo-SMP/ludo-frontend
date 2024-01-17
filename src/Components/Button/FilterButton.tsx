import styled from 'styled-components';

export const FilterButton = () => {
  return <FilterContainer />;
};

const FilterContainer = styled.button`
  border-radius: 24px;
  background-color: ${({ theme }) => theme.color.white1};
  text-align: center;
  width: 156px;
  height: 46px;
`;
