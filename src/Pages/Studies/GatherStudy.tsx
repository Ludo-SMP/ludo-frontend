import styled from 'styled-components';
import { ContactButton } from '../../Components/Button/Studies/ContactButton';
import { ContactUrlInput } from '../../Components/Textarea/ContactUrlInput';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { CalendarButton } from '../../Components/Button/Studies/CalendarButton';
import { PositionButton } from '../../Components/Button/Studies/PositionButton';
import { Mainarea } from '../../Components/Textarea/Mainarea';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { GatherButton } from '../../Components/Button/Studies/GatherButton';
import { StackModal } from '../../Components/Modal/StackModal';
import { EndDate } from '../../Components/Calendar/EndDate';
import { useState } from 'react';
import { GatherStudies } from '../../Apis/study';

export type ActivityType = '온라인' | '오프라인' | '미정';
export type StudyCategory = '알고리즘' | '모의 면접' | '프로젝트' | 'All';
export type Tool = 'React' | 'Java' | 'Spring' | 'Figma' | 'Java' | 'Javascript';
export type PositionType = '백엔드' | '프론트엔드' | '기획' | '디자이너';
export interface GatherInfo {
  gatherMember: string;
  recruitDeadLine: string;
  positions: PositionType[];
  tools: Tool[];
  contact: string;
  url: string;
  title: string;
  detail: string;
}

export const GatherStudy = () => {
  const [create, setCreate] = useState([] as any);

  const modifyStudy = async () => {
    const { data } = await GatherStudies();
    setCreate(data?.studyList);
    console.log(data?.studyList);
    console.log(create);
  };
  // useEffect(() => {
  //   modifyStudy();
  // }, [create]);
  console.log(modifyStudy);

  return (
    <>
      <StudyContainer>
        <StudyMain>스터디 팀원 모집하기</StudyMain>
        <TopBox>
          <StudyTitle>스터디 기본 안내</StudyTitle>
          <StudyTopInfo>
            <StudyWrapper>
              <ContentText>모집인원</ContentText>
              <GatherButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>모집마감일</ContentText>
              <CalendarButton>
                <EndDate />
              </CalendarButton>
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>포지션</ContentText>
              <PositionButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>기술스택</ContentText>
              <StackModal />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>연락방법</ContentText>
              <ContactButton />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>연결url</ContentText>
              <ContactUrlInput />
            </StudyWrapper>
          </StudyTopInfo>
        </TopBox>
        <MiddleBox>
          <StudyTitle>스터디 진행관련</StudyTitle>
          <StudyMiddleInfo>
            <StudyWrapper>
              <ContentText>진행방식</ContentText>
              <SubContentTitle>진행방식</SubContentTitle>
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행 플랫폼</ContentText>
              <SubContentTitle>진행 플랫폼</SubContentTitle>
            </StudyWrapper>
            <StudyWrapper>
              <ContentText> 진행기간</ContentText>
              <SubContentTitle>진행기간</SubContentTitle>
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleBox>
        <StudyMidBottom>
          <StudyTitle>스터디 기본구성</StudyTitle>
          <MiddleBottomWrapper>
            <ContentText>스터디 제목</ContentText>
            <SubContentTitle> 스터디 제목</SubContentTitle>
          </MiddleBottomWrapper>
          <MiddleBottomInfo>
            <MiddleBottomWrapper>
              <ContentText>카테고리</ContentText>
              <SubContentTitle>카테고리</SubContentTitle>
            </MiddleBottomWrapper>
            <MiddleBottomWrapper>
              <ContentText>스터디 최대 인원</ContentText>
              <SubContentTitle>스터디 최대 인원</SubContentTitle>
            </MiddleBottomWrapper>
          </MiddleBottomInfo>
        </StudyMidBottom>

        <BottomBox>
          <StudyTitle>스터디 팀원 모집 공고 제목</StudyTitle>
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
  padding-bottom: 60px;
`;

const StudyTitle = styled.p`
  font-size: ${(props) => props.theme.font.xlarge};
  font-weight: bold;
  align-items: left;
  padding-bottom: 16px;
`;

const ContentText = styled.p`
  padding-bottom: 16px;
  font-weight: 500;
  line-height: 40px;
  font-size: ${(props) => props.theme.font.medium};
`;

const SubContentTitle = styled.p`
  color: ${(props) => props.theme.color.gray4};
  font-weight: 500;
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
  height: 310px;
  border-bottom: 1px solid #444444;
  padding-top: 20px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  text-align: left;
`;

const StudyTopInfo = styled.div`
  display: grid;
  grid-template-columns: 392px 392px 392px;
  grid-template-rows: 100px 100px;
  row-gap: 24px;
  column-gap: 24px;
  padding-bottom: 4px;
`;

const MiddleBox = styled.div`
  height: 200px;
  border-bottom: 1px solid #444444;
  align-items: center;
`;

const StudyMiddleInfo = styled.div`
  display: grid;
  grid-template-columns: 392px 392px 392px;
  grid-template-rows: 50px;
`;

// 중간마지막

const StudyMidBottom = styled.div`
  height: 340px;
  border-bottom: 1px solid #444444;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  font-size: ${(props) => props.theme.font.medium};
`;

const MiddleBottomInfo = styled.div`
  display: grid;
  grid-template-columns: 600px 600px;
  grid-template-rows: 80px;
  font-size: ${(props) => props.theme.font.medium};
  row-gap: 16px 16px;
  column-gap: 16px 16px;
`;
const MiddleBottomWrapper = styled.section`
  font-size: ${(props) => props.theme.font.medium};
  flex-direction: row;
  padding-top: 20px;
`;

const BottomBox = styled.div`
  padding-top: 40px;
  align-items: left;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  font-size: ${(props) => props.theme.font.medium};
`;

const StudyWrapper = styled.section`
  font-size: ${(props) => props.theme.font.medium};
  flex-direction: row;
`;

const ButtonBox = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
