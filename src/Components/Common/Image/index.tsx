import styled from 'styled-components';

export interface ImageProps {
  src?: string;
  alt?: string;
  size: number;
}

const Image = ({ src, size }: ImageProps) => {
  return src ? <img src={src} width={`${size}px`} height={`${size}px`} /> : <SkeletonImage size={size} />;
};

const SkeletonImage = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ theme }) => theme.color.gray2};
`;

export default Image;
