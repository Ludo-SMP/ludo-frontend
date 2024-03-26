import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@/Components/Common/Button';

const SaveStudyPage = () => {
  const localData = JSON.parse(localStorage.getItem('create'));
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const navigateToModify = () => {
    navigate('/studies/modify');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <StudyContainer onSubmit={navigateToModify}>
      <StudyTitle>{JSON.stringify(localData.study.title)}</StudyTitle>
      <TopWrapper>
        <StudySub>카테고리</StudySub>
        <StudyContents>{JSON.stringify(localData.study.category.name)}</StudyContents>
        <StudySub>스터디 최대인원</StudySub>
        <StudyContents>{JSON.stringify(localData.study.participantLimit)}</StudyContents>
      </TopWrapper>
      <BorderBox />
      <BottomWrapper>
        <StudySub>진행 방식</StudySub>
        <StudyContents>{JSON.stringify(localData.study.way)}</StudyContents>
        <StudySub>진행 플랫폼</StudySub>
        <StudyContents>{JSON.stringify(localData.study.platform)}</StudyContents>
        <StudySub>진행 기간</StudySub>
        <StudyContents>
          {JSON.stringify(localData.study.startDateTime)}~{JSON.stringify(localData.study.endDateTime)}
        </StudyContents>
        <StudySub>진행 기간</StudySub>
        <StudyContents>D-</StudyContents>
      </BottomWrapper>
      <ButtonBox>
        <Button type="submit" scheme="normal" size="fullWidth">
          글 삭제하기
        </Button>
        <Button type="submit" scheme="secondary" size="fullWidth">
          이어서 작성하기
        </Button>
      </ButtonBox>
    </StudyContainer>
  );
};

const BorderBox = styled.div`
  width: 1200px;
  border-bottom: 1px solid black;
`;
const StudyContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 80px;
  gap: 40px;
`;

const TopWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px;
  flex-direction: row;
  grid-template-columns: 184px 392px 184px 392px;
  row-gap: 24px;
  column-gap: 24px;
  padding-bottom: 24px;
`;

const BottomWrapper = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-rows: 50px 50px;
  flex-direction: row;
  grid-template-columns: 184px 392px 184px 392px;
  row-gap: 24px;
  column-gap: 24px;
  padding-bottom: 24px;
`;

const StudyTitle = styled.p`
  font-size: ${(props) => props.theme.font.xlarge};
  font-weight: bold;
  align-items: left;
  padding-bottom: 30px;
`;

const StudySub = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;
const StudyContents = styled.p`
  color: gray;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;

const ButtonBox = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export default SaveStudyPage;
