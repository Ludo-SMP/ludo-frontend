import { Children, ReactNode } from 'react';

export interface StackProps {
  children?: ReactNode;
  divider?: ReactNode;
}

export const Stack = ({ divider, children }: StackProps) => {
  const childrenArr = Children.toArray(children);

  return <div>{[].concat(...childrenArr.map((n) => [n, divider])).slice(0, -1)}</div>;
};
