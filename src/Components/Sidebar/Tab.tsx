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
  fontsize: 16;
  fontfamily: Pretendard600;
  fontweight: 600;
  lineheight: 16;
  wordwrap: break-word;
  padding: 16px;
  background: ${({ theme, $active }) => $active && theme.color.purple2};
  borderradius: 8;
  justifycontent: center;
`;
