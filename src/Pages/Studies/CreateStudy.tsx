import { One, Three, Two } from '@/Assets';
import InputText from '@/Components/Common/InputText/iindex';
import { SelectBox } from '@/Components/Selectbox/SelectBox';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface StudyCreateForm {
  title: string;
  category: string;
  memberLimit: number;
  platform: string;
}

export default () => {
  const { register, handleSubmit, watch } = useForm<StudyCreateForm>();

  const data = watch();

  return (
    <Form onSubmit={handleSubmit((a) => {})}>
      <FormSection icon={<One />} header="스터디 제목">
        <Labeled label="제목">
          <InputText />
        </Labeled>
      </FormSection>
      <FormSection icon={<Two />} header="스터디 기본 구성">
        <SelectBox label="카테고리" values={{}} {...register('title')} />
        <SelectBox label="스터디 최대 인원" values={{}} {...register('memberLimit')} />
      </FormSection>
      <FormSection icon={<Three />} header="스터디 진행 관련">
        <SelectBox label="카테고리" values={{}} {...register('category')} />
        <SelectBox label="진행 플랫폼" values={{}} {...register('platform')} />
        <SelectBox label="진행 플랫폼" values={{}} {...register('platform')} />
      </FormSection>
      <Buttons>
        {/* 임시저장 */}
        <button onClick={() => console.log(data)}>임시저장</button>
        {/* 생성 */}
        <input type="submit" />
      </Buttons>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Labeled = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <label>
      {label}
      {children}
    </label>
  );
};

const FormSection = ({ icon, header, children }: { icon?: ReactNode; header?: ReactNode; children?: ReactNode }) => {
  return (
    <FormSectionInner>
      <FormSectionInnerHeader>
        {icon} {header}
      </FormSectionInnerHeader>
      <FormSectionInnerBody>{children}</FormSectionInnerBody>
    </FormSectionInner>
  );
};

const FormSectionInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormSectionInnerHeader = styled.h3`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #000000f2;
`;

const FormSectionInnerBody = styled.div`
  display: flex;
  & > * {
    flex: 1;
  }
`;

const Buttons = styled.div`
  display: flex;
`;
