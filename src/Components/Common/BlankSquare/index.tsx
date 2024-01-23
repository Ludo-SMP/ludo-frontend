import styled from 'styled-components';

interface BlankSquareProps {
  width?: string;
  height?: string;
  color?: string;
}

export const BlankSquare: React.FC<BlankSquareProps> = ({ width, height, color }) => {
  return <BlankSquareWrapper></BlankSquareWrapper>;
};

const BlankSquareWrapper = styled.div<{ width?: string; font?: string }>`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
`;
