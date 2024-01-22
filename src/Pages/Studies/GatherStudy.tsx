import styled from 'styled-components';
import { BackHeader } from '../../Components/Header/BackHeader';
import { ContactButton } from '../../Components/Button/Studies/ContactButton';
import { StackButton } from '../../Components/Button/Studies/StackButton';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { Mainarea } from '../../Components/Textarea/Mainarea';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
export const GatherStudy = () => {
  return (
    <>
      <BackHeader />
      <StudyContainer>
        <StudyTitle>스터디 기본 안내</StudyTitle>
        <TopBox>
          <StudyTopInfo>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              진행방식
              <ContactButton />
            </StudyWrapper>
          </StudyTopInfo>
        </TopBox>
        <StudyTitle>스터디 구성 안내</StudyTitle>
        <MiddleBox>
          <StudyMiddleInfo>
            <StudyWrapper>
              카테고리
              <StackButton />
            </StudyWrapper>
            <StudyWrapper>
              카테고리
              <StackButton />
            </StudyWrapper>
            <StudyWrapper>
              카테고리
              <StackButton />
            </StudyWrapper>
            <StudyWrapper>
              카테고리
              <StackButton />
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleBox>
        <StudyTitle>스터디 상세 안내</StudyTitle>
        <BottomBox>
          <BottomWrapper>
            제목
            <Titlearea />
          </BottomWrapper>
          <BottomWrapper>
            내용
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
