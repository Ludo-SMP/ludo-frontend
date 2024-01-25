import styled from 'styled-components';

export type FilterProps = {
  onClick?: () => void;
  checked?: boolean;
  children?: React.ReactNode;
};

const Filter = ({ children, onClick, checked }: FilterProps) => {
  return (
    <FilterWrapper onClick={onClick} checked={checked}>
      {children}
    </FilterWrapper>
  );
};

const FilterWrapper = styled.button<{ checked?: boolean }>`
  display: flex;
  padding: 4px 8px 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  color: ${(props) => (props.checked ? props.theme.color.white : props.theme.color.black2)};
  border: 1px solid ${(props) => (props.checked ? props.theme.color.gray5 : props.theme.color.black2)};
  background: ${(props) => (props.checked ? props.theme.color.gray5 : props.theme.color.white)};
`;

export default Filter;
