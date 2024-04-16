import { Children, ReactNode } from 'react';
import styled from 'styled-components';

export interface StackProps {
  children?: ReactNode;
  divider?: ReactNode;
  gap?: number;
}

export const Stack = ({ divider, gap, children }: StackProps) => {
  const childrenArr = Children.toArray(children);

  return <Box gap={gap}>{[].concat(...childrenArr.map((n) => [n, divider])).slice(0, -1)}</Box>;
};

const Box = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => gap ?? 16};
`;
