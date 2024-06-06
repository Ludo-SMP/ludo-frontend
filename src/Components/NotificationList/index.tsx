import { styled } from 'styled-components';

export interface NotificationListProps {
  /** 알림 리스트 제목 */
  title?: string;

  /** 제목 아래 들어갈 노드 (ex. 아코디언) */
  children: React.ReactNode;
}

/** 아코디언 목록 */
const NotificationList = ({ title, children }: NotificationListProps) => {
  return (
    <Box>
      <Title>{title ?? '루도가 알려요'}</Title>
      <ul>{children}</ul>
    </Box>
  );
};

export { NotificationList };

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.black5};

  /* Page/Title-SemiBold */
  ${({ theme }) => theme.typo.PageTitle}
`;
