import styled from 'styled-components';

export const Tab = styled.div<{
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
