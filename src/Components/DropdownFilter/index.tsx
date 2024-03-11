import styled from 'styled-components';
import { useState, useRef } from 'react';
import { FilterOption } from '@/Types/study';
import DropdownItem from './DropdownItem';
import { useOutSideClick } from '@/Hooks/useOutsideClick';
import { Up, Down } from '@/Assets';
import { useFilterOptionsStore } from '@/Store/filter';
import { PROGRESS_METHOD } from '@/Shared/study';

export interface DropdownFilterProps {
  filterName: string;
  items: { id: number; name: string }[];
  property: FilterOption;
  checked?: boolean;
}

const DropdownFilter = ({ filterName, items, property }: DropdownFilterProps) => {
  const { setFilterOptions } = useFilterOptionsStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState(filterName);
  const dropDownItemsRef = useRef(null);
  const toggleDropdonwItems = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedItem = (item: { id: number; name: string }, property: FilterOption) => {
    setContent(property === 'PROGRESS_METHOD' && item.id !== 0 ? PROGRESS_METHOD[item.name] : item.name);
    setFilterOptions(
      property,
      item.id !== 0 ? [item.id] : items.filter((item) => item.id !== 0).map((item) => item.id),
    );
    setIsOpen(!isOpen);
  };

  useOutSideClick(dropDownItemsRef, toggleDropdonwItems);

  return (
    <DropdownFilterWrapper>
      <DropdownSelectWrapper onClick={toggleDropdonwItems} checked={content !== '전체' && content !== filterName}>
        <span className="filter__text">{content}</span>
        {isOpen ? <Up width={24} height={24} /> : <Down />}
      </DropdownSelectWrapper>
      {isOpen && (
        <DropdownItemsWrapper ref={dropDownItemsRef} property={property}>
          {items.map((item) => (
            <DropdownItem
              handleClick={() => handleSelectedItem(item, property)}
              item={item}
              key={item.id}
              property={property}
            />
          ))}
        </DropdownItemsWrapper>
      )}
    </DropdownFilterWrapper>
  );
};

const DropdownFilterWrapper = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .filter__text {
    text-align: center;
    font-size: ${(props) => props.theme.font.small};
    font-weight: 500;
    line-height: 30px;
    white-space: nowrap;
  }
`;

const DropdownSelectWrapper = styled.div<{ checked?: boolean }>`
  display: flex;
  padding: 2px 12px 0px 16px;
  width: 130px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  color: ${(props) => (props.checked ? props.theme.color.orange2 : props.theme.color.black3)};
  border: 1px solid ${(props) => (props.checked ? props.theme.color.orange2 : props.theme.color.black2)};
  background: ${(props) => (props.checked ? props.theme.color.white : props.theme.color.white)};

  &:hover {
    background: ${(props) => props.theme.color.orange2};
    border: 1px solid ${(props) => props.theme.color.orange1};
    color: ${(props) => props.theme.color.white};
    svg > path {
      fill: ${(props) => props.theme.color.white};
    }
  }
  svg > path {
    fill: ${({ theme, checked }) => (checked ? theme.color.orange2 : theme.color.black3)};
  }
`;

const DropdownItemsWrapper = styled.div<{ property: FilterOption }>`
  position: absolute;
  width: 100%;
  height: ${({ property }) => (property === 'STACK' ? '240px' : 'auto')};
  display: flex;
  border-radius: 18px;
  border: 1px solid ${(props) => props.theme.color.black1};
  top: 50px;
  font-weight: 700;
  flex-direction: column;
  overflow-y: scroll;
  background: ${(props) => props.theme.color.white};
  & > li:first-child {
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }

  & > li:last-child {
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
  }
`;

export default DropdownFilter;
