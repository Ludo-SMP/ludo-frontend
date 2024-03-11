import styled from 'styled-components';
import { SaveButton } from '@/Components/Button/Studies/SaveButton';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { useNavigate } from 'react-router-dom';
export const SaveStudy = () => {
  const localData = JSON.parse(localStorage.getItem('create'));
  // console.log(localData.study);
  const navigate = useNavigate();
  const navigateToModify = () => {
    navigate('/studies/modify');
  };
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
        <SaveButton type="submit">글 삭제하기</SaveButton>
        <SubmitButton type="submit">이어서 작성하기</SubmitButton>
      </ButtonBox>
    </StudyContainer>
  );
};

const BorderBox = styled.div`
  width: 1200px;
  border-bottom: 1px solid black;
`;
const StudyContainer = styled.form`
  height: 1300px;
  padding-top: 40px;
  padding-left: 348px;
  padding-right: 348px;
  flex-direction: row;
  text-align: left;
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
