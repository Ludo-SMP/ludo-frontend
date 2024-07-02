import { ReactNode, useEffect } from 'react';
import { One, Three, Two } from '@/Assets';
import { ProgressPeriod } from '@/Components/Calendar/ProgressPeriod';
import InputText from '@/Components/Common/InputText';
import { ErrorMsg, LabelForm } from '@/Components/Common/LabelForm';
import { Stack } from '@/Components/Common/Stack';
import ErrorBoundary from '@/Components/ErrorBoundary';
import { HeaderWithLogo } from '@/Components/Header/HeaderWithLogo';
import Heading from '@/Components/Heading';
import { AttendanceModal } from '@/Components/Modal/AttendanceModal';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';

import {
  APPLICATION_CNT,
  CATEGORIES_OPTION,
  CATEGORY,
  NEW_APPLICATION_CNT,
  PLATFORM,
  PLATFORM_OPTIONS,
  POSITION,
  PROGRESS_METHOD,
  PROGRESS_METHODS_OPTIONS,
  generateSelectOption,
  NEW_POSITION,
} from '@/Shared/study';
import { DateRange } from '@/Types/atoms';
import { Platform, ProgressMethod, StudyCreate, StudyDetail } from '@/Types/study';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useModalStore } from '@/store/modal';
import { useAttendanceModal } from '@/Hooks/useAttendanceModal';
import { CreateButtons } from './CreateButtons';
import { EditButtons } from './EditButtons';
import { Grid } from '@/Components/Common/Grid';
import { media } from '@/Styles/theme';
import CustomSelect from '@/Components/CustomSelect/CustomSelect';

export interface StudyCreateForm {
  title: string;
  category: number;
  participantLimit: number;
  positionId: number;
  way: ProgressMethod;
  platform: Platform;
  platformUrl: string;
  startDateTime: string;
  endDateTime: string;
  progressPeriod: DateRange;
  attendanceDay: number[];
}

interface StudyFormLayoutProps {
  initValue?: Partial<StudyCreateForm> | null;
  query?: UseQueryResult<StudyDetail, Error>;
  mutation: UseMutationResult<AxiosResponse, Error, StudyCreate>;
  type?: 'CREATE' | 'EDIT';
}

export default ({ initValue, mutation, type }: StudyFormLayoutProps) => {
  const {
    title,
    category,
    participantLimit,
    way,
    platform,
    platformUrl,
    startDateTime,
    endDateTime,
    positionId,
    attendanceDay: defAttendanceDay,
  } = initValue ?? {};

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<StudyCreateForm>({
    defaultValues: initValue,
  });

  const { isModalOpen, openModal } = useModalStore();

  const {
    savedAttendanceDay,
    tmpAttendanceDay,
    content,
    toggleAttendanceDay,
    isValidAttendanceDay,
    saveAttendanceDay,
    resetAttendanceDay,
    initAttendanceModal,
  } = useAttendanceModal();

  useEffect(() => {
    initAttendanceModal(defAttendanceDay);
  }, []);

  const { mutate, isError } = mutation;

  const formData = watch();
  const isOffline = formData?.way === 'OFFLINE';

  if (isError) return <ErrorBoundary />;

  return (
    <>
      <HeaderWithLogo title={`스터디 ${type === 'CREATE' ? '생성' : '수정'}하기`} />
      <PageWrapper>
        <Form
          onSubmit={handleSubmit(
            ({ title, category, participantLimit, positionId, way, platform, platformUrl, progressPeriod }) => {
              if (!isValidAttendanceDay()) return;
              mutate({
                title,
                categoryId: category,
                positionId,
                way,
                platform: platform,
                participantLimit,
                startDateTime: progressPeriod[0].toISOString(),
                endDateTime: progressPeriod[1].toISOString(),
                attendanceDay: savedAttendanceDay?.map((day) => Number(day.id)),
                platformUrl,
              });
            },
            isValidAttendanceDay,
          )}
        >
          <Stack divider={<Divider />} gap={24}>
            <FormSection icon={<One />} header="스터디 제목">
              <LabelForm<StudyCreateForm> label="제목" name="title" errors={errors}>
                <InputText
                  placeholder="제목을 기입해주세요."
                  defaultValue={title}
                  maxLength={50}
                  currentLength={formData.title?.length ?? 0}
                  {...register('title', { required: '제목을 기입해주세요.', maxLength: 50 })}
                />
              </LabelForm>
            </FormSection>
            <FormSection icon={<Two />} header="스터디 기본 구성">
              <Grid>
                <LabelForm<StudyCreateForm> name="category" errors={errors}>
                  <Controller
                    control={control}
                    name="category"
                    rules={{ required: '카테고리를 정해주세요.' }}
                    render={({ field }) => (
                      <CustomSelect
                        label="카테고리"
                        placeholder="ex) 코딩테스트 스터디"
                        defaultValue={generateSelectOption({ category: CATEGORY[category] })}
                        values={CATEGORIES_OPTION}
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
                <LabelForm<StudyCreateForm> name="participantLimit" errors={errors}>
                  <Controller
                    control={control}
                    name="participantLimit"
                    rules={{ required: '스터디 최대 인원을 정해주세요.' }}
                    render={({ field }) => (
                      <CustomSelect
                        label="스터디 최대 인원"
                        placeholder="ex) 5명"
                        defaultValue={generateSelectOption({
                          participantLimit: NEW_APPLICATION_CNT[participantLimit],
                        })}
                        values={APPLICATION_CNT}
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
                <LabelForm<StudyCreateForm> name="positionId" errors={errors}>
                  <Controller
                    control={control}
                    name="positionId"
                    rules={{ required: '포지션을 정해주세요' }}
                    render={({ field }) => (
                      <CustomSelect
                        label="나의 포지션"
                        placeholder="ex) 프론트엔드"
                        defaultValue={generateSelectOption({ positionId: NEW_POSITION[positionId] })}
                        values={POSITION}
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
              </Grid>
            </FormSection>
            <FormSection icon={<Three />} header="스터디 진행 관련">
              <Grid>
                <LabelForm<StudyCreateForm> name="way" errors={errors}>
                  <Controller
                    control={control}
                    name="way"
                    rules={{ required: '진행방식을 정해주세요.' }}
                    render={({ field }) => (
                      <CustomSelect
                        label="진행 방식"
                        placeholder="ex) 온/오프라인"
                        defaultValue={generateSelectOption({ way: PROGRESS_METHOD[way] })}
                        values={PROGRESS_METHODS_OPTIONS}
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
                <LabelForm<StudyCreateForm> name="platform" errors={errors}>
                  <Controller
                    control={control}
                    name="platform"
                    rules={{ required: !isOffline && '진행할 플랫폼을 정해 주세요.' }}
                    render={({ field }) => (
                      <CustomSelect
                        label="진행 플랫폼"
                        placeholder="ex) gather"
                        defaultValue={generateSelectOption({ platform: PLATFORM[platform] })}
                        values={PLATFORM_OPTIONS}
                        isDisabled={isOffline}
                        {...field}
                      />
                    )}
                  />
                </LabelForm>
                <LabelForm<StudyCreateForm>
                  name="platformUrl"
                  label="진행 플랫폼 URL"
                  errors={errors}
                  disabled={isOffline}
                >
                  <InputText
                    placeholder="ex) gather 주소"
                    disabled={isOffline}
                    defaultValue={platformUrl}
                    {...register('platformUrl', {
                      required: !isOffline && '진행 플랫폼 URL을 입력해주세요',
                    })}
                  />
                </LabelForm>
              </Grid>
              <Grid col={2}>
                <LabelForm<StudyCreateForm> label="진행 기간" name="progressPeriod" errors={errors}>
                  <CalendarButton>
                    <Controller
                      control={control}
                      name="progressPeriod"
                      rules={{ required: '스터디 진행 기간을 정해 주세요.' }}
                      render={({ field }) => <ProgressPeriod {...field} defaultValue={[startDateTime, endDateTime]} />}
                    />
                  </CalendarButton>
                </LabelForm>

                <LabelForm<StudyCreateForm> label="출석일">
                  <InputText
                    onClick={openModal}
                    placeholder={'ex) 화요일, 목요일'}
                    value={content === 'ex) 화요일, 목요일' ? null : content}
                  />
                  {isModalOpen && (
                    <AttendanceModal
                      attendanceDay={tmpAttendanceDay}
                      toggleAttendanceDay={toggleAttendanceDay}
                      saveAttendanceDay={saveAttendanceDay}
                      resetAttendanceDay={resetAttendanceDay}
                    />
                  )}
                  {savedAttendanceDay?.length === 0 && <ErrorMsg>{'출석일을 선택해주세요'}</ErrorMsg>}
                </LabelForm>
              </Grid>
            </FormSection>
          </Stack>
          {type === 'CREATE' ? (
            <CreateButtons
              savedForm={{ ...formData, attendanceDay: savedAttendanceDay?.map((day) => Number(day.id)) }}
            />
          ) : (
            <EditButtons />
          )}
        </Form>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 40px auto 80px auto;
  gap: 32px;
`;

const Form = styled.form`
  ${media.tablet} {
    margin: 24px;
  }

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FormSection = ({ icon, header, children }: { icon?: ReactNode; header?: ReactNode; children?: ReactNode }) => {
  return (
    <FormSectionInner>
      <FormSectionInnerHeader>
        {icon}
        <Heading component="Input" type="Title">
          {header}
        </Heading>
      </FormSectionInnerHeader>
      <FormSectionInnerBody>{children}</FormSectionInnerBody>
    </FormSectionInner>
  );
};

const FormSectionInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormSectionInnerHeader = styled.h3`
  color: #000000f2;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FormSectionInnerBody = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  & > * {
    flex: 1;
  }
`;

const Divider = styled.div`
  height: 12px;
  background: ${({ theme }) => theme.color.strokeDividerThick};
`;
