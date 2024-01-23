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
  gap: 2rem;
  margin: 0 15%;
`;
