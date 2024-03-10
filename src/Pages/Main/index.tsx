import styled from 'styled-components';
import { Recruitment } from '@/Types/study';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import { usePopularRecruitments } from '@/Apis/recruitment';
import Button from '@/Components/Common/Button';
import { Up } from '@/Assets';
import UtiltiyButtons from '@/Components/UtilityButtons';
import ChipMenu from '@/Components/Common/ChipMenu';
import { useSelectedCategoryStore } from '@/Store/category';
import RecruitmentCard from '@/Components/RecruitmentCard';

const Main = () => {
  const { data: popularRecruitments, isLoading } = usePopularRecruitments();
  const { selectedCategory, setSelectedCategory } = useSelectedCategoryStore();

  const popularCodingRecruitments: Recruitment[] = popularRecruitments?.popularCodingRecruitments;
  const popularInterviewRecruitments: Recruitment[] = popularRecruitments?.popularInterviewRecruitments;
  const popularProjectRecruitments: Recruitment[] = popularRecruitments?.popularProjectRecruitments;

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <MainWrapper>
      <Banner {...bannerDummy} />
      <RecruitmentsSectionWrapper>
        <div className="section__title">이번주 인기 있는 스터디 모음 zip.</div>
        <SelectCategorySectionWrapper>
          <CategoryMenusWrapper>
            <ChipMenu
              checked={selectedCategory.name === '코딩 테스트'}
              onClick={() => setSelectedCategory({ id: 2, name: '코딩 테스트' })}
            >
              코딩 테스트
            </ChipMenu>
            <ChipMenu
              checked={selectedCategory.name === '모의 면접'}
              onClick={() => setSelectedCategory({ id: 1, name: '모의 면접' })}
            >
              모의 면접
            </ChipMenu>
            <ChipMenu
              checked={selectedCategory.name === '프로젝트'}
              onClick={() => setSelectedCategory({ id: 3, name: '프로젝트' })}
            >
              사이드 프로젝트
            </ChipMenu>
          </CategoryMenusWrapper>
        </SelectCategorySectionWrapper>

        <RecruitmentCardsWrapper>
          {selectedCategory.name === '코딩 테스트'
            ? popularCodingRecruitments.map((recruitment: Recruitment) => (
                <RecruitmentCard {...recruitment} key={recruitment.id} />
              ))
            : selectedCategory.name === '모의 면접'
            ? popularInterviewRecruitments.map((recruitment: Recruitment) => (
                <RecruitmentCard {...recruitment} key={recruitment.id} />
              ))
            : popularProjectRecruitments.map((recruitment: Recruitment) => (
                <RecruitmentCard {...recruitment} key={recruitment.id} />
              ))}
        </RecruitmentCardsWrapper>
      </RecruitmentsSectionWrapper>
      <UtiltiyButtons>
        <Button onClick={handleScroll} className="scroll__btn">
          <Up />
          <span>위로가기</span>
        </Button>
      </UtiltiyButtons>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  flex-direction: column;
  gap: 40px;
`;

const RecruitmentsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 21px;

  .section__title {
    color: ${({ theme }) => theme.color.black5};
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.xxlarge};
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
  }
`;

const SelectCategorySectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const CategoryMenusWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const RecruitmentCardsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 21px;
  flex-wrap: wrap;
`;

export default Main;
