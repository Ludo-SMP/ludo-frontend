import styled from 'styled-components';
// import { BackHeader } from '../../Components/Header/BackHeader';
import { ProgressButton } from '../../Components/Button/Studies/ProgressButton';
import { PlatformButton } from '../../Components/Button/Studies/PlatformButton';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { CalendarButton } from '../../Components/Button/Studies/CalendarButton';
import { BigCategoryButton } from '../../Components/Button/Studies/BigCategoryButton';

export const ModifyStudy = () => {
  return (
    <>
      <StudyContainer>
        <StudyMain>스터디 수정하기</StudyMain>
        <TopBox>
          <StudyTitle>스터디 제목</StudyTitle>
          <BottomWrapper>
            <ContentText>제목</ContentText>
            <Titlearea />
          </BottomWrapper>
        </TopBox>
        <MiddleBox>
          <StudyTitle>스터디 상세 안내</StudyTitle>
          <MiddleWrapper>
            <MiddleBottomInfo>
              <MiddleBottomWrapper>
                <ContentText>카테고리</ContentText>
                <BigCategoryButton />
              </MiddleBottomWrapper>
              <MiddleBottomWrapper>
                <ContentText>스터디 최대 인원</ContentText>
                <BigCategoryButton />
              </MiddleBottomWrapper>
            </MiddleBottomInfo>
          </MiddleWrapper>
        </MiddleBox>
        <MiddleCenterBox>
          <StudyTitle>스터디 진행관련</StudyTitle>
          <StudyMiddleInfo>
            <StudyWrapper>
              <ContentText>진행방식</ContentText>
              <ProgressButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행 플랫폼</ContentText>
              <PlatformButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText> 진행기간</ContentText>
              <CalendarButton />
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleCenterBox>
        <ButtonBox>
          <SubmitButton>임시저장</SubmitButton>
          <SubmitButton>등록하기</SubmitButton>
        </ButtonBox>
      </StudyContainer>
    </>
  );
};

const StudyMain = styled.p`
  font-size: ${(props) => props.theme.font.xxxlarge};
  text-align: left;
  font-weight: 800;
  line-height: 60px;
  padding-bottom: 60px;
  padding-top: 40px;
  /* padding-bottom: 60px; */
`;

const StudyContainer = styled.div`
  height: 1300px;
  padding-left: 348px;
  padding-right: 348px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const TopBox = styled.div`
  height: 250px;
  border-bottom: 1px solid #444444;
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: left;
`;

const MiddleBox = styled.div`
  height: 300px;
  align-items: center;
  padding-top: 40px;
`;

const MiddleCenterBox = styled.div`
  height: 250px;
  align-items: center;
  padding-top: 20px;
`;

const StudyMiddleInfo = styled.div`
  display: grid;
  grid-template-columns: 430px 430px 430px;
  grid-template-rows: 50px;
  row-gap: 16px 16px;
  column-gap: 16px 16px;
`;

const MiddleBottomInfo = styled.div`
  display: grid;
  grid-template-columns: 630px 630px;
  grid-template-rows: 80px;
  font-size: 20px;
  row-gap: 24px 24px;
  column-gap: 24px 24px;
  padding-bottom: 40px;
`;
const MiddleBottomWrapper = styled.section`
  font-size: ${(props) => props.theme.font.medium};
  flex-direction: row;
  padding-top: 40px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  font-size: ${(props) => props.theme.font.medium};
  border-bottom: 1px solid #444444;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  font-size: ${(props) => props.theme.font.medium};
`;

const StudyWrapper = styled.section`
  font-size: ${(props) => props.theme.font.medium};
  padding-bottom: 14px;
  flex-direction: row;
  padding-right: 24px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding-bottom: 80px;
`;

const StudyTitle = styled.p`
  font-size: ${(props) => props.theme.font.xlarge};
  font-weight: bold;
  align-items: left;
  font-weight: 800;
  line-height: 50px;
  padding-bottom: 16px;
`;

const ContentText = styled.p`
  padding-bottom: 10px;
`;
