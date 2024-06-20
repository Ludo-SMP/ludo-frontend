import { media } from '@/Styles/theme';
import styled from 'styled-components';

export const Grid = styled.div<{ col?: number }>`
  ${media.tablet} {
    display: flex;
    flex-direction: column;
  }
  display: grid;
  grid-template-columns: ${({ col }) =>
    typeof col === 'number' ? `repeat(${col},  minmax(auto, 1fr))` : `repeat(3, minmax(auto, 1fr))`};
  gap: 24px;
  margin-top: 24px;
`;
