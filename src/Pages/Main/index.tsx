import styled from 'styled-components';

import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import Gnb from '../../Components/Gnb';
import CreateButton from '../../Components/Button/CreateButton';
import BlankCircle from '../../Components/Common/BlankCirecle';
import { usePopularRecruitments } from '@/Apis/study';
import { convertPopularRecruitmentsToStudyCardProps } from '@/Utils/propertyConverter';
import CardListInfo from '@/Components/CardListInfo';
import PopularStudyCardList from '@/Components/PopularCardList';

const Main = () => {
  const { data, isLoading } = usePopularRecruitments();
  const popularRecruitments = isLoading ? null : convertPopularRecruitmentsToStudyCardProps(data.data);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <MainWrapper>
      <Gnb />
      <ButtonsWrapper>
        <CreateButton>
          <BlankCircle />
        </CreateButton>
      </ButtonsWrapper>
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
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px 348px 80px 348px;
`;

const ButtonsWrapper = styled.span`
  position: fixed;
  right: 188px;
  bottom: 80px;
  background-color: none;
  padding: 40px;
`;

const StudyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export default Main;
