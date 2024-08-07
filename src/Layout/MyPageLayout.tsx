import { Sidebar } from '@/Components/Sidebar/Sidebar';
import { media } from '@/Styles/theme';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export interface MyPageLayoutProps {
  children: React.ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Sidebar />
      {children}
    </Layout>
  );
};
export { MyPageLayout };

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1224px;
  gap: 24px;
  margin: 0 auto;
  padding: 40px 0 72px 0;

  ${media.custom(800)} {
    padding: 0 24px;

    nav {
      display: none;
    }
  }

  & > div:first-child {
    display: none;

    ${media.mobile} {
      display: flex;
    }
  }
`;
