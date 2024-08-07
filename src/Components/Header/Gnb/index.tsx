import styled from 'styled-components';
import GnbMenu from './GnbMenu';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { media } from '@/Styles/theme';

export interface GnbMenuType {
  name: string;
  page: string;
}

export const gnbMenus: GnbMenuType[] = [
  { name: '메인 페이지', page: ROUTES.MAIN },
  { name: '스터디 모집 공고 모아보기', page: ROUTES.RECRUITMENT.RECRUITMENTS },
  { name: '마이페이지', page: ROUTES.MYPAGE.HOME },
];

const Gnb = () => {
  const navigate = useNavigate();
  return (
    <GnbWrapper>
      <GnbMenuListWrapper>
        {gnbMenus.map((gnbMenu: GnbMenuType) => (
          <GnbMenu name={gnbMenu.name} key={gnbMenu.name} onClick={() => navigate(gnbMenu.page)} />
        ))}
      </GnbMenuListWrapper>
    </GnbWrapper>
  );
};

const GnbWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  white-space: nowrap;
  background: ${(props) => props.theme.color.white2};
  gap: 12px;

  ${media.custom(500)} {
    display: none;
  }
`;

const GnbMenuListWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export default Gnb;
