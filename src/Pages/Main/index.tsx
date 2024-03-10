import styled from 'styled-components';
import { Recruitment } from '@/Types/study';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import { usePopularRecruitments } from '@/Apis/recruitment';
import Button from '@/Components/Common/Button';
import ChipMenu from '@/Components/Common/ChipMenu';
import { Right, Create } from '@/Assets';
import UtiltiyButtons from '@/Components/UtilityButtons';
import { useSelectedCategoryStore } from '@/Store/category';
import RecruitmentCard from '@/Components/RecruitmentCard';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/Constants/Router_Path';

const Main = () => {
  const { data: popularRecruitments, isLoading } = usePopularRecruitments();
  const { selectedCategory, setSelectedCategory } = useSelectedCategoryStore();
  const navigate = useNavigate();

  const popularCodingRecruitments: Recruitment[] = popularRecruitments?.popularCodingRecruitments;
  const popularInterviewRecruitments: Recruitment[] = popularRecruitments?.popularInterviewRecruitments;
  const popularProjectRecruitments: Recruitment[] = popularRecruitments?.popularProjectRecruitments;

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
          <MoreSectionWrapper
            onClick={() => {
              navigate(ROUTER_PATH.recruitments);
            }}
          >
            <span className="more__text">전체 목록 보러가기</span>
            <Right />
          </MoreSectionWrapper>
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
        <Button onClick={() => navigate(ROUTER_PATH.createStudy)} className="create__btn">
          <Create height={40} />
          <span>스터디 생성</span>
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
  align-items: center;
  width: 100%;
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

const MoreSectionWrapper = styled.div`
  display: flex;
  display: inline-flex;
  padding: 0 16px 0 24px;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  gap: 8px;

  &:hover {
    cursor: pointer;
  }

  .more__text {
    color: ${({ theme }) => theme.color.black3};
    padding-top: 2px;
  }
`;

export default Main;
