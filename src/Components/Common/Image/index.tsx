import styled from 'styled-components';

export interface ImageProps {
  /** 이미지 주소 */
  src?: string;

  /** 이미지 설명 */
  alt?: string;

  /** 이미지 크기. 가로 세로 동일 */
  size: number;
}

/** 정사각형 형태의 이미지를 보여줍니다. */
const Image = ({ src, size }: ImageProps) => {
  return src ? <img src={src} width={`${size}px`} height={`${size}px`} /> : <SkeletonImage size={size} />;
};

const SkeletonImage = styled.div<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ theme }) => theme.color.white};
`;

export default Image;
