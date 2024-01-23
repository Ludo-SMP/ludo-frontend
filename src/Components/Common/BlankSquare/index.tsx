import styled from 'styled-components';

type BlankSquareProps = {
  width: string;
  height?: string;
  color?: string;
  children?: React.ReactNode;
}

export const BlankSquare = ({ children }: BlankSquareProps) => {
  return <BlankSquareWrapper>{children}</BlankSquareWrapper>;
};

const BlankSquareWrapper = styled.div<{ width?: string; font?: string }>`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
`;
