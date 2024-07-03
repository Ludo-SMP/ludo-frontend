import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface TabProps {
  /** 탭 이름 */
  title: string;

  /** 선택되었을 떼 열릴 탭 라우트 */
  to?: string;
}

/** 사이드바의 여러 탭 중 하나를 표현하는 컴포넌트 */
export const Tab = ({ title, to }: TabProps) => {
  return (
    <NavLink to={to} end>
      {({ isActive }) => <Box $active={isActive}>{title}</Box>}
    </NavLink>
  );
};

const Box = styled.div<{
  $active: boolean;
}>`
  color: ${({ theme, $active }) => ($active ? theme.color.purple1 : theme.color.black3)};
  font-size: 16px;
  font-family: Pretendard600;
  font-weight: 600;
  line-height: 16px;
  padding: 16px;
  background: ${({ theme, $active }) => $active && theme.color.purple2};
  border-radius: 8px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.purple1};
  }
`;
