import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface TabProps {
  title: string;
  to?: string;
}

export const Tab = ({ title, to }: TabProps) => {
  return <NavLink to={to}>{({ isActive }) => <Box $active={isActive}>{title}</Box>}</NavLink>;
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
`;
