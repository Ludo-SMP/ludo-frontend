import styled from 'styled-components';
import StudyCardList from '../../Components/StudyCardList';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import Gnb from '../../Components/Gnb';
import CreateButton from '../../Components/Button/CreateButton';
import BlankCircle from '../../Components/Common/BlankCirecle';
import { usePopularRecruitments } from '@/Apis/study';
import { convertPopularRecruitmentsToStudyCardProps } from '@/Utils/propertyConverter';

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
      <StudyCardList studyCategory="코딩 테스트" studyCardsProps={popularRecruitments?.popularCodingRecruitments} />
      <StudyCardList studyCategory="모의 면접" studyCardsProps={popularRecruitments?.popularInterviewRecruitments} />
      <StudyCardList studyCategory="프로젝트" studyCardsProps={popularRecruitments?.popularProjectRecruitments} />
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

export default Main;
