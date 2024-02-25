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
<<<<<<< HEAD
  height: 100vh;
=======
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  background-color: ${({ theme }) => theme.color.white};
`;

const LayoutContainer = styled.main`
  width: 100%;
`;
