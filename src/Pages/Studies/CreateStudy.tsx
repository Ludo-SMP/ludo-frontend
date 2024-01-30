import styled from 'styled-components';
import { ProgressButton } from '../../Components/Button/Studies/ProgressButton';
import { PlatformButton } from '../../Components/Button/Studies/PlatformButton';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { CalendarButton } from '../../Components/Button/Studies/CalendarButton';
import { BigCategoryButton } from '../../Components/Button/Studies/BigCategoryButton';
import { MaxPeopleButton } from '../../Components/Button/Studies/MaxPeopleButton';
import { ProgressPeriod } from '../../Components/Calendar/ProgressPeriod';
import { CreateStudies } from '../../Apis/study';
import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type ActivityType = '온라인' | '오프라인' | '미정';
export type StudyCategory = '알고리즘' | '모의 면접' | '프로젝트' | 'All';
export interface CreateInfo {
  studyName: string;
  studyCategory: StudyCategory;
  recruitDeadLine?: string;
  maxMember: string;
  ActivityType: string;
  studyPeriod: string;
}

export const CreateStudy = () => {
  const [create, setCreate] = useState([] as any);
  const saveAtom = atomWithStorage(create, false);
  const [save, setSave] = useAtom(saveAtom);

  const postStudy = async () => {
    const { data } = await CreateStudies();
    setCreate(data?.studyList);
    console.log(setCreate(data?.studyList));
  };
  useEffect(() => {
    postStudy();
  }, []);

  return (
    <>
      <StudyContainer>
        <StudyMain>스터디 생성하기</StudyMain>
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
                <MaxPeopleButton />
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
              <CalendarButton>
                <ProgressPeriod />
              </CalendarButton>
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleCenterBox>
        <ButtonBox>
          <SubmitButton onClick={() => setSave(!save)}>임시저장</SubmitButton>
          <SubmitButton onClick={() => create}>등록하기</SubmitButton>
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
`;

const StudyContainer = styled.form`
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
  font-size: ${(props) => props.theme.font.medium};
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
