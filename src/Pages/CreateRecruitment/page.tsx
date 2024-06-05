import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { One, Two, Three, Four, Loading } from '@/Assets';

// components
import Spacing from '@/Components/Spacing';
import Button from '@/Components/Common/Button';
import { TextArea } from '@/Components/Textarea';
import InputText from '@/Components/Common/InputText/index';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import { EndDate } from '@/Components/Calendar/EndDate';
import CustomSelect from '@/Components/CustomSelect/CustomSelect';
import { Stack } from '@/Components/Common/Stack';

import { RecruitFormWithSelect } from '@/Types/study';

import { CREATE_RECRUITMENT } from '@/Constants/messages';
import { APPLICATION_CNT, CONTACT, POSITION } from '@/Shared/study';
import { useCreateRecruitmentMutation } from '@/Hooks/recruitments/useCreateRecruitment';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';
import { getPeriod } from '@/utils/date';
import { useModalStore } from '@/store/modal';
import Modal from '@/Components/Common/Modal';
import { StackModal } from '@/Components/Modal/StackModal';
import { useSelectDefaultValue } from '@/Hooks/recruitments/useSelectDefaultValue';
import { saveTemporary } from '@/utils/temporarySavedUtils';
import { ErrorMsg, LabelForm } from '@/Components/Common/LabelForm';
import { FormSection } from '@/Components/Common/FormSection';
import { LabelText } from '@/Components/Common/LabelText';
import { useTempSaved } from '@/Hooks/useTempSaved';
import { useStack } from '@/Hooks/useStack';
import { media } from '@/Styles/theme';

const DEF_STACK_PLACEHOLDER = 'ex. Typescript';

const CreateRecruitmentPage = () => {
  const studyId = Number(useParams().studyId);
  const { isModalOpen, openModal, closeModal } = useModalStore();

  const { savedKey, tempSaved } = useTempSaved();

  // 스택 모달 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleSelectedStacks, content, selectedStacks, setSelectedStacks } = useStack(DEF_STACK_PLACEHOLDER);

  const parseSelectValue = useSelectDefaultValue('storage');

  // stackId 초기값 채우기
  const getDefStackVal = (formKey: 'stackIds') => {
    if (!tempSaved || !tempSaved[formKey]) return;

    handleSelectedStacks(tempSaved[formKey]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDefStackVal('stackIds');
  }, []);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RecruitFormWithSelect>({
    defaultValues: tempSaved,
  });
  const data = watch();

  const { mutate } = useCreateRecruitmentMutation(studyId);

  const { data: shortStudy, isLoading } = useStudyDetail(studyId);
  const studyDetail = shortStudy?.study;

  const isValidStack = (): boolean => {
    if (!selectedStacks || selectedStacks?.length === 0) {
      setSelectedStacks([]);
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (!isValidStack()) return;

    mutate({
      ...data,
      applicationCount: data.applicantCount.value,
      contact: data.contact.value,
      positionIds: data.positionIds.map(({ value }) => Number(value)),
      stackIds: selectedStacks.map((stack) => stack.id),
    });
  };

  const onInvalid = () => {
    isValidStack();
  };

  return (
    <RecruitmentContainer>
      {isModalOpen && (
        <Modal
          handleApprove={() => {
            closeModal();
            saveTemporary(savedKey, studyId, 'RECRUITMENT', { ...data, stackIds: selectedStacks });
          }}
          cancelBtnText="취소하기"
          title="작성 중인 스터디 생성 글을 임시 저장 하시겠습니까?"
          approveBtnText="확인하기"
        >
          임시 저장한 글은 ‘마이 페이지 {'>'} 임시 저장된 글’ 에서 확인하실 수 있습니다.
        </Modal>
      )}
      {isLoading ? (
        <Loading />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <Heading>스터디 팀원 모집하기</Heading>
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
              <Button type="button" onClick={openModal} scheme="normal" size="fullWidth">
                임시저장
              </Button>
            </div>
            <div className="button__wrap">
              <Button scheme="secondary" size="fullWidth">
                등록하기
              </Button>
            </div>
          </ButtonBox>
        </Form>
      )}
    </RecruitmentContainer>
  );
};

export default CreateRecruitmentPage;

const Heading = styled.h1`
  ${({ theme }) => theme.typo.PageHeadWeb};
  display: flex;
  align-items: center;
  font-family: 'Pretendard800';
`;

export const Form = styled.form`
  ${media.tablet} {
    margin: 24px;
  }
`;

export const Grid = styled.div`
  ${media.tablet} {
    display: flex;
    flex-direction: column;
  }

  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  margin-top: 24px;

  gap: 24px;
`;

export const RecruitmentContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
`;

export const Box = styled.div<{ display: 'row' | 'column'; gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.display};
  width: 100%;
  margin-top: 24px;

  ${media.tablet} {
    flex-direction: column;
  }

  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;

export const Divider = styled.div<{ height?: string | number; width?: string | number }>`
  height: ${({ height }) => (height ? (typeof height === 'number' ? `${height}px` : `${height}`) : '12px')};
  background: ${({ theme }) => theme.color.strokeDividerThick};
  max-width: ${({ width }) => (width ? (typeof width === 'number' ? `${width}px` : `${width}`) : '100%')};
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;

  .button__wrap {
    display: flex;
    width: 100%;
  }
`;
