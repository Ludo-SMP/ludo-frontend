import InputText from '@/Components/Common/InputText/iindex';
import { ReactNode } from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <div>
      <FormSection>
        <Labeled label="제목">
          <InputText />
        </Labeled>
      </FormSection>
      <FormSection>
        <Labeled label="카테고리">
          <InputText />
        </Labeled>
        <Labeled label="스터디 최대 인원">
          <InputText />
        </Labeled>
      </FormSection>
      <FormSection>
        <Labeled label="카테고리">
          <InputText />
        </Labeled>
        <Labeled label="진행 플랫폼">
          <InputText />
        </Labeled>
        <Labeled label="진행 기간">
          <InputText />
        </Labeled>
      </FormSection>
    </div>
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
