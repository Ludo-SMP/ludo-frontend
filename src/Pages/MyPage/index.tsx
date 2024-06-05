import { useEffect } from 'react';
import { Loading } from '@/Assets';
import styled from 'styled-components';
import { useMyPageInfo } from '@/Hooks/study/useMyPageInfo';
import { useLocation } from 'react-router-dom';
import { UserInfoSection } from './UserInfoSection';
import { StudiesSection } from './StudiesSection';

const MyPage = () => {
  const { data: myPageInfo, isLoading } = useMyPageInfo();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MyPageLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <UserInfoSection myPageInfo={myPageInfo} />
          <StudiesSection />
        </>
      )}
    </MyPageLayout>
  );
};

const MyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  width: 100%;
  gap: 32px;

  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;

    h5 {
      color: ${({ theme }) => theme.color.black5};
      font-family: 'Pretendard700';
      font-size: ${({ theme }) => theme.font.medium};
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
    }
  }
`;

export default MyPage;
