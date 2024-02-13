import styled from 'styled-components';
import StudyCardList from '../../Components/StudyCardList';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import Gnb from '../../Components/Gnb';
import CreateButton from '../../Components/Button/CreateButton';
import BlankCircle from '../../Components/Common/BlankCirecle';
import MoveToTopButton from '../../Components/Button/MoveToTopButton';
import { UpBold } from '../../Assets/icons/UpBold';
import CardListInfo from '@/Components/CardListInfo';
import DropdownFilters from '@/Components/DropdownFilters';
import { defaultFilterOptions } from '@/Shared/category';
import { mainCategories } from '@/Shared/category';
import DropdownFilter from '@/Components/DropdownFilter';
import { FilterOptionsType } from '@/Types/study';

import { useState } from 'react';

const Recruitments = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptionsType>(defaultFilterOptions);

  return (
    <ContentsWrapper>
      <Gnb />
      <ButtonsWrapper>
        <MoveToTopButton>
          <UpBold />
        </MoveToTopButton>
        <CreateButton>
          <BlankCircle />
        </CreateButton>
      </ButtonsWrapper>
      <Banner {...bannerDummy} />
      <StudyListWrapper>
        <StudyListSearchSectionWrapper>
          <CardListInfo />
          <DropdownFilters>
            {mainCategories.map((mainCategory) => {
              return (
                <DropdownFilter
                  categoryName={mainCategory.categoryName}
                  categoryProperty={mainCategory.categoryProperty}
                  categoryItems={mainCategory.categoryItems}
                  setFilterOptions={setFilterOptions}
                  key={mainCategory.categoryName}
                />
              );
            })}
          </DropdownFilters>
        </StudyListSearchSectionWrapper>
        <StudyCardList filterOptions={filterOptions} />
      </StudyListWrapper>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px 348px 80px 348px;
`;

const ButtonsWrapper = styled.span`
  position: fixed;
  right: 188px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  background-color: none;
  padding: 40px;
  gap: 20px;
`;
const StudyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const StudyListSearchSectionWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export default Recruitments;
