import { One, Three, Two } from '@/Assets';
import { ProgressPeriod } from '@/Components/Calendar/ProgressPeriod';
import Button from '@/Components/Common/Button';
import InputText from '@/Components/Common/InputText';
import { LabelForm } from '@/Components/Common/LabelForm';
import { Stack } from '@/Components/Common/Stack';
import Heading from '@/Components/Heading';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import CustomSelect from '@/Components/Selectbox/CustomSelect';
import { SelectBox } from '@/Components/Selectbox/SelectBox';
import {
  CATEGORIES_OPTION,
  CATEGORY,
  PLATFORM,
  PLATFORM_OPTIONS,
  PROGRESS_METHOD,
  PROGRESS_METHODS_OPTIONS,
} from '@/Shared/study';
import { DateRange } from '@/Types/atoms';
import { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

interface StudyCreateForm {
  title: string;
  category: string;
  memberLimit: number;
  position: string;
  progressMethod: string;
  platform: string;
  platformUrl: string;
  progressPeriod: DateRange;
}

const memberLimit = Array(10)
  .fill(void 0)
  .map((_, i) => ({ value: i + 1, label: `${i + 1}` }));

export default () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<StudyCreateForm>();

  const data = watch();

  return (
    <PageWrapper>
      <Form
        onSubmit={handleSubmit((a) => {
          console.log(a);
        })}
      >
        <Stack divider={<Divider />} gap={24}>
          <FormSection icon={<One />} header="스터디 제목">
            <Labeled label="제목" error={errors.title?.message}>
              <InputText
                placeholder="제목을 기입해주세요."
                maxLength={50}
                currentLength={data.title?.length ?? 0}
                {...register('title', { required: '제목을 기입해주세요.', maxLength: 50 })}
              />
            </Labeled>
          </FormSection>
          <FormSection icon={<Two />} header="스터디 기본 구성">
            <LabelForm<StudyCreateForm> name="category" errors={errors}>
              <Controller
                control={control}
                name="category"
                rules={{ required: '카테고리를 정해주세요.' }}
                render={({ field }) => (
                  <CustomSelect
                    label="카테고리"
                    placeholder="ex) 코딩테스트 스터디"
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
                  <CustomSelect label="스터디 최대 인원" placeholder="ex) 5명" values={memberLimit} {...field} />
                )}
              />
            </LabelForm>
          </FormSection>
          <FormSection icon={<Three />} header="스터디 진행 관련">
            <LabelForm<StudyCreateForm> name="progressMethod" errors={errors}>
              <Controller
                control={control}
                name="progressMethod"
                rules={{ required: '진행방식을 정해주세요.' }}
                render={({ field }) => (
                  <CustomSelect
                    label="진행 방식"
                    placeholder="ex) 온/오프라인"
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
                  <CustomSelect label="진행 플랫폼" placeholder="ex) gather" values={PLATFORM_OPTIONS} {...field} />
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
          </FormSection>
        </Stack>
        <Buttons>
          <Button>임시저장</Button>
          <Button scheme="secondary">생성</Button>
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

const Labeled = ({ label, children, error }: { label?: string; error?: string; children?: ReactNode }) => {
  return (
    <LabeledInner>
      <Label>{label}</Label>
      <LabeledInnerBox>
        {children}
        <ErrorText>{error}</ErrorText>
      </LabeledInnerBox>
    </LabeledInner>
  );
};

const LabeledInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Label = styled.label`
  color: #000000f2;
  font-family: Pretendard700;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`;

const LabeledInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ErrorText = styled.span`
  display: flex;
  align-items: center;
  padding: 4px 0px;
  color: #fd3d51;
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
  background: #f2f3f3;
`;
