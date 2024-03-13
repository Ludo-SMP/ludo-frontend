import styled from 'styled-components';
import RecruitmentCardList from '../../Components/RecruitmentCardList';
import { LudoBanner } from '@/Assets';
import Banner from '../../Components/Banner';
import DropdownFilter from '@/Components/DropdownFilter';
import { media } from '@/Styles/theme';
import { Create, Up } from '@/Assets';
import Button from '@/Components/Common/Button';
import UtiltiyButtons from '@/Components/UtilityButtons';
import { useNavigate } from 'react-router-dom';
import { useStack } from '@/Apis/stack';
import { ALL, CATEGORIES, POSITIONS, PROGRESS_METHODS, SORTS } from '@/Shared/study';
import { Stack } from '@/Types/study';

const RecruitmentsPage = () => {
  const { data, isLoading } = useStack();
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stacks = data?.stacks?.map((stack: Stack) => {
    return { id: stack.id, name: stack.name };
  });

  return (
    <RecruitmentsPageWrapper>
      <BannerSectionWrapper>
        <Banner src={LudoBanner} />
      </BannerSectionWrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <RecruitmentsSectionWrapper>
          <SelectFilterSectionWrapper>
            <div className="section__title">나에게 필요한 스터디를 찾아보아요</div>
            <DropdownFiltersWrapper>
              <DropdownFilter filterName={'카테고리'} items={[{ ...ALL }, ...CATEGORIES]} filterOption="CATEGORY" />
              {data?.stacks && (
                <DropdownFilter
                  filterName={'기술 스택'}
                  items={[
                    { ...ALL },
                    ...stacks.map((stack: Stack) => {
                      return { id: stack.id, name: stack.name };
                    }),
                  ]}
                  filterOption="STACK"
                />
              )}
              <DropdownFilter filterName={'포지션'} items={[{ ...ALL }, ...POSITIONS]} filterOption="POSITION" />
              <DropdownFilter
                filterName={'진행방식'}
                items={[{ ...ALL }, ...PROGRESS_METHODS]}
                filterOption="PROGRESS_METHOD"
              />
              <DropdownFilter filterName={'정렬 기준'} items={[...SORTS]} filterOption="SORT" />
            </DropdownFiltersWrapper>
          </SelectFilterSectionWrapper>
          <RecruitmentCardList />
        </RecruitmentsSectionWrapper>
      )}
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

  margin: 0 auto;
  margin-top: 40px;
  gap: 40px;
`;
const BannerSectionWrapper = styled.section`
  display: flex;
  margin: 0 auto;
`;

const RecruitmentsSectionWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  max-width: 1224px;
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

const DropdownFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;
  gap: 12px;
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
