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
  background-color: ${({ theme }) => theme.color.white2};
`;

const LayoutContainer = styled.main`
  width: 100%;
  max-height: 1224px;
`;
