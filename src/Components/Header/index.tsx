import styled from 'styled-components';
import { media } from '@/Styles/theme';
import { ROUTES } from '@/Constants/route';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Logo, Alarm, Profile } from '@/Assets';
import { useLoginStore } from '@/store/auth';
import Button from '../Common/Button';
import StudyButtonSection from './StudyButtonSection';
import SignButtonSection from './SignButtonSection';
import Gnb from './Gnb';
import Dropdown from '../Dropdown';
import { useModalStore } from '@/store/modal';
import { useLogOutMutation } from '@/Hooks/auth/useLogOutMutation';
import DropdownItem from '../Common/DropdownItem';

const Header = () => {
  const { isLoggedIn } = useLoginStore();
  const { openModal } = useModalStore();
  const navigate = useNavigate();
  const currentLocation = useLocation()?.pathname;

  const { mutate: logoutMutate } = useLogOutMutation();

  return (
    <HeaderWrapper>
      <TopBarWrapper>
        <Link to="/">
          <img width="140" src={Logo} alt="Ludo" />
        </Link>
        <ElementsWrapper>
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
              <UserInfoWrapper>
                <Alarm width={40} height={40} />
                <Dropdown image={<Profile width={40} height={40} />}>
                  <DropdownItem
                    onClick={() => {
                      navigate(ROUTES.MYPAGE);
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
              </UserInfoWrapper>
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
        </ElementsWrapper>
      </TopBarWrapper>

      {isLoggedIn && <Gnb />}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 216px;
  max-width: 1224px;
  margin: 0 auto;
  ${media.custom(800)} {
    width: 400px;
  }
`;

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 160px;
  align-items: center;
  padding: 60px 0 16px 0;
  background-color: ${(props) => props.theme.color.white};

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: calc((${(props) => props.theme.font.small} + ${(props) => props.theme.font.medium}) / 2);
    font-family: Pretendard;
    font-style: normal;
    text-align: center;
    font-weight: 600;
    line-height: 48px;
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

const ElementsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

const UserInfoWrapper = styled.div`
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

export default Header;
