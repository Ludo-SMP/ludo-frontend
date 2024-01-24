import styled from 'styled-components';
// import { BackHeader } from '../../Components/Header/BackHeader';
import { StackButton } from '../../Components/Button/Studies/StackButton';
import { ProgressButton } from '../../Components/Button/Studies/ProgressButton';
import { PlatformButton } from '../../Components/Button/Studies/PlatformButton';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { Mainarea } from '../../Components/Textarea/Mainarea';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { CalendarButton } from '../../Components/Button/Studies/CalendarButton';

export const CreateStudy = () => {
  return (
    <>
      <StudyContainer>
        <StudyTitle>스터디 기본 안내</StudyTitle>
        <TopBox>
          <StudyTopInfo>
            <StudyWrapper>
              <ContentText>카테고리</ContentText>
              <StackButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>스터디 최대인원</ContentText>
              <ProgressButton />
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
              <ContentText>시작예정일</ContentText>
              <CalendarButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행기간</ContentText>
              <CalendarButton />
            </StudyWrapper>
          </StudyTopInfo>
        </TopBox>
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
  height: 2000px;
  padding-left: 348px;
  padding-right: 348px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const TopBox = styled.div`
  height: 310px;
  border-bottom: 1px solid #444444;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
`;

const StudyTopInfo = styled.div`
  display: grid;
  grid-template-columns: 600px 600px;
  grid-template-rows: 150px 150px 150px;
  gap: 24px 24px;
  padding-bottom: 10px;
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
