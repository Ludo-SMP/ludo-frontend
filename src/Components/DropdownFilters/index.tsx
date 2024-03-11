import styled from 'styled-components';

interface DropdownFiltersProps {
  children: React.ReactNode;
  className: string;
}
const DropdownFilters = ({ children, className }: DropdownFiltersProps) => {
  return <DropdwonFiltersWrapper className={className}>{children}</DropdwonFiltersWrapper>;
};

const DropdwonFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;
  gap: 12px;
`;

export default DropdownFilters;
