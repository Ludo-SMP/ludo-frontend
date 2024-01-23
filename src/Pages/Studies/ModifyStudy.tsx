import styled from 'styled-components';
import { BackHeader } from '../../Components/Header/BackHeader';
import { ContactButton } from '../../Components/Button/Studies/ContactButton';
import { StackButton } from '../../Components/Button/Studies/StackButton';
import { ProgressButton } from '../../Components/Button/Studies/ProgressButton';
import { PlatformButton } from '../../Components/Button/Studies/PlatformButton';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { Mainarea } from '../../Components/Textarea/Mainarea';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { CalendarButton } from '../../Components/Button/Studies/CalendarButton';

export const ModifyStudy = () => {
  return (
    <>
      <BackHeader />
      <StudyContainer>
        <StudyTitle>스터디 기본 안내</StudyTitle>
        <TopBox>
          <StudyTopInfo>
            <StudyWrapper>
              <ContentText>연락방법</ContentText>
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행방식</ContentText>
              <ProgressButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행플랫폼</ContentText>
              <PlatformButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>모집마감일</ContentText>
              <CalendarButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>시작예정일</ContentText>
              <CalendarButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행기간</ContentText>
              <CalendarButton />
            </StudyWrapper>
          </StudyTopInfo>
        </TopBox>
        <StudyTitle>스터디 구성 안내</StudyTitle>
        <MiddleBox>
          <StudyMiddleInfo>
            <StudyWrapper>
              <ContentText>카테고리</ContentText>
              <StackButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>기술스택</ContentText>
              <StackButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText> 포지션</ContentText>
              <StackButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>모집인원</ContentText>
              <StackButton />
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleBox>
        <StudyTitle>스터디 상세 안내</StudyTitle>
        <BottomBox>
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

const StudyContainer = styled.div`
  height: 1500px;
  padding-left: 320px;
  padding-right: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;
const TopBox = styled.div`
  height: 306px;
  border-bottom: 1px solid #444444;
  padding-bottom: 40px;
  text-align: left;
`;

const StudyTopInfo = styled.div`
  display: grid;
  grid-template-columns: 392px 392px 392px;
  grid-template-rows: 150px 150px;
  gap: 24px 24px;
  padding-bottom: 10px;
`;

const MiddleBox = styled.div`
  height: 306px;
  border-bottom: 1px solid #444444;
  padding-bottom: 40px;
  align-items: center;
`;

const StudyMiddleInfo = styled.div`
  display: grid;
  grid-template-columns: 600px 600px;
  grid-template-rows: 150px 150px;
  gap: 24px 24px;
`;

const BottomBox = styled.div`
  height: 568px;
  padding-bottom: 40px;
  align-items: center;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  font-size: 20px;
`;

const StudyWrapper = styled.section`
  font-size: 20px;
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
  font-size: 28px;
  font-weight: bold;
  align-items: left;
`;

const ContentText = styled.p`
  padding-bottom: 10px;
`;
