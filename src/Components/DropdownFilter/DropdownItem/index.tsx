import styled from 'styled-components';

export type DropdownItemProps = {
  catergoryItem: string;
  handleClick: (categoryItem: string) => void;
};

const DropdownItem = ({ catergoryItem, handleClick }: DropdownItemProps) => {
  return (
    <DropdownItemWrapper
      onClick={() => {
        handleClick(catergoryItem);
      }}
    >
      {catergoryItem}
    </DropdownItemWrapper>
  );
};

const DropdownItemWrapper = styled.li`
  padding: 12px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.purple4};
  }
  text-align: center;
`;
export default DropdownItem;
