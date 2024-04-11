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
  const { register, handleSubmit } = useForm<StudyCreateForm>();

  return (
    <form onSubmit={handleSubmit(() => void 0)}>
      <FormSection>
        <Labeled label="제목">
          <InputText />
        </Labeled>
      </FormSection>
      <FormSection>
        <SelectBox label="카테고리" values={{}} {...register('title')} />
        <SelectBox label="스터디 최대 인원" values={{}} {...register('memberLimit')} />
      </FormSection>
      <FormSection>
        <SelectBox label="카테고리" values={{}} {...register('category')} />
        <SelectBox label="진행 플랫폼" values={{}} {...register('platform')} />
        <SelectBox label="진행 플랫폼" values={{}} {...register('platform')} />
      </FormSection>
    </form>
  );
};

const Labeled = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <label>
      {label}
      {children}
    </label>
  );
};

const FormSection = styled.div`
  display: flex;
`;
