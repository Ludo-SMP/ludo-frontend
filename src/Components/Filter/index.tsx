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
  color: ${(props) => (props.checked ? props.theme.color.orange2 : props.theme.color.black3)};
  border: 1px solid ${(props) => (props.checked ? props.theme.color.orange2 : props.theme.color.black2)};
  background: ${(props) => (props.checked ? props.theme.color.white : props.theme.color.white)};

  &:hover {
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.orange2};
    border: 1px solid ${(props) => props.theme.color.orange1};
    & > svg {
      color: yellow;
    }
  }
`;

export default Filter;
