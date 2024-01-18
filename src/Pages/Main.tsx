import styled from 'styled-components';
import StudyCardList from '../Components/StudyCard';

import { projectStudyInfosDummy, projectStudyListDummy, bannerDummy } from '../Shared/dummy';
import { Banner } from '../Components/Banner';

export const Main = () => {
  return (
    <MainWrapper>
      <ContentsWrapper>
        <Banner {...bannerDummy} />
        <StudyCardList {...projectStudyListDummy} />
      </ContentsWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  algin-contents: center;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: cetner;
  justify-content: center;

  margin: 0 15%;
  display: flex;
  gap: 40px;
  flex-align: column;
`;
