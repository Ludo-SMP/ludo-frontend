import styled from 'styled-components';
// import { ContactButton } from '../../Components/Selectbox/ContactButton';
import { ContactUrlInput } from '../../Components/Textarea/ContactUrlInput';
import { SubmitButton } from '../../Components/Button/Studies/SubmitButton';
import { CalendarButton } from '../../Components/Selectbox/CalendarButton';
import { PositionButton } from '../../Components/Selectbox/PositionButton';
import { StackSelectButton } from '@/Components/Selectbox/StackSelectButton';
import { Mainarea } from '../../Components/Textarea/Mainarea';
import { Titlearea } from '../../Components/Textarea/Titlearea';
// import { GatherButton } from '../../Components/Selectbox/GatherButton';
// import { StackModal } from '../../Components/Modal/
import { EndDate } from '../../Components/Calendar/EndDate';
import { media } from '../../Styles/theme';
import { Gather } from '@/Types/studies';
// Creates,
import { useState } from 'react';
// import { stackCategory } from '@/Shared/category';
import { useStack } from '@/Apis/stack';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { One, Two, Three, Four } from '@/Assets';
import { SaveButton } from '@/Components/Button/Studies/SaveButton';
// import { STUDY } from '@/Constants/queryString';
import { ContactButton } from '@/Components/Selectbox/ContactButton';
import { ApplicantButton } from '@/Components/Selectbox/ApplicantButton';
import { useStudyDetail } from '@/Apis/study';
// import { useStudyId } from '@/Apis/studies';

axios.defaults.withCredentials = true;
export type OptionalCreates = Partial<Gather>;

export const CreateRecruitment = () => {
  const studyId = Number(useParams().studyId);

  // console.log(data);
  // const { d } = useStudyId(studyId as any);
  // console.log(d);
  const Navigation = useNavigate();

  const { data: studyDetail } = useStudyDetail(studyId);
  const study = studyDetail?.study;
  console.log(studyId);
  const [useForm, setuseForm] = useState<Gather>({
    title: '',
    recruitmentEndDateTime: '',
    positionId: 0,
    stackId: 0,
    callUrl: '',
    content: '',
    studyId: Number(useParams().studyId),
    contact: '',
    applicantCount: 0,
  });

  function forms(fields: OptionalCreates) {
    setuseForm({
      ...useForm,
      ...fields,
    });
  }
  // studyId:number
  async function posts() {
    const { data } = await axios.post(`https://ludoapi.store/api/studies/${studyId}/recruitments`, {
      title: useForm.title,
      recruitmentEndDateTime: useForm.recruitmentEndDateTime,
      positionIds: [useForm.positionId],
      stackIds: [useForm.stackId],
      callUrl: useForm.callUrl,
      content: useForm.content,
      contact: useForm.contact,
      applicantCount: useForm.applicantCount,
      // studyId: useForm.studyId,
    });
    console.log(data);
    Navigation(`/studies/${studyId}/recruitment`);
    // localStorage.setItem('gather', JSON.stringify(data.data));
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    posts();
    // Navigation('/');
  };

  return (
    <>
      <StudyContainer onSubmit={handleSubmit}>
        <StudyMain>스터디 팀원 모집하기</StudyMain>
        <TopBox>
          <StudyTitle>
            <AssetContainer>
              <One />
            </AssetContainer>
            스터디 기본 안내
          </StudyTitle>
          <StudyTopInfo>
            <StudyWrapper>
              <ContentText>모집인원</ContentText>
              <ApplicantButton setForm={forms} useForm={useForm} />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>모집마감일</ContentText>
              <CalendarButton>
                <EndDate setForm={forms} useForm={useForm} />
              </CalendarButton>
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>포지션</ContentText>
              <PositionButton setForm={forms} useForm={useForm} />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>기술스택</ContentText>
              <StackSelectButton setForm={forms} useForm={useForm} item={useStack as any} />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>연락방법</ContentText>
              <ContactButton setForm={forms} useForm={useForm} />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>연결url</ContentText>
              <ContactUrlInput setForm={forms} useForm={useForm} />
            </StudyWrapper>
          </StudyTopInfo>
        </TopBox>
        <BorderBox />
        <MiddleBox>
          <StudyTitle>
            <AssetContainer>
              <Two />
            </AssetContainer>
            스터디 진행관련
          </StudyTitle>
          <StudyMiddleInfo>
            <StudyWrapper>
              <ContentText>진행방식</ContentText>
              <SubContentTitle>{study?.way}</SubContentTitle>
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행 플랫폼</ContentText>
              <SubContentTitle>{study?.platform}</SubContentTitle>
            </StudyWrapper>
            <StudyWrapper>
              <ContentText> 진행기간</ContentText>
              <SubContentTitle>
                {study?.startDateTime} ~ {study?.endDateTime}
              </SubContentTitle>
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleBox>
        <BorderBox />
        <StudyMidBottom>
          <StudyTitle>
            <AssetContainer>
              <Three />
            </AssetContainer>
            스터디 기본구성
          </StudyTitle>
          <MiddleBottomWrapper>
            <ContentText>스터디 제목</ContentText>
            <SubContentTitle>{study?.title}</SubContentTitle>
          </MiddleBottomWrapper>
          <MiddleBottomInfo>
            <MiddleBottomWrapper>
              <ContentText>카테고리</ContentText>
              <SubContentTitle>{study?.category as any}</SubContentTitle>
            </MiddleBottomWrapper>
            <MiddleBottomWrapper>
              <ContentText>스터디 최대 인원</ContentText>
              <SubContentTitle>{study?.participantsLimit}</SubContentTitle>
            </MiddleBottomWrapper>
          </MiddleBottomInfo>
        </StudyMidBottom>
        <BorderBox />
        <BottomBox>
          <StudyTitle>
            <AssetContainer>
              <Four />
            </AssetContainer>
            스터디 팀원 모집 공고 제목
          </StudyTitle>
          <BottomWrapper>
            <ContentText>제목</ContentText>
            <Titlearea setForm={forms} useForm={useForm} />
          </BottomWrapper>
          <BottomWrapper>
            <ContentText>내용</ContentText>
            <Mainarea setForm={forms} useForm={useForm} />
          </BottomWrapper>
        </BottomBox>
        <ButtonBox>
          <SaveButton type="submit">임시저장</SaveButton>
          <SubmitButton type="submit">등록하기</SubmitButton>
        </ButtonBox>
      </StudyContainer>
    </>
  );
};

const BorderBox = styled.div`
  width: 1200px;
  margin-bottom: 16px;
  border-bottom: 16px solid #f2f2f2;
`;

const AssetContainer = styled.image`
  padding-right: 12px;
`;

const StudyMain = styled.p`
  display: flex;
  font-size: ${(props) => props.theme.font.xxxlarge};
  text-align: left;
  font-weight: 800;
  line-height: 60px;
  padding-bottom: 40px;
  ${media.custom(800)} {
    display: none;
  }
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

const StudyContainer = styled.form`
  height: 2000px;
  /* margin: auto; */
  padding-left: 200px;
  /* padding-right: 348px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const TopBox = styled.div`
  height: 310px;
  padding-bottom: 40px;
  text-align: left;
  gap: 32px;
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
  padding-top: 16px;
  height: 200px;
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
