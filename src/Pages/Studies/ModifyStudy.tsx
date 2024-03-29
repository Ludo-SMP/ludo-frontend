import styled from 'styled-components';
import { ProgressButton } from '../../Components/Selectbox/ProgressButton';
import { PlatformButton } from '../../Components/Selectbox/PlatformButton';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { CalendarButton } from '../../Components/Selectbox/CalendarButton';
import { BigCategoryButton } from '../../Components/Selectbox/BigCategoryButton';
import { MaxPeopleButton } from '../../Components/Selectbox/MaxPeopleButton';
import { ProgressPeriod } from '../../Components/Calendar/ProgressPeriod';
import { PositionButton } from '@/Components/Selectbox/PositionButton';
import { media } from '../../Styles/theme';
import { Creates } from '@/Types/studies';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { One, Two, Three } from '@/Assets';
// import { SaveButton } from '@/Components/Button/Studies/SaveButton';
import axios from 'axios';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';
import Button from '@/Components/Common/Button';
axios.defaults.withCredentials = true;
export type OptionalCreates = Partial<Creates>;

const ModifyStudyPage = () => {
  const Navigate = useNavigate();
  const studyId = Number(useParams().studyId);
  useStudyDetail(studyId);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [useForm, setuseForm] = useState<Creates>({
    title: '',
    categoryId: 0,
    way: '',
    participantLimit: 0,
    startDateTime: '',
    endDateTime: '',
    positionId: 0,
    platform: '',
    studyId: Number(useParams().studyId),
  });

  function forms(fields: OptionalCreates) {
    setuseForm({
      ...useForm,
      ...fields,
    });
  }

  async function post() {
    // const { data } = await axios.put(`https://ludoapi.store/api/studies/${studyId}`, {
    //   title: useForm.title,
    //   categoryId: useForm.categoryId,
    //   way: useForm.way,
    //   participantLimit: useForm.participantLimit,
    //   startDateTime: useForm.startDateTime,
    //   endDateTime: useForm.endDateTime,
    //   positionId: useForm.positionId,
    //   platform: useForm.platform,
    // });

    // const studyId = data.data.study.id;
    Navigate(`/studies/${studyId}`);
  }

  // const onSave = async () => {};
  const handleSubmit = (event: any) => {
    event.preventDefault();
    post();
  };

  return (
    <>
      <StudyContainer onSubmit={handleSubmit}>
        <StudyMain>스터디 수정하기</StudyMain>
        <TopBox>
          <StudyTitle>
            <AssetContainer>
              <One />
            </AssetContainer>
            스터디 제목
          </StudyTitle>
          <BottomWrapper>
            <ContentText>제목</ContentText>
            <Titlearea setForm={forms} useForm={useForm} />
          </BottomWrapper>
        </TopBox>
        <BorderBox />
        <MiddleBox>
          <StudyTitle>
            <AssetContainer>
              <Two />
            </AssetContainer>
            스터디 상세 안내
          </StudyTitle>
          <MiddleWrapper>
            <MiddleBottomInfo>
              <MiddleBottomWrapper>
                <ContentText>카테고리</ContentText>
                <BigCategoryButton setForm={forms} useForm={useForm} />
              </MiddleBottomWrapper>
              <MiddleBottomWrapper>
                <ContentText>스터디 최대 인원</ContentText>
                <MaxPeopleButton setForm={forms} useForm={useForm} />
              </MiddleBottomWrapper>
              <MiddleBottomWrapper>
                <ContentText>포지션</ContentText>
                <PositionButton setForm={forms} useForm={useForm} />
              </MiddleBottomWrapper>
            </MiddleBottomInfo>
          </MiddleWrapper>
        </MiddleBox>
        <BorderBox />
        <MiddleCenterBox>
          <StudyTitle>
            <AssetContainer>
              <Three />
            </AssetContainer>
            스터디 진행관련
          </StudyTitle>
          <StudyMiddleInfo>
            <StudyWrapper>
              <ContentText>진행방식</ContentText>
              <ProgressButton setForm={forms} useForm={useForm} />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText>진행 플랫폼</ContentText>
              <PlatformButton setForm={forms} useForm={useForm} />
            </StudyWrapper>
            <StudyWrapper>
              <ContentText> 진행기간</ContentText>
              <CalendarButton>
                <ProgressPeriod setForm={forms} useForm={useForm} />
              </CalendarButton>
            </StudyWrapper>
          </StudyMiddleInfo>
        </MiddleCenterBox>
        <ButtonBox>
          {/* <SaveButton onClick={onSave}>임시저장</SaveButton> */}
          <Button type="submit" scheme="secondary" size="fullWidth">
            등록하기
          </Button>
        </ButtonBox>
      </StudyContainer>
    </>
  );
};

const AssetContainer = styled.image`
  padding-right: 12px;
`;

const BorderBox = styled.div`
  max-width: 1200px;
  margin-bottom: 16px;
  border-bottom: 16px solid #f2f2f2;
`;

const StudyMain = styled.p`
  width: 1200px;
  font-size: ${(props) => props.theme.font.xxxlarge};
  text-align: left;
  align-items: left;
  margin-right: 50px;
  font-weight: 800;
  line-height: 60px;
  /* padding-bottom: 60px; */
  padding-top: 40px;
  ${media.custom(800)} {
    display: none;
  }
`;

const StudyContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 80px;
  gap: 40px;
  ${media.custom(200)} {
    display: none;
  }
`;

const TopBox = styled.div`
  height: 250px;
  padding-top: 40px;
  text-align: left;
  align-items: center;
  margin-right: 50px;
`;

const MiddleBox = styled.div`
  height: 300px;
  align-items: center;
  padding-top: 40px;
  text-align: left;
`;

const MiddleCenterBox = styled.div`
  height: 250px;
  align-items: center;
  text-align: left;

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
  grid-template-columns: 430px 430px 430px;
  grid-template-rows: 80px;
  row-gap: 24px 24px;
  column-gap: 24px 24px;
  padding-bottom: 40px;
  font-size: ${(props) => props.theme.font.medium};
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
export default ModifyStudyPage;
