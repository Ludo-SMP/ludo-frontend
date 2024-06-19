import styled from 'styled-components';

export const Grid = styled.div<{ col?: number }>`
  display: grid;
  grid-template-columns: ${({ col }) =>
    typeof col === 'number' ? `repeat(${col},  minmax(392px, 1fr))` : `repeat(3, minmax(392px, 1fr))`};
  gap: 24px;
  margin-top: 24px;
`;
