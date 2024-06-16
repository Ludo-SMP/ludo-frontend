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
      <Heading>
        {icon && <AssetContainer>{icon}</AssetContainer>}
        {title}
      </Heading>
      {children}
    </FormSectionWrap>
  );
};

const Heading = styled.h1`
  ${({ theme }) => theme.typo.PageTitle};
  display: flex;
  align-items: center;
`;

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
