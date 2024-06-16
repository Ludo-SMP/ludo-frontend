import React from 'react';
import styled from 'styled-components';

export interface ProfileLayoutProps {
  children: React.ReactNode;
}

export const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 912px;
  flex-direction: column;
`;
