import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { One, Two, Three, Four } from '@/Assets';

// components
import Spacing from '@/Components/Spacing';
import Button from '@/Components/Common/Button';
import { TextArea } from '@/Components/Textarea';
import InputText from '@/Components/Common/InputText/index';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import { EndDate } from '@/Components/Calendar/EndDate';
import CustomSelect from '@/Components/CustomSelect/CustomSelect';
import { Stack } from '@/Components/Common/Stack';

import { RecruitmentDetail, RecruitFormWithSelect } from '@/Types/study';

import { CREATE_RECRUITMENT } from '@/Constants/messages';
import { APPLICATION_CNT, CONTACT, POSITION } from '@/Shared/study';

import { getPeriod } from '@/utils/date';
import { StackModal } from '@/Components/Modal/StackModal';
import { useSelectDefaultValue } from '@/Hooks/recruitments/useSelectDefaultValue';
import { LabelForm } from '@/Components/Common/LabelForm';
import { FormSection } from '@/Components/Common/FormSection';
import { LabelText } from '@/Components/Common/LabelText';
import { useStack } from '@/Hooks/useStack';
import { Box, ButtonBox, Divider, Form, Grid, RecruitmentContainer } from '../CreateRecruitment/page';
import { HeaderWithLogo } from '@/Components/Header/HeaderWithLogo';

const DEF_STACK_PLACEHOLDER = 'ex. Typescript';

export interface ModifyRecruitmentPageProps {
  recruitmentDetail: { recruitment: RecruitFormWithSelect; study: RecruitmentDetail['study'] };
  mutate: any;
}

const EditRecruitmentPage = ({ recruitmentDetail, mutate }: ModifyRecruitmentPageProps) => {
  // 스택 모달 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleSelectedStacks, content, selectedStacks, setSelectedStacks } = useStack(DEF_STACK_PLACEHOLDER);

  const parseSelectValue = useSelectDefaultValue('api', recruitmentDetail?.recruitment);

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
  } = useForm<RecruitFormWithSelect>({
    defaultValues: recruitmentDetail.recruitment,
  });
  const data = watch();

  const studyDetail = recruitmentDetail?.study;

  const isValidStack = (): boolean => {
    if (!selectedStacks || selectedStacks?.length === 0) {
      setSelectedStacks([]);
      return false;
    }
    return true;
  };

  const onSubmit = (data: RecruitFormWithSelect) => {
    if (!isValidStack()) return;

    mutate({
      applicationCount: data.applicantCount.value,
      contact: data.contact.value,
      positionIds: data?.positionIds.map(({ value }) => Number(value)),
      stackIds: selectedStacks.map((stack) => stack.id),
    });
  };

  const onInvalid = () => {
    isValidStack();
  };

  return (
    <>
      <HeaderWithLogo title="스터디 팀원 모집하기" />
      <RecruitmentContainer>
        <Form onSubmit={handleSubmit(onSubmit, onInvalid)}>
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
                        defaultValue={parseSelectValue('applicantCount')}
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
                        <EndDate {...field} defaultValue={parseSelectValue('recruitmentEndDateTime') as string} />
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
                        defaultValue={parseSelectValue('positionIds')}
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
                        defaultValue={parseSelectValue('contact')}
                        values={CONTACT}
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
                <LabelForm label="연결 url" name="callUrl" errors={errors}>
                  <InputText
                    placeholder="ex) 오픈 카카오톡 링크"
                    defaultValue={parseSelectValue('callUrl') as string}
                    {...register('callUrl', { required: CREATE_RECRUITMENT.contact })}
                  />
                </LabelForm>
              </Grid>
            </FormSection>
            <FormSection icon={<Two />} title="스터디 진행 관련">
              <Box display="row" gap="24px">
                {/* TODO: InfoField 재사용 검토 */}
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
        </Form>
      </RecruitmentContainer>
    </>
  );
};

export default EditRecruitmentPage;

export const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.color.negative};
`;
