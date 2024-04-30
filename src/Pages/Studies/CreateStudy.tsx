import { One, Three, Two } from '@/Assets';
import { ProgressPeriod } from '@/Components/Calendar/ProgressPeriod';
import Button from '@/Components/Common/Button';
import InputText from '@/Components/Common/InputText';
import { Stack } from '@/Components/Common/Stack';
import Heading from '@/Components/Heading';
import { CalendarButton } from '@/Components/Selectbox/CalendarButton';
import { SelectBox } from '@/Components/Selectbox/SelectBox';
import { CATEGORY, PLATFORM, PROGRESS_METHOD } from '@/Shared/study';
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

const memberLimit = Object.fromEntries(
  Array(10)
    .fill(void 0)
    .map((_, i) => [i + 1, `${i + 1}`]),
);

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
            <Labeled label="제목" error={errors.title?.type === 'required' && '제목을 기입해주세요.'}>
              <InputText
                placeholder="제목을 기입해주세요."
                maxLength={50}
                currentLength={data.title?.length ?? 0}
                {...register('title', { required: true, maxLength: 50 })}
              />
            </Labeled>
          </FormSection>
          <FormSection icon={<Two />} header="스터디 기본 구성">
            <Labeled label="카테고리" error={errors.category?.type === 'required' && '카테고리를 정해주세요.'}>
              <SelectBox
                values={CATEGORY}
                defaultValue="ex) 코딩테스트 스터디"
                {...register('category', { required: true })}
              />
            </Labeled>
            <Labeled
              label="스터디 최대 인원"
              error={errors.memberLimit?.type === 'required' && '스터디 최대 인원을 정해주세요.'}
            >
              <SelectBox values={memberLimit} defaultValue="ex) 5명" {...register('memberLimit', { required: true })} />
            </Labeled>
          </FormSection>
          <FormSection icon={<Three />} header="스터디 진행 관련">
            <Labeled label="진행 방식" error={errors.progressMethod?.type === 'required' && '진행방식을 정해주세요.'}>
              <SelectBox
                values={PROGRESS_METHOD}
                defaultValue="ex) 온/오프라인"
                {...register('category', { required: true })}
              />
            </Labeled>
            <Labeled label="진행 플랫폼" error={errors.platform?.type === 'required' && '카테고리를 정해주세요.'}>
              <SelectBox values={PLATFORM} defaultValue="ex) gather" {...register('platform', { required: true })} />
            </Labeled>
            <Labeled label="진행 기간" error={errors.category?.type === 'required' && '진행 기간을 정해주세요.'}>
              <CalendarButton>
                <Controller
                  control={control}
                  name="progressPeriod"
                  rules={{ required: '스터디 진행 기간을 정해 주세요' }}
                  render={({ field }) => <ProgressPeriod {...field} />}
                />
              </CalendarButton>
            </Labeled>
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

const Labeled = ({ label, children, error }: { label: string; error?: string; children?: ReactNode }) => {
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
