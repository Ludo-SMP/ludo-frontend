import styled from 'styled-components';
import { ContactButton } from '../../Components/Button/Studies/ContactButton';
import { StackButton } from '../../Components/Button/Studies/StackButton';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { CalendarButton } from '../../Components/Button/Studies/CalendarButton';
import { PlatformButton } from '../../Components/Button/Studies/PlatformButton';
import { Mainarea } from '../../Components/Textarea/Mainarea';
import { Titlearea } from '../../Components/Textarea/Titlearea';

export const GatherStudy = () => {
  return (
    <>
      <StudyContainer>
        <StudyMain>스터디 팀원 모집하기</StudyMain>
        <TopBox>
          <StudyTitle>스터디 기본 안내</StudyTitle>
          <StudyTopInfo>
            <StudyWrapper>
              <ContentText>모집인원</ContentText>
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>모집마감일</ContentText>
              <CalendarButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>포지션</ContentText>
              <PlatformButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>기술스택</ContentText>
              <StackButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>연락방법</ContentText>
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>연결url</ContentText>
              <ContactButton />
            </StudyWrapper>
          </StudyTopInfo>
        </TopBox>
        <MiddleBox>
          <StudyTitle>스터디 진행관련</StudyTitle>
          <StudyMiddleInfo>
            <StudyWrapper>
              <ContentText>진행방식</ContentText>
              진행방식
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행 플랫폼</ContentText>
              진행 플랫폼
            </StudyWrapper>
            <StudyWrapper>
              <ContentText> 진행기간</ContentText>
              진행기간
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleBox>
        <StudyMidBottom>
          <StudyTitle>기본구성</StudyTitle>
          <MiddleBottomWrapper>
            <ContentText>스터디 제목</ContentText>
            스터디 제목
          </MiddleBottomWrapper>
          <MiddleBottomInfo>
            <MiddleBottomWrapper>
              <ContentText>카테고리</ContentText>
              카테고리
            </MiddleBottomWrapper>
            <StudyWrapper>
              <ContentText>스터디 최대 인원</ContentText>
              스터디 최대 인원
            </StudyWrapper>
          </MiddleBottomInfo>
        </StudyMidBottom>

        <BottomBox>
          <StudyTitle>스터디 상세 안내</StudyTitle>
          <BottomWrapper>
            <ContentText>제목</ContentText>
            <Titlearea />
          </BottomWrapper>
          <BottomWrapper>
            <ContentText>내용</ContentText>
            <Mainarea />
          </BottomWrapper>
        </BottomBox>
        <ButtonBox>
          <SubmitButton>수정취소</SubmitButton>
          <SubmitButton>수정완료</SubmitButton>
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
  /* padding-bottom: 60px; */
`;

const StudyTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  align-items: left;
  padding-bottom: 10px;
`;

const ContentText = styled.p`
  padding-bottom: 10px;
  font-weight: 500;
  line-height: 40px;
  font-size: 20px;
`;

const StudyContainer = styled.div`
  height: 2000px;
  padding-left: 348px;
  padding-right: 348px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const TopBox = styled.div`
  height: 306px;
  border-bottom: 1px solid #444444;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  /* align-items: center;
  padding-right: 200px; */
`;

const StudyTopInfo = styled.div`
  display: grid;
  grid-template-columns: 392px 392px 392px;
  grid-template-rows: 90px 90px;
  row-gap: 10px;
  column-gap: 10px;
  padding-bottom: 10px;
`;

const MiddleBox = styled.div`
  height: 306px;
  border-bottom: 1px solid #444444;
  padding-top: 20px;
  align-items: center;
`;

const StudyMiddleInfo = styled.div`
  display: grid;
  grid-template-columns: 392px 392px 392px;
  grid-template-rows: 85px;
`;

// 중간마지막

const StudyMidBottom = styled.div`
  height: 340px;
  border-bottom: 1px solid #444444;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  font-size: 20px;
`;

const MiddleBottomInfo = styled.div`
  display: grid;
  grid-template-columns: 392px 392px;
  grid-template-rows: 100px;
  font-size: 20px;
  row-gap: 16px 16px;
  column-gap: 16px 16px;
`;
const MiddleBottomWrapper = styled.section`
  font-size: 20px;
  flex-direction: row;
  padding-top: 20px;
`;

const BottomBox = styled.div`
  padding-top: 10px;
  align-items: left;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  font-size: 20px;
`;

const StudyWrapper = styled.section`
  font-size: 20px;
  flex-direction: row;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
