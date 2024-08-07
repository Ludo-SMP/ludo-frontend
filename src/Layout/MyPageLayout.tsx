import Button from '@/Components/Common/Button';
import { Sidebar } from '@/Components/Sidebar/Sidebar';
import { useLogOutMutation } from '@/Hooks/auth/useLogOutMutation';
import { media } from '@/Styles/theme';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export interface MyPageLayoutProps {
  children: React.ReactNode;
}

const MyPageLayout = ({ children }: MyPageLayoutProps) => {
  const { pathname } = useLocation();

  const { mutate: logoutMutate } = useLogOutMutation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Sidebar />
      {children}
      <LogoutSection>
        <Button type="button" scheme="normal" size="fullWidth" onClick={() => logoutMutate()}>
          로그아웃
        </Button>
      </LogoutSection>
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
    flex-direction: column;
    padding: 0 24px;

    & > nav:first-child {
      display: none;
    }

    & > section {
      display: flex;
    }
  }

  & > div:first-child {
    display: none;

    ${media.mobile} {
      display: flex;
    }
  }
`;

const LogoutSection = styled.section`
  display: none;
  padding: 0px 24px 40px 24px;
`;
