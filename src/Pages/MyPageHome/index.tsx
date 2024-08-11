import { useEffect, useState } from 'react';
import { Loading } from '@/Assets';
import styled, { css } from 'styled-components';
import { useMyPageInfo } from '@/Hooks/study/useMyPageInfo';
import { useLocation } from 'react-router-dom';
import { UserInfoSection } from './UserInfoSection';
import { StudiesSection } from './StudiesSection';
import { media } from '@/Styles/theme';
import { MypageGnb } from '@/Components/MypageGnb';
import { MypageGnbMenu } from '@/Components/MypageGnb';
import { Sidebar } from '@/Components/Sidebar/Sidebar';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';

const MyPageHome = () => {
  const { data: myPageInfo, isLoading } = useMyPageInfo();
  const { pathname } = useLocation();

  const [selectedMenu, setSelectedMenu] = useState<MypageGnbMenu>('회원 정보');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MyPageHomeLayout $selectedMenu={selectedMenu}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MypageGnb handleMypageGnbMenu={setSelectedMenu} />
          <UserInfoSection myPageInfo={myPageInfo} />
          <StudiesSection />
          <RowDivider rowHeight={12} margin={24} />
          <Sidebar />
        </>
      )}
    </MyPageHomeLayout>
  );
};

const MyPageHomeLayout = styled.div<{ $selectedMenu: MypageGnbMenu }>`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  width: 100%;
  gap: 32px;

  & > div:first-child,
  & > div:last-child,
  & > nav {
    display: none;
  }

  ${media.custom(800)} {
    & > div:first-child {
      display: flex;
    }

    & > nav {
      ${({ $selectedMenu }) =>
        $selectedMenu === '회원 정보' &&
        css`
          display: flex;
          padding: 0;
          background: ${({ theme }) => theme.color.white};
        `};
    }

    & > hr {
      ${({ $selectedMenu }) =>
        $selectedMenu === '회원 정보' &&
        css`
          display: flex;
        `};
    }

    & > section:nth-child(2) {
      ${({ $selectedMenu }) =>
        $selectedMenu === '스따-디' &&
        css`
          display: none;
        `};
    }

    & > section:nth-child(3) {
      ${({ $selectedMenu }) =>
        $selectedMenu === '회원 정보' &&
        css`
          display: none;
        `};
    }
  }

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

export default MyPageHome;
