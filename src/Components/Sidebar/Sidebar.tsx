import styled from 'styled-components';
import { Tab } from './Tab';
import { PropsWithChildren } from 'react';

export const Sidebar = () => {
  return (
    <Navigation>
      <TabGroup name="개인 정보">
        <Tab title="프로필 설정" to="/profile" />
        <Tab title="스터디원이 남긴 나의 리뷰" to="/review" />
      </TabGroup>
      <TabGroup name="알림 설정">
        <Tab title="알림 권한 설정" to="/notifications/settings" />
      </TabGroup>
      <TabGroup name="알림">
        <Tab title="루도가 알려요" to="/notifications" />
      </TabGroup>
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 32px;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.white};
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
