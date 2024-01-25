import styled from 'styled-components';

type BlankCircleProps = {
  width?: string;
  height?: string;
  color?: string;
  children?: React.ReactNode;
};

const BlankCircle = ({ children, width, height }: BlankCircleProps) => {
  return (
    <BlankCircleWrapper width={width} height={height}>
      {children}
    </BlankCircleWrapper>
  );
};

const BlankCircleWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || '80px'};
  height: ${(props) => props.height || '80px'};
  background-color: #bcc0c4;
  border-radius: 50%;
`;

export default BlankCircle;
