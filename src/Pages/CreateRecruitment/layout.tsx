import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import styled, { css } from 'styled-components';
import { MemberImage, StudyInfo } from '@/Assets';

import { TextArea } from '@/Components/Textarea';
import InputText from '@/Components/Common/InputText/index';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import { EndDate } from '@/Components/Calendar/EndDate';
import CustomSelect from '@/Components/CustomSelect/CustomSelect';
import { Stack } from '@/Components/Common/Stack';
import { RecruitFormWithSelect, RecruitmentForm } from '@/Types/study';

import { CREATE_RECRUITMENT } from '@/Constants/messages';
import { NEW_APPLICATION_CNT, NEW_CONTACT, NEW_POSITION } from '@/Shared/study';
import { getDayById, getPeriod } from '@/utils/date';
import { StackModal } from '@/Components/Modal/StackModal';

import { ErrorMsg, LabelForm } from '@/Components/Common/LabelForm';
import { FormSection } from '@/Components/Common/FormSection';
import { LabelText } from '@/Components/Common/LabelText';
import { useStack } from '@/Hooks/useStack';
import { media } from '@/Styles/theme';
import { HeaderWithLogo } from '@/Components/Header/HeaderWithLogo';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import { makeObjArr } from '@/utils/selectUtil';
import { RecruitmentProps } from '../EditRecruitment';
import { UseMutateFunction } from '@tanstack/react-query';
import { CreateButtons } from '../Studies/CreateButtons';
import { EditButtons } from '../Studies/EditButtons';
import { useParams } from 'react-router-dom';

// layout

export const selectObj = makeObjArr('value', 'label');

export interface EditRecruitmentPageProps {
  recruitment?: RecruitmentProps['recruitment'];
  study: RecruitmentProps['study'];
  mutate: UseMutateFunction<unknown, Error, RecruitmentForm>;
  initValue: any;
  type: 'CREATE' | 'EDIT';
}

// initValue: api / storage
const Layout = ({ type, mutate, study, initValue }: any) => {
  const studyId = Number(useParams()?.studyId);

  const { applicantLimit, callUrl, contact, positionIds, recruitmentEndDateTime, stackIds } = initValue ?? {};

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleSelectedStacks, content, selectedStacks, isValidStack } = useStack('ex. Typescript');

  useEffect(function initStackIds() {
    stackIds && handleSelectedStacks(stackIds);
  }, []);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RecruitFormWithSelect>({
    defaultValues: initValue,
  });

  const data = watch();

  const parsedPosition = ((positionIds ?? []) as any[])?.reduce((acc, id) => {
    return { ...acc, [Number(id)]: NEW_POSITION[Number(id)] };
  }, {});

  return (
    <>
      <HeaderWithLogo title="스터디 팀원 모집하기" />
      <RecruitmentContainer>
        <Form
          onSubmit={handleSubmit(() => {
            if (!isValidStack()) return;
            mutate({
              ...data,
              applicantLimit: Number(data.applicantLimit),
              contact: data.contact,
              positionIds: data.positionIds.map((value) => Number(value)),
              stackIds: selectedStacks.map((stack) => stack.id),
            });
          }, isValidStack)}
        >
          <Stack divider={<Divider />} gap={24}>
            <FormSection title="내가 작성한 스터디 정보">
              <Grid>
                <LabelText label="카테고리" text={study?.category?.name} />
                <LabelText label="진행 방식" text={study?.way} />
                <LabelText label="진행 플랫폼" text={study?.platform} />
                <LabelText label="진행 기간" text={getPeriod(study?.startDateTime, study?.endDateTime)} />
                <LabelText label="진행 요일" text={getDayById(study?.attendanceDay)} />
              </Grid>
            </FormSection>
            <FormSection icon={<MemberImage />} title="스터디 모집 안내">
              <Grid>
                <LabelForm name="applicantLimit" errors={errors}>
                  <Controller
                    control={control}
                    name="applicantLimit"
                    rules={{ required: CREATE_RECRUITMENT.applicantLimit }}
                    render={({ field }) => (
                      <CustomSelect
                        label="모집 인원"
                        placeholder="ex) 5명"
                        defaultValue={selectObj({ applicantLimit: NEW_APPLICATION_CNT[applicantLimit] }) as any}
                        values={selectObj(NEW_APPLICATION_CNT) as any}
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
                <LabelForm name="recruitmentEndDateTime" label="모집 마감일" errors={errors}>
                  <CalendarButton>
                    <Controller
                      control={control}
                      name="recruitmentEndDateTime"
                      rules={{ required: CREATE_RECRUITMENT.recruitmentEndDateTime }}
                      render={({ field }) => <EndDate {...field} defaultValue={recruitmentEndDateTime as string} />}
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
                        defaultValue={selectObj(parsedPosition) as any}
                        values={selectObj(NEW_POSITION) as any}
                        isMulti
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
                <LabelForm label="기술 스택">
                  <InputText
                    onClick={() => setIsOpen(!isOpen)}
                    placeholder={'ex. Typescript'}
                    value={content === 'ex. Typescript' ? null : content}
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
                        defaultValue={selectObj({ contact: NEW_CONTACT[contact] }) as any}
                        values={selectObj(NEW_CONTACT) as any}
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
                <LabelForm label="연결 url" name="callUrl" errors={errors}>
                  <InputText
                    placeholder="ex) 오픈 카카오톡 링크"
                    defaultValue={callUrl as string}
                    {...register('callUrl', { required: CREATE_RECRUITMENT.contact })}
                  />
                </LabelForm>
              </Grid>
            </FormSection>
            <FormSection icon={<StudyInfo />} title="스터디 기본 구성">
              <Box $display="row" $gap="24px">
                <LabelText label="스터디 제목" text={study?.title} />
                <LabelText label="스터디 최대 인원" text={study?.participantLimit} />
              </Box>
              <RowDivider margin={24} />
              <Box $display="column" $gap="24px" $marginBottom>
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
          {type === 'CREATE' ? (
            <CreateButtons type="RECRUITMENT" formData={{ ...data, stackIds: selectedStacks }} studyId={studyId} />
          ) : (
            <EditButtons />
          )}
        </Form>
      </RecruitmentContainer>
    </>
  );
};

export default Layout;

export const Form = styled.form`
  ${media.tablet} {
    margin: 24px;
  }
  margin-top: 24px;
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
  padding-bottom: 40px;
`;

export const Box = styled.div<{ $display: 'row' | 'column'; $gap?: string; $marginBottom?: boolean }>`
  ${media.tablet} {
    flex-direction: column;
  }
  display: flex;
  width: 100%;
  flex-direction: ${(props) => props.$display};
  margin: ${({ $marginBottom }) => ($marginBottom ? '0 0 24px' : '24px 0 0')};

  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap};
    `}
`;

export const Divider = styled.div<{ $height?: string | number; $width?: string | number; $dividerColor?: string }>`
  height: ${({ $height }) => ($height ? (typeof $height === 'number' ? `${$height}px` : `${$height}`) : '12px')};
  background: ${({ theme, $dividerColor }) => ($dividerColor ? $dividerColor : theme.color.strokeDividerThick)};
  max-width: ${({ $width }) => ($width ? (typeof $width === 'number' ? `${$width}px` : `${$width}`) : '100%')};
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  & > * {
    flex: 1;
  }
`;
