import styled from 'styled-components';
import StudyCardList from '../../Components/StudyCardList';
import {
  bannerDummy,
  algorithmStudyCardListPropsDummy,
  interviewStudyCardListPropsDummy,
  projectStudyCardListPropsDummy,
} from '../../Shared/dummy';
import Banner from '../../Components/Banner';

export const Main = () => {
  return (
    <ContentsWrapper>
      <Banner {...bannerDummy} />
      <StudyCardList {...algorithmStudyCardListPropsDummy} />
      <StudyCardList {...interviewStudyCardListPropsDummy} />
      <StudyCardList {...projectStudyCardListPropsDummy} />
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px 348px 80px 348px;
`;
