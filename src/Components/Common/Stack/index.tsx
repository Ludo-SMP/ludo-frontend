import { Children, ReactNode } from 'react';

export interface StackProps {
  children?: ReactNode;
  divider?: ReactNode;
  gap?: number | string;
}

export const Stack = ({ divider, gap, children }: StackProps) => {
  const childrenArr = Children.toArray(children);

  return <Box gap={gap}>{[].concat(...childrenArr.map((n) => [n, divider])).slice(0, -1)}</Box>;
};

const Box = styled.div<{ gap?: number | string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? (typeof gap === 'number' ? `${gap}px` : gap) : '16px')};
`;

export const Stack = ({ divider, children }: StackProps) => {
  const childrenArr = Children.toArray(children);

  return <div>{[].concat(...childrenArr.map((n) => [n, divider])).slice(0, -1)}</div>;
};
