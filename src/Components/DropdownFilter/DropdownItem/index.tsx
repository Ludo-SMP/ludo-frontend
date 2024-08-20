import { FilterOption } from '@/Types/study';
import styled from 'styled-components';

export interface DropdownItemProps {
  item: { id: number; name: string };
  handleClick: () => void;
  filterOption: FilterOption;
}

const DropdownItem = ({ item, filterOption, handleClick }: DropdownItemProps) => {
  return (
    <DropdownItemWrapper onClick={handleClick}>
      {filterOption === 'PROGRESS_METHOD' && Number(item.id) !== 0
        ? Number(item.id) === 1
          ? '온라인'
          : '오프라인'
        : item.name}
    </DropdownItemWrapper>
  );
};

const DropdownItemWrapper = styled.li`
  padding: 12px;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.purple4};
  }
  text-align: center;
`;
export default DropdownItem;
