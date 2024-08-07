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

const MyPage = () => {
  const { data: myPageInfo, isLoading } = useMyPageInfo();
  const { pathname } = useLocation();

  const [selectedMenu, setSelectedMenu] = useState<MypageGnbMenu>('회원 정보');
  console.log(selectedMenu);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MyPageLayout $selectedMenu={selectedMenu}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MypageGnb handleMypageGnbMenu={setSelectedMenu} />
          <UserInfoSection myPageInfo={myPageInfo} />
          <StudiesSection />
        </>
      )}
    </MyPageLayout>
  );
};

const MyPageLayout = styled.div<{ $selectedMenu: MypageGnbMenu }>`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  width: 100%;
  gap: 32px;

  & > div:first-child {
    display: none;
  }

  ${media.custom(800)} {
    & > div:first-child {
      display: flex;
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

export default MyPage;
