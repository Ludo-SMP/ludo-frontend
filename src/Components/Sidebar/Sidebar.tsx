import styled from 'styled-components';
import { Tab } from './Tab';
import { PropsWithChildren } from 'react';
import { ROUTES } from '@/Constants/route';

export const Sidebar = () => {
  return (
    <Navigation>
      <TabGroup name="회원 정보">
        <Tab title="회원 정보" to={ROUTES.MYPAGE.HOME} />
        <Tab title="스터디원이 남긴 나의 리뷰" to={ROUTES.MYPAGE.REVIEWS} />
        <Tab title="임시 저장된 글" to={ROUTES.MYPAGE.SAVED} />
      </TabGroup>
      <TabGroup name="설정">
        {/* <Tab title="프로필 설정" to={ROUTES.MYPAGE.PROFILE_SETTINGS} /> */}
        <Tab title="알림 권한 설정" to={ROUTES.MYPAGE.NOTIFICATIONS_SETTINGS} />
      </TabGroup>
      <TabGroup name="알림">
        <Tab title="루도가 알려요" to={ROUTES.MYPAGE.NOTIFICATIONS} />
      </TabGroup>
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 32px;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.white2};
`;

const TabGroup = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  return (
    <TabGroupInner>
      <TabGroupInnerText>{name}</TabGroupInnerText>
      {children}
    </TabGroupInner>
  );
};

const TabGroupInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TabGroupInnerText = styled.div`
  align-self: stretch;
  color: ${({ theme }) => theme.color.black2};
  font-size: 18px;
  font-family: Pretendard500;
  font-weight: 500;
  line-height: 32px;
`;
