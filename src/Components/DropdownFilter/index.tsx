import styled from 'styled-components';
import { useState, Dispatch, SetStateAction, useRef } from 'react';
import { DownBold } from '@/Assets/icons/DownBold';
import { FilterOptionsType, MainCategoryNameType } from '@/Types/study';
import { defaultFilterOptions } from '@/Shared/category';
import DropdownItem from './DropdownItem';
import { UpBold } from '@/Assets/icons/UpBold';
import { useOutSideClick } from '@/Hooks/useOutsideClick';

export type DropdownFilterProps = {
  categoryName: MainCategoryNameType;
  categoryItems: string[];
  categoryProperty: string;
  checked?: boolean;
  setFilterOptions: Dispatch<SetStateAction<FilterOptionsType>>;
};

const DropdownFilter = ({ categoryItems, categoryName, categoryProperty, setFilterOptions }: DropdownFilterProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(categoryName);
  const dropDownItemsRef = useRef(null);

  const toggleDropdonwItems = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedItem = (categoryItem) => {
    setSelectedItem(categoryItem);
    const filterOption = categoryItem === '전체' ? [...defaultFilterOptions[categoryProperty]] : [categoryItem];
    setFilterOptions((prev) => {
      return { ...prev, [categoryProperty]: [...filterOption] };
    });
    setIsOpen(!isOpen);
  };

  useOutSideClick(dropDownItemsRef, toggleDropdonwItems);

  return (
    <DropdownFilterWrapper>
      <DropdownSelectWrapper onClick={toggleDropdonwItems}>
        <span className="filter__text">{selectedItem}</span>
        {isOpen ? <UpBold width={18} height={18} color="black" /> : <DownBold />}
      </DropdownSelectWrapper>
      {isOpen && (
        <DropdownItemsWrapper ref={dropDownItemsRef}>
          {categoryItems.map((categoryItem) => (
            <DropdownItem
              handleClick={() => handleSelectedItem(categoryItem)}
              catergoryItem={categoryItem}
              key={categoryItem}
            />
          ))}
        </DropdownItemsWrapper>
      )}
    </DropdownFilterWrapper>
  );
};

const DropdownFilterWrapper = styled.div<{ checked?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .filter__text {
    text-align: center;
    font-size: ${(props) => props.theme.font.small};
    font-weight: 500;
    line-height: 30px;
  }
`;

const DropdownSelectWrapper = styled.button<{ checked?: boolean }>`
  display: flex;
  padding: 4px 8px 4px 12px;
  width: 145px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  color: ${(props) => (props.checked ? props.theme.color.orange2 : props.theme.color.black3)};
  border: 1px solid ${(props) => (props.checked ? props.theme.color.orange2 : props.theme.color.black2)};
  background: ${(props) => (props.checked ? props.theme.color.white : props.theme.color.white)};

  &:hover {
    background: ${(props) => props.theme.color.orange2};
    border: 1px solid ${(props) => props.theme.color.orange1};
    color: ${(props) => props.theme.color.white};
  }
`;

const DropdownItemsWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  border-radius: 18px;
  border: 1px solid ${(props) => props.theme.color.black1};
  top: 50px;
  font-weight: 700;
  flex-direction: column;
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
