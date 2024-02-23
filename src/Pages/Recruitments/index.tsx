import styled from 'styled-components';
import StudyCardList from '../../Components/StudyCardList';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import CardListInfo from '@/Components/CardListInfo';
import DropdownFilters from '@/Components/DropdownFilters';
import { defaultFilterOptions } from '@/Shared/category';
import { mainCategories } from '@/Shared/category';
import DropdownFilter from '@/Components/DropdownFilter';
import { FilterOptionsType } from '@/Types/study';
import { useState } from 'react';
import { media } from '@/Styles/theme';
import { CreateStudy, Filter, Up } from '@/Assets';
import Button from '@/Components/Common/Button';
import UtiltiyButtons from '@/Components/UtilityButtons';
import { useNavigate } from 'react-router-dom';

const Recruitments = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptionsType>(defaultFilterOptions);
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ContentsWrapper>
      <Banner {...bannerDummy} />
      <StudyListWrapper>
        <StudyListSearchSectionWrapper>
          <CardListInfo />
          <DropdownFilters className="filters">
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
          <Button className="filterIcon">
            <Filter />
          </Button>
        </StudyListSearchSectionWrapper>
        <StudyCardList filterOptions={filterOptions} />
      </StudyListWrapper>
      <UtiltiyButtons>
        <Button onClick={handleScroll} className="scroll__btn">
          <Up />
          <span>위로가기</span>
        </Button>
        <Button
          onClick={() => {
            navigate('/studies/create');
          }}
          className="create__btn"
        >
          <CreateStudy />
          <span>스터디 생성</span>
        </Button>
      </UtiltiyButtons>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  gap: 40px;
`;

const StudyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const StudyListSearchSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  .filterIcon {
    display: none;
  }

  ${media.custom(1224)} {
    .filters {
      display: none;
    }
    .filterIcon {
      display: flex;
    }
  }
`;

export default Recruitments;