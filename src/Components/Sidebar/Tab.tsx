import styled from 'styled-components';

export const Tab = styled.div`
  color: ${({ theme }) => theme.color.purple1};
  fontsize: 16;
  fontfamily: Pretendard600;
  fontweight: 600;
  lineheight: 16;
  wordwrap: break-word;
  padding: 16px;
  background: ${({ theme }) => theme.color.purple2};
  borderradius: 8;
  justifycontent: center;
`;
