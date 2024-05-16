import { One, Three, Two } from '@/Assets';
import { ProgressPeriod } from '@/Components/Calendar/ProgressPeriod';
import Button from '@/Components/Common/Button';
import { Grid } from '@/Components/Common/Grid';
import InputText from '@/Components/Common/InputText';
import { LabelForm } from '@/Components/Common/LabelForm';
import { Stack } from '@/Components/Common/Stack';
import ErrorBoundary from '@/Components/ErrorBoundary';
import Heading from '@/Components/Heading';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import CustomSelect from '@/Components/Selectbox/CustomSelect';
import { useTempSaved } from '@/Hooks/useTempSaved';
import { CATEGORIES_OPTION, PLATFORM_OPTIONS, POSITIONS_OPTIONS, PROGRESS_METHODS_OPTIONS } from '@/Shared/study';
import { DateRange } from '@/Types/atoms';
import { Category, Platform, Position, ProgressMethod, StudyCreate, StudyDetail } from '@/Types/study';
import { saveTemporary } from '@/utils/temporarySavedUtils';
import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface StudyCreateForm {
  title: string;
  category: Category;
  memberLimit: number;
  position: Position;
  progressMethod: ProgressMethod;
  platform: Platform;
  platformUrl: string;
  progressPeriod: DateRange;
}

const memberLimit = Array(10)
  .fill(void 0)
  .map((_, i) => ({ value: i + 1, label: `${i + 1}` }));

interface StudyFormLayoutProps {
  query?: UseQueryResult<StudyDetail, Error>;
  mutation: UseMutationResult<AxiosResponse, Error, StudyCreate>;
}

export default ({ query, mutation }: StudyFormLayoutProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<StudyCreateForm>();

  const { savedKey, tempSaved } = useTempSaved<StudyCreateForm>();
  const navigate = useNavigate();

  const { mutate, isError } = mutation;

  const formData = watch();

  if (isError) return <ErrorBoundary />;

  return (
    <PageWrapper>
      <Form
        onSubmit={handleSubmit(({ title, category, memberLimit, position, progressMethod, platform, progressPeriod }) =>
          mutate({
            title,
            categoryId: category.id,
            positionId: position.id,
            way: progressMethod,
            platform,
            participantLimit: memberLimit,
            startDateTime: progressPeriod[0].toISOString(),
            endDateTime: progressPeriod[1].toISOString(),
          }),
        )}
      >
        <Stack divider={<Divider />} gap={24}>
          <FormSection icon={<One />} header="스터디 제목">
            <LabelForm<StudyCreateForm> label="제목" name="title" errors={errors}>
              <InputText
                placeholder="제목을 기입해주세요."
                defaultValue={query?.data?.study?.title}
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
                      defaultValue={query?.data?.study?.category}
                      values={CATEGORIES_OPTION}
                      {...field}
                    />
                  )}
                />
              </LabelForm>
              <LabelForm<StudyCreateForm> name="memberLimit" errors={errors}>
                <Controller
                  control={control}
                  name="memberLimit"
                  rules={{ required: '스터디 최대 인원을 정해주세요.' }}
                  render={({ field }) => (
                    <CustomSelect
                      label="스터디 최대 인원"
                      placeholder="ex) 5명"
                      defaultValue={query?.data?.study?.participantsLimit}
                      values={memberLimit}
                      {...field}
                    />
                  )}
                />
              </LabelForm>
              <LabelForm<StudyCreateForm> name="position" errors={errors}>
                <Controller
                  control={control}
                  name="position"
                  rules={{ required: '포지션을 정해주세요' }}
                  render={({ field }) => (
                    <CustomSelect
                      label="나의 포지션"
                      placeholder="ex) 프론트엔드"
                      values={POSITIONS_OPTIONS}
                      {...field}
                    />
                  )}
                />
              </LabelForm>
            </Grid>
          </FormSection>
          <FormSection icon={<Three />} header="스터디 진행 관련">
            <Grid>
              <LabelForm<StudyCreateForm> name="progressMethod" errors={errors}>
                <Controller
                  control={control}
                  name="progressMethod"
                  rules={{ required: '진행방식을 정해주세요.' }}
                  render={({ field }) => (
                    <CustomSelect
                      label="진행 방식"
                      placeholder="ex) 온/오프라인"
                      defaultValue={query?.data?.study?.way}
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
                  rules={{ required: '진행할 플랫폼을 정해 주세요.' }}
                  render={({ field }) => (
                    <CustomSelect
                      label="진행 플랫폼"
                      placeholder="ex) gather"
                      defaultValue={query?.data?.study?.platform}
                      values={PLATFORM_OPTIONS}
                      {...field}
                    />
                  )}
                />
              </LabelForm>
              <LabelForm<StudyCreateForm> name="platformUrl" label="진행 플랫폼 URL" errors={errors}>
                <InputText
                  placeholder="ex) gather 주소"
                  {...register('platformUrl', { required: '진행 플랫폼 URL을 입력해주세요' })}
                />
              </LabelForm>
              <LabelForm<StudyCreateForm> label="진행 기간" name="progressPeriod" errors={errors}>
                <CalendarButton>
                  <Controller
                    control={control}
                    name="progressPeriod"
                    rules={{ required: '스터디 진행 기간을 정해 주세요.' }}
                    render={({ field }) => <ProgressPeriod {...field} />}
                  />
                </CalendarButton>
              </LabelForm>
            </Grid>
          </FormSection>
        </Stack>
        <Buttons>
          <Button
            type="button"
            onClick={() => {
              saveTemporary(savedKey, 1, 'STUDY', formData);
              navigate('/mypage');
            }}
          >
            임시저장
          </Button>
          <Button scheme="secondary">등록하기</Button>
        </Buttons>
      </Form>
    </PageWrapper>
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
  & > * {
    flex: 1;
  }
`;

const Buttons = styled.div`
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