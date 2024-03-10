import styled from 'styled-components';
import RecruitmentCardList from '../../Components/RecruitmentCardList';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import CardListInfo from '@/Components/CardListInfo';
import DropdownFilters from '@/Components/DropdownFilters';
import { defaultFilterOptions } from '@/Shared/category';
import { mainCategories } from '@/Shared/category';
import DropdownFilter from '@/Components/DropdownFilter';
import { useState } from 'react';
import { media } from '@/Styles/theme';
import { Create, Filter, Up } from '@/Assets';
import Button from '@/Components/Common/Button';
import UtiltiyButtons from '@/Components/UtilityButtons';
import { useNavigate } from 'react-router-dom';

const RecruitmentsPage = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptionsType>(defaultFilterOptions);
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RecruitmentsPageWrapper>
      <Banner {...bannerDummy} />
      <RecruitmentsSectionWrapper>
        <SelectFilterSectionWrapper>
          <div className="section__title">나에게 필요한 스터디를 찾아보아요</div>
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
        </SelectFilterSectionWrapper>
        {/* <RecruitmentCardList filterOptions={filterOptions} /> */}
      </RecruitmentsSectionWrapper>
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
          <Create />
          <span>스터디 생성</span>
        </Button>
      </UtiltiyButtons>
    </RecruitmentsPageWrapper>
  );
};

const RecruitmentsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  gap: 40px;
`;

const RecruitmentsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  .section__title {
    color: ${({ theme }) => theme.color.black5};
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.xxlarge};
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
  }
`;

const SelectFilterSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;

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

export default RecruitmentsPage;
