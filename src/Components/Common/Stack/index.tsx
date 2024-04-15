import { ReactNode } from 'react';

export interface StackProps {
  children: ReactNode;
}

export const Stack = ({ children }: StackProps) => {
  return <div>{children}</div>;
};
