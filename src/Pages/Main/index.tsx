import styled from 'styled-components';
import StudyCardList from '../../Components/StudyCardList';
import {
  bannerDummy,
  algorithmStudyCardListPropsDummy,
  interviewStudyCardListPropsDummy,
  projectStudyCardListPropsDummy,
} from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import Gnb from '../../Components/Gnb';
import CreateButton from '../../Components/Button/CreateButton';
import BlankCircle from '../../Components/Common/BlankCirecle';

export const Main = () => {
  return (
    <ContentsWrapper>
      <Gnb />
      <ButtonsWrapper>
        <CreateButton>
          <BlankCircle />
        </CreateButton>
      </ButtonsWrapper>

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

const ButtonsWrapper = styled.span`
  position: fixed;
  right: 188px;
  bottom: 80px;
  background-color: none;
  padding: 40px;
`;
