import styled from 'styled-components';
import { media } from '@/Styles/theme';
import { ROUTES } from '@/Constants/route';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Hamburger, Logo } from '@/Assets';
import { Profile } from '@/Assets/Profile';
import { useLoginStore } from '@/store/auth';
import Button from '../Common/Button';
import StudyButtonSection from './StudyButtonSection';
import SignButtonSection from './SignButtonSection';
import Gnb from './Gnb';
import Dropdown from '../Dropdown';
import { useModalStore } from '@/store/modal';
import { useLogOutMutation } from '@/Hooks/auth/useLogOutMutation';
import DropdownItem from '../Common/DropdownItem';
import { AlarmBell } from './AlarmBell';
import { useUserStore } from '@/store/user';
import { gnbMenus, GnbMenuType } from './Gnb';

/** 사이트 메인 헤더 */
const Header = () => {
  const { isLoggedIn } = useLoginStore();
  const user = useUserStore(({ user }) => user);
  const { openModal } = useModalStore();
  const navigate = useNavigate();
  const currentLocation = useLocation()?.pathname;

  const { mutate: logoutMutate } = useLogOutMutation();

  return (
    <HeaderBox>
      <TopBar>
        <TopBarLeftSection>
          <Dropdown itemsPosition="RIGHT" image={<Hamburger width={24} height={24} />}>
            {gnbMenus.map((gnbMenu: GnbMenuType) => (
              <DropdownItem key={gnbMenu.name} onClick={() => navigate(gnbMenu.page)}>
                {gnbMenu.name}
              </DropdownItem>
            ))}
          </Dropdown>
          <Link to="/">
            <LogoImg width="112" height="48" src={Logo} alt="Ludo" />
          </Link>
        </TopBarLeftSection>

        <TopbarRightSection>
          {isLoggedIn ? (
            <>
              {currentLocation === ROUTES.MAIN || currentLocation === ROUTES.RECRUITMENT.RECRUITMENTS ? (
                <StudyButtonSection />
              ) : (
                <div className="login__elements">
                  <SignButtonSection />
                  <Button
                    className="create__study"
                    type="button"
                    onClick={() => {
                      navigate(ROUTES.STUDY.CREATE);
                    }}
                  >
                    스터디 생성하기
                  </Button>
                </div>
              )}
              <UserInfoBox>
                <AlarmBell />
                <Dropdown image={<Profile width={40} height={40} email={user?.email} />}>
                  <DropdownItem
                    onClick={() => {
                      navigate(ROUTES.MYPAGE.HOME);
                    }}
                  >
                    마이페이지
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      logoutMutate();
                    }}
                  >
                    로그아웃 하기
                  </DropdownItem>
                </Dropdown>
              </UserInfoBox>
            </>
          ) : (
            <div className="signout__elements">
              <SignButtonSection />
              {(currentLocation === ROUTES.MAIN || currentLocation === ROUTES.RECRUITMENT.RECRUITMENTS) && (
                <Button
                  className="create__study"
                  type="button"
                  onClick={isLoggedIn ? () => navigate(ROUTES.STUDY.CREATE) : () => openModal()}
                >
                  스터디 생성하기
                </Button>
              )}
            </div>
          )}
        </TopbarRightSection>
      </TopBar>

      {isLoggedIn && <Gnb />}
    </HeaderBox>
  );
};

const HeaderBox = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;

  ${media.custom(400)} {
    width: 100vw;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0;
  background-color: ${(props) => props.theme.color.white2};

  ${media.mobile} {
    padding: 16px 24px;
  }

  button {
    justify-content: center;
    align-items: center;
    gap: 8px;
    ${({ theme }) => theme.typo.ButtonButton};
    font-family: 'Pretendard600';
    text-align: center;
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.color.black0};
  }

  .login__elements,
  .signout__elements {
    display: inline-flex;
    align-items: center;
    gap: 24px;
  }

  .create__study {
    padding: 0 24px;
    color: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.borderRadius.xlarge};
    border: 1px solid ${(props) => props.theme.color.black1};
    background: ${(props) => props.theme.color.purple3};

    &:hover {
      background: linear-gradient(93deg, #6262b2 0%, #f7a477 100%);
    }

    ${media.custom(800)} {
      display: none;
    }
  }
`;

const TopBarLeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  & > div:first-child {
    display: none;

    ${media.mobile} {
      display: flex;
    }
  }
`;

const TopbarRightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  svg {
    :hover {
      cursor: pointer;
    }
  }
  .logout {
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      padding-top: 2px;
    }
  }
`;

const LogoImg = styled.img`
  padding: 4px 0;

  ${media.mobile} {
    width: 56px;
    height: 24px;
    padding: 2px 0;
  }
`;

export default Header;
