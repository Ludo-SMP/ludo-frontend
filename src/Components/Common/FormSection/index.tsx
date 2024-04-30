import Heading from '@/Components/Heading';
import React from 'react';
import styled from 'styled-components';

export interface FormSectionProps {
  icon?: any;
  title?: string;
  children: React.ReactNode;
}
export const FormSection = ({ icon, title, children }: FormSectionProps) => {
  return (
    <FormSectionWrap>
      <Heading type={'Title'} component={'Page'}>
        {icon && <AssetContainer>{icon}</AssetContainer>}
        {title}
      </Heading>
      {children}
    </FormSectionWrap>
  );
};

const AssetContainer = styled.image`
  padding-right: 12px;
`;

const FormSectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin: 24px 0;

  & ~ & {
    margin-top: 20px;
  }
`;
