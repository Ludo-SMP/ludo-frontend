import { Four, Loading, One, Three, Two } from '@/Assets';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { EndDate } from '@/Components/Calendar/EndDate';
import Button from '@/Components/Common/Button';
import InputText from '@/Components/Common/InputText/index';
import { Stack } from '@/Components/Common/Stack';
// components
import Heading from '@/Components/Heading';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import CustomSelect from '@/Components/Selectbox/CustomSelect';
import Spacing from '@/Components/Spacing';
import { TextArea } from '@/Components/Textarea';

import { useCreateRecruitmentMutation } from '@/Hooks/recruitments/useCreateRecruitment';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';

import { PositionId, RecruitmentForm } from '@/Types/study';

import { APPLICATION_CNT, CONTACT, POSITION, POSITIONS } from '@/Shared/study';

import { useSavedKeyStore } from '@/store/study';

import { CREATE_RECRUITMENT } from '@/Constants/messages';

const ModifyRecruitmentPage = () => {
  const studyId = Number(useParams().studyId);
  const { pathname } = useLocation();

  // 임시저장된 키가 있는지 확인
  // const savedKey = useSavedKeyStore((state) => state.savedKey);
  //const setSavedKey = useSavedKeyStore((state) => state.setSavedKey);
  //const tempSaved: RecruitmentForm | null = JSON.parse(localStorage.getItem(savedKey)) ?? null;

  // const getDefVal = (formKey: keyof RecruitmentForm) => {
  //   if (!tempSaved) return;
  //   const val = tempSaved[formKey];

  //   switch (formKey) {
  //     case 'applicantCount': {
  //       return APPLICATION_CNT.find((el) => el.value === val) ?? null;
  //     }
  //     // 포지션 id
  //     case 'positionIds': {
  //       return POSITION.find((el) => el.value === val) ?? null;
  //     }
  //     case 'stackIds': {
  //       return STACK.find((el) => el.value === val) ?? null;
  //     }
  //     case 'contact': {
  //       return CONTACT.find((el) => el.value === val) ?? null;
  //     }
  //     default: {
  //       return val;
  //     }
  //   }
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      // 언마운트될 때, 임시저장 선택된 키 초기화
      //if (tempSaved) setSavedKey('');
    };
  }, [pathname]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RecruitmentForm>({
    // defaultValues: tempSaved,
  });

  const { mutate } = useCreateRecruitmentMutation(studyId);

  const onSubmit = (data: RecruitmentForm) => {
    const test: RecruitmentForm = { ...data, positionIds: [0], stackIds: [] };
    // console.log('test', test, uuidv4());
    //mutate(test);
  };

  const data = watch();

  const STACK = [
    { value: 1, label: 'React' },
    { value: 2, label: 'Next.js' },
    { value: 3, label: 'Javascript' },
    { value: 4, label: 'Java' },
    { value: 5, label: 'Spring' },
  ];

  return (
    <RecruitmentContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading type={'Head'} component={'Page'}>
          스터디 팀원 모집하기
        </Heading>
        <Spacing size={40} />
        <Stack divider={<Divider />}>
          <FormSection>
            <Heading type={'Title'} component={'Page'}>
              <AssetContainer>
                <One />
              </AssetContainer>
              스터디 모집 안내
            </Heading>
            <Grid>
              <GridItem>
                <Controller
                  control={control}
                  name="applicantCount"
                  rules={{ required: CREATE_RECRUITMENT.applicantCount }}
                  render={({ field }) => (
                    <CustomSelect
                      label="모집 인원"
                      placeholder="ex) 5명"
                      //defaultValue={getDefVal('applicantCount')}
                      values={APPLICATION_CNT}
                      {...field}
                    />
                  )}
                />
                {errors?.applicantCount?.message && <ErrorMsg>{errors?.applicantCount?.message}</ErrorMsg>}
              </GridItem>
              <GridItem>
                <Heading type={'Title'} component={'Input'}>
                  모집 마감일
                </Heading>
                <Spacing size={12} />
                <CalendarButton>
                  <Controller
                    control={control}
                    name="recruitmentEndDateTime"
                    rules={{ required: CREATE_RECRUITMENT.recruitmentEndDateTime }}
                    render={({ field }) => (
                      <EndDate
                        {...field}
                        // defaultValue={getDefVal('recruitmentEndDateTime') as string}
                      />
                    )}
                  />
                </CalendarButton>
                {errors?.recruitmentEndDateTime?.message && (
                  <ErrorMsg>{errors?.recruitmentEndDateTime?.message}</ErrorMsg>
                )}
              </GridItem>
              <GridItem>
                <Controller
                  control={control}
                  name="positionIds"
                  rules={{ required: CREATE_RECRUITMENT.positionIds }}
                  render={({ field }) => (
                    <CustomSelect
                      label="포지션"
                      placeholder="포지션"
                      // defaultValue={getDefVal('positionIds')}
                      values={POSITION}
                      {...field}
                    />
                  )}
                />
                {errors?.positionIds?.message && <ErrorMsg>{errors?.positionIds?.message}</ErrorMsg>}
              </GridItem>
              <GridItem>
                <Controller
                  control={control}
                  name="stackIds"
                  rules={{ required: CREATE_RECRUITMENT.stackIds }}
                  render={({ field }) => (
                    <CustomSelect
                      label="기술 스택"
                      //defaultValue={getDefVal('stackIds')}
                      placeholder="기술 스택"
                      values={STACK}
                      {...field}
                    />
                  )}
                />
                {errors?.stackIds?.message && <ErrorMsg>{errors?.stackIds?.message}</ErrorMsg>}
              </GridItem>
              <GridItem>
                <Controller
                  control={control}
                  name="contact"
                  rules={{ required: CREATE_RECRUITMENT.contact }}
                  render={({ field }) => (
                    <CustomSelect
                      label="연락방법"
                      placeholder="연락방법"
                      // defaultValue={getDefVal('contact')}
                      values={CONTACT}
                      {...field}
                    />
                  )}
                />
                {errors?.contact?.message && <ErrorMsg>{errors?.contact?.message}</ErrorMsg>}
              </GridItem>
              <GridItem>
                <Heading type={'Title'} component={'Input'}>
                  연결 url
                </Heading>
                <Spacing size={12} />
                <InputText
                  placeholder="ex) 오픈 카카오톡 링크"
                  //  defaultValue={getDefVal('callUrl') as string}
                  {...register('callUrl', { required: CREATE_RECRUITMENT.contact })}
                />
                {errors?.callUrl?.message && <ErrorMsg>{errors?.callUrl?.message}</ErrorMsg>}
              </GridItem>
            </Grid>
          </FormSection>
          <FormSection>
            <Heading type={'Title'} component={'Page'}>
              <AssetContainer>
                <Two />
              </AssetContainer>
              스터디 진행 관련
            </Heading>

            <Box display="row" gap="24px">
              <BoxItem>
                <div className="box__title">진행 방식</div>
                <div className="box__content">진행 방식</div>
              </BoxItem>
              <BoxItem>
                <div className="box__title">진행 플랫폼</div>
                <div className="box__content">진행 플랫폼</div>
              </BoxItem>
              <BoxItem>
                <div className="box__title">진행 기간</div>
                <div className="box__content">진행 기간</div>
              </BoxItem>
            </Box>
            <Spacing size={32} />
          </FormSection>
          <FormSection>
            <Heading type={'Title'} component={'Page'}>
              <AssetContainer>
                <Three />
              </AssetContainer>
              스터디 기본 구성
            </Heading>
            <Box display="row" gap="24px">
              <BoxItem>
                <div className="box__title">스터디 제목</div>
                <div className="box__content">스터디 제목</div>{' '}
              </BoxItem>

              <BoxItem>
                <div className="box__title">카테고리</div>
                <div className="box__content">카테고리</div>
              </BoxItem>
              <BoxItem>
                <div className="box__title">스터디 최대 인원</div>
                <div className="box__content">스터디 최대 인원</div>
              </BoxItem>
            </Box>
            <Spacing size={32} />
          </FormSection>
          <FormSection>
            <Heading type={'Title'} component={'Page'}>
              <AssetContainer>
                <Four />
              </AssetContainer>
              스터디 팀원 모집 공고 제목
            </Heading>
            <Box display={'column'} gap="24px">
              <BoxItem>
                <div className="box__title">제목</div>
                <div className="box__content">
                  <InputText
                    placeholder="제목을 기입해주세요."
                    maxLength={50}
                    currentLength={data.title?.length ?? 0}
                    {...register('title', { required: CREATE_RECRUITMENT.title, maxLength: 50 })}
                  />
                  {errors?.title?.message && <ErrorMsg>{errors?.title?.message}</ErrorMsg>}
                </div>
              </BoxItem>
              <BoxItem>
                <div className="box__title">상세 내용</div>
                <div className="box__content">
                  <TextArea
                    {...register('content')}
                    placeholder={'상세 내용을 기입해주세요.'}
                    maxLength={2000}
                    currentLength={data.content?.length ?? 0}
                  />
                </div>
              </BoxItem>
            </Box>
            <Spacing size={40} />
          </FormSection>
        </Stack>
        <ButtonBox>
          <div className="button__wrap">
            <Button type="button" scheme="normal" size="fullWidth">
              수정 취소
            </Button>
          </div>
          <div className="button__wrap">
            <Button scheme="secondary" size="fullWidth">
              수정 완료
            </Button>
          </div>
        </ButtonBox>
      </form>
    </RecruitmentContainer>
  );
};

export default ModifyRecruitmentPage;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(392px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const AssetContainer = styled.image`
  padding-right: 12px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 132px;
`;

const RecruitmentContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
`;

const ErrorMsg = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.color.negative};
`;

const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .box__title {
    font-size: 18px;
    line-height: 24px;
    color: #000000f2;
  }

  .box__content {
    font-size: 18px;
    line-height: 24px;
    color: #00000073;
    margin-top: 12px;
  }
`;

const Box = styled.div<{ display: 'row' | 'column'; gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.display};
  width: 100%;
  margin-top: 24px;

  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;

const Divider = styled.div`
  height: 12px;
  background: #f2f3f3;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;

  .button__wrap {
    display: flex;
    width: 100%;
  }
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;

  /* 형제 요소일 경우 margin-top 적용 */
  & ~ & {
    margin-top: 20px;
  }
`;
