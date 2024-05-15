import { Sidebar } from '@/Components/Sidebar/Sidebar';
import styled from 'styled-components';

export interface MyPageLayoutProps {
  children: React.ReactNode;
}
const MyPageLayout = ({ children }: MyPageLayoutProps) => {
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
  padding: 20px 0;

  nav {
    width: 288px;

    ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
`;
