import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { One, Two, Three, Four } from '@/Assets';

// components
import Heading from '@/Components/Heading';
import Spacing from '@/Components/Spacing';
import Button from '@/Components/Common/Button';
import { TextArea } from '@/Components/Textarea';
import InputText from '@/Components/Common/InputText/index';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import { EndDate } from '@/Components/Calendar/EndDate';
import CustomSelect from '@/Components/Selectbox/CustomSelect';
import { Stack } from '@/Components/Common/Stack';

import { Stack as StackType } from '@/Types/study';

import { CREATE_RECRUITMENT } from '@/Constants/messages';
import { RecruitmentForm } from '@/Types/study';
import { APPLICATION_CNT, CONTACT, POSITION } from '@/Shared/study';

import { getPeriod } from '@/utils/date';
import StackModal from '@/Components/Modal/StackModal';
import { useSelectDefaultValue } from '@/Hooks/recruitments/useSelectDefaultValue';
import { LabelForm } from '@/Components/Common/LabelForm';
import { FormSection } from '@/Components/Common/FormSection';
import { LabelText } from '@/Components/Common/LabelText';
import { useStack } from '@/Hooks/useStack';

const DEF_STACK_PLACEHOLDER = 'ex. Typescript';

export interface TempSaved extends Omit<RecruitmentForm, 'stackIds'> {
  stackIds: StackType[];
}

export interface ModifyRecruitmentPageProps {
  recruitmentDetail: any; // { recruitment: TempSaved; study: RecruitmentDetail['study'] };
  mutate: any;
}

const ModifyRecruitmentPage = ({ recruitmentDetail, mutate }: ModifyRecruitmentPageProps) => {
  // 스택 모달 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleSelectedStacks, content, selectedStacks, setSelectedStacks } = useStack(DEF_STACK_PLACEHOLDER);

  const getDefVal = useSelectDefaultValue('api', recruitmentDetail?.recruitment);

  const getDefStackVal = (formKey: 'stackIds') => {
    if (!recruitmentDetail || !recruitmentDetail?.recruitment[formKey]) return;
    handleSelectedStacks(recruitmentDetail?.recruitment[formKey]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDefStackVal('stackIds');
  }, []);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<TempSaved>({
    defaultValues: recruitmentDetail.recruitment,
  });
  const data = watch();

  const studyDetail = recruitmentDetail?.study;

  const onSubmit = (data: TempSaved) => {
    if (!selectedStacks || selectedStacks?.length === 0) {
      setSelectedStacks([]);
      return;
    }
    console.log(data);
    mutate({
      ...data,
      positionIds: data?.positionIds.map(({ value }) => Number(value)),
      stackIds: selectedStacks.map((stack) => stack.id),
    });
  };

  return (
    <RecruitmentContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading type={'Head'} component={'Page'}>
          스터디 팀원 모집하기
        </Heading>
        <Spacing size={40} />
        <Stack divider={<Divider />}>
          <FormSection icon={<One />} title="스터디 모집 공고">
            <Grid>
              <LabelForm name="applicantCount" errors={errors}>
                <Controller
                  control={control}
                  name="applicantCount"
                  rules={{ required: CREATE_RECRUITMENT.applicantCount }}
                  render={({ field }) => (
                    <CustomSelect
                      label="모집 인원"
                      placeholder="ex) 5명"
                      defaultValue={getDefVal('applicantCount')}
                      values={APPLICATION_CNT}
                      {...field}
                    />
                  )}
                />
              </LabelForm>
              <LabelForm name="applicantCount" label="모집 마감일" errors={errors}>
                <CalendarButton>
                  <Controller
                    control={control}
                    name="recruitmentEndDateTime"
                    rules={{ required: CREATE_RECRUITMENT.recruitmentEndDateTime }}
                    render={({ field }) => (
                      <EndDate {...field} defaultValue={getDefVal('recruitmentEndDateTime') as string} />
                    )}
                  />
                </CalendarButton>
              </LabelForm>
              <LabelForm name="positionIds" errors={errors}>
                <Controller
                  control={control}
                  name="positionIds"
                  rules={{ required: CREATE_RECRUITMENT.positionIds }}
                  render={({ field }) => (
                    <CustomSelect
                      label="포지션"
                      placeholder="포지션"
                      defaultValue={getDefVal('positionIds')}
                      values={POSITION}
                      isMulti
                      {...field}
                    />
                  )}
                />
              </LabelForm>
              <LabelForm label="기술 스택">
                <InputText
                  onClick={() => setIsOpen(!isOpen)}
                  placeholder={DEF_STACK_PLACEHOLDER}
                  value={content === DEF_STACK_PLACEHOLDER ? null : content}
                />
                {isOpen && (
                  <StackModal
                    handleModal={setIsOpen}
                    initialSelectedStacks={selectedStacks ?? []}
                    handleSelectedStacks={handleSelectedStacks}
                  />
                )}
                {selectedStacks?.length === 0 && <ErrorMsg>{'스택을 선택해주세요'}</ErrorMsg>}
              </LabelForm>
              <LabelForm errors={errors} name="contact">
                <Controller
                  control={control}
                  name="contact"
                  rules={{ required: CREATE_RECRUITMENT.contact }}
                  render={({ field }) => (
                    <CustomSelect
                      label="연락방법"
                      placeholder="연락방법"
                      defaultValue={getDefVal('contact')}
                      values={CONTACT}
                      {...field}
                    />
                  )}
                />
              </LabelForm>
              <LabelForm label="연결 url" errors={errors}>
                <InputText
                  placeholder="ex) 오픈 카카오톡 링크"
                  defaultValue={getDefVal('callUrl') as string}
                  {...register('callUrl', { required: CREATE_RECRUITMENT.contact })}
                />
              </LabelForm>
            </Grid>
          </FormSection>
          <FormSection icon={<Two />} title="스터디 진행 관련">
            <Box display="row" gap="24px">
              <LabelText label="진행 방식" text={studyDetail?.way} />
              <LabelText label="진행 플랫폼" text={studyDetail?.platform} />
              <LabelText label="진행 기간" text={getPeriod(studyDetail?.startDateTime, studyDetail?.endDateTime)} />
            </Box>
          </FormSection>
          <FormSection icon={<Three />} title="스터디 기본 구성">
            <Box display="row" gap="24px">
              <LabelText label="스터디 제목" text={studyDetail?.title} />
              <LabelText label="카테고리" text={studyDetail?.category?.name} />
              <LabelText label="스터디 최대 인원" text={studyDetail?.participantLimit} />
            </Box>
          </FormSection>
          <FormSection icon={<Four />} title="스터디 팀원 모집 공고 제목">
            <Box display="column" gap="24px">
              <InputText
                label="제목"
                placeholder="제목을 기입해주세요."
                maxLength={50}
                currentLength={data.title?.length ?? 0}
                {...register('title', { required: CREATE_RECRUITMENT.title, maxLength: 50 })}
              />
              {errors?.title?.message && <ErrorMsg>{errors?.title?.message}</ErrorMsg>}
              <TextArea
                label="상세 내용"
                placeholder={'상세 내용을 기입해주세요.'}
                maxLength={2000}
                currentLength={data.content?.length ?? 0}
                {...register('content')}
              />
            </Box>
          </FormSection>
        </Stack>
        <ButtonBox>
          <div className="button__wrap">
            <Button type="button" scheme="normal" size="fullWidth" onClick={() => navigate(-1)}>
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

const RecruitmentContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
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

export const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.color.negative};
`;
