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
      <Divier />
      <FormSection icon={<Two />} header="스터디 기본 구성">
        <SelectBox label="카테고리" values={{}} defaultValue="ex) 코딩테스트 스터디" {...register('title')} />
        <SelectBox label="스터디 최대 인원" values={{}} defaultValue="ex) 5명" {...register('memberLimit')} />
      </FormSection>
      <Divier />
      <FormSection icon={<Three />} header="스터디 진행 관련">
        <SelectBox label="카테고리" values={{}} defaultValue="ex) 코딩테스트 스터디" {...register('category')} />
        <SelectBox label="진행 플랫폼" values={{}} defaultValue="ex) gather" {...register('platform')} />
        <SelectBox label="진행 플랫폼" values={{}} defaultValue="ex) 24.01.23 - 21.03.23" {...register('platform')} />
      </FormSection>
      <Buttons>
        {/* 임시저장 */}
        <Button onClick={() => console.log(data)}>임시저장</Button>
        {/* 생성 */}
        <Button type="submit"></Button>
      </Buttons>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 24px 40px 24px;
  gap: 24px;
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

const Button = styled.button`
  height: 40px;
  padding: 0 16px 0 16px;
  gap: 8px;
  border-radius: 8px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  border: 1px solid #0000001a;
`;

const Divier = styled.div`
  height: 12px;
  background: #f2f3f3;
`;
