import React from 'react';
import styled from 'styled-components';

export interface SettingLayoutProps {
  children: React.ReactNode;
}

export const SettingLayout = ({ children }: SettingLayoutProps) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  width: 100%;
  max-width: 912px;
  padding: 24px 32px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.cornerRadius12};
  border: 1px solid ${({ theme }) => theme.color.black1};
`;
