import styled from 'styled-components';

type BlankSquareProps = {
  width: string;
  height?: string;
  color?: string;
  children?: React.ReactNode;
};

export const BlankSquare = ({ children, width, height }: BlankSquareProps) => {
  return (
    <BlankSquareWrapper width={width} height={height}>
      {children}
    </BlankSquareWrapper>
  );
};

const BlankSquareWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || '40px'};
  height: ${(props) => props.height || '40px'};
  background-color: #d9d9d9;
`;
