import styled from 'styled-components';

export const BoldDivider = styled.div<{ $rowHeight: number }>`
  width: 100%;
  height: ${(props) => `${props.$rowHeight}px`};
  background-color: ${(props) => props.theme.color.gray1};
`;
