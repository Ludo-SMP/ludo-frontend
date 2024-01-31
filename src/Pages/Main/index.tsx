import styled from 'styled-components';
import StudyCardList from '../../Components/StudyCardList';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import Gnb from '../../Components/Gnb';
import CreateButton from '../../Components/Button/CreateButton';
import BlankCircle from '../../Components/Common/BlankCirecle';
import { PopularRecruitment, getPopularRecruitments } from '@/Apis/study';
import { useEffect, useState } from 'react';
import { StudyCategory, StudyInfo } from '@/Components/StudyCard';

const convertRecruitmentDataToStudyCardProps = (
  studyCategory: StudyCategory,
  recruitment: PopularRecruitment,
): StudyInfo => {
  const {
    id: studyId,
    title: studyName,
    stacks: tools,
    positions,
    ownerNickname: creator,
    way: activityType,
    recruitmentEndDateTime: recruitDeadLine,
    createdDateTime: createdAt,
    hits: views,
  } = recruitment;
  const studyPeriod: string = recruitment.startDateTime + ' ~ ' + recruitment.endDateTime;

  return {
    studyId,
    studyCategory,
    recruitDeadLine,
    studyName,
    tools,
    positions,
    creator,
    activityType,
    createdAt,
    views,
    studyPeriod,
  };
};

const Main = () => {
  const [recruitments, setRecruitments] = useState({
    codingRecruitments: [],
    interviewRecruitments: [],
    projectRecruitments: [],
  });

  const getPopularRecruitmentResult = async () => {
    const { data } = await getPopularRecruitments();
    if (data) {
      const codingRecruitments: StudyInfo[] = data?.popularCodingRecruitments.map((recruitment: PopularRecruitment) =>
        convertRecruitmentDataToStudyCardProps('코딩 테스트', recruitment),
      );
      const interviewRecruitments: StudyInfo[] = data?.popularInterviewRecruitments.map(
        (recruitment: PopularRecruitment) => convertRecruitmentDataToStudyCardProps('모의 면접', recruitment),
      );
      const projectRecruitments: StudyInfo[] = data?.popularProjectRecruitments.map((recruitment: PopularRecruitment) =>
        convertRecruitmentDataToStudyCardProps('프로젝트', recruitment),
      );

      localStorage.setItem(
        'recruitments',
        JSON.stringify({ codingRecruitments, interviewRecruitments, projectRecruitments }),
      );
    }
  };

  useEffect(() => {
    getPopularRecruitmentResult();
    console.log(JSON.parse(localStorage.getItem('recruitments')));
    setRecruitments({ ...JSON.parse(localStorage.getItem('recruitments')) });
  }, []);

  return (
    <ContentsWrapper>
      <Gnb />
      <ButtonsWrapper>
        <CreateButton>
          <BlankCircle />
        </CreateButton>
      </ButtonsWrapper>

      <Banner {...bannerDummy} />
      <StudyCardList studyCategory="코딩 테스트" studyInfos={recruitments.codingRecruitments} />
      <StudyCardList studyCategory="모의 면접" studyInfos={recruitments.interviewRecruitments} />
      <StudyCardList studyCategory="프로젝트" studyInfos={recruitments.projectRecruitments} />
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
  background-color: none;
  padding: 40px;
`;

export default Main;
