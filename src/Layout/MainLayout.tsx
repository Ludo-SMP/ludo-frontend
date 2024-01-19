import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Layout>
        <LayoutContainer>{children}</LayoutContainer>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
`;

const LayoutContainer = styled.main`
  width: 100%;
`;
