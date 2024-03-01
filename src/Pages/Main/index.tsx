import styled from 'styled-components';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import { usePopularRecruitments } from '@/Apis/recruitment';
import CardListInfo from '@/Components/CardListInfo';
import PopularStudyCardList from '@/Components/PopularCardList';
import Button from '@/Components/Common/Button';
import { Up } from '@/Assets';
import UtiltiyButtons from '@/Components/UtilityButtons';
// import { popularRecruitmentsMockData } from '../../Shared/dummy';

const Main = () => {
  const { data, isLoading } = usePopularRecruitments();
  const popularRecruitments = isLoading ? null : data;
  // const popularRecruitments = convertPopularRecruitmentsToStudyCardProps(popularRecruitmentsMockData);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <MainWrapper>
      <Banner {...bannerDummy} />
      <StudyListWrapper>
        <CardListInfo studyCategory="코딩 테스트" />
        <PopularStudyCardList studyCardsProps={popularRecruitments?.popularCodingRecruitments} />
      </StudyListWrapper>
      <StudyListWrapper>
        <CardListInfo studyCategory="모의 면접" />
        <PopularStudyCardList studyCardsProps={popularRecruitments?.popularInterviewRecruitments} />
      </StudyListWrapper>
      <StudyListWrapper>
        <CardListInfo studyCategory="프로젝트" />
        <PopularStudyCardList studyCardsProps={popularRecruitments?.popularProjectRecruitments} />
      </StudyListWrapper>
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

const StudyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export default Main;
