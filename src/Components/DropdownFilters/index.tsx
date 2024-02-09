import styled from 'styled-components';

interface DropdownFiltersProps {
  children: React.ReactNode;
}
const DropdownFilters = ({ children }: DropdownFiltersProps) => {
  return <DropdwonFiltersWrapper>{children}</DropdwonFiltersWrapper>;
};

const DropdwonFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default DropdownFilters;
