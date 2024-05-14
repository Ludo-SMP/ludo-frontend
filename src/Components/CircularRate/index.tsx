import { theme } from '@/Styles/theme';
import { useRef } from 'react';
import styled from 'styled-components';

export interface CircularRateProps {
  /** 0부터 100 사이의 평가 지수 */
  percentage: number;

  /** 선 두께 */
  barWeight?: number;

  /** 전체 상자 크기. 단위는 픽셀. */
  size?: number;

  /** 그래디언트 색상 */
  gradientColors?: string[];

  /** 해당 지표의 이름 */
  label: string;
}

let x = 0;

// 고유 id 생성용 훅
const useMaskId = () => useRef(++x).current;

/** 사용자 평가 지수를 원형 그래프로 표현하는 컴포넌트 */
export const CircularRate = ({
  percentage,
  barWeight = 4,
  size = 80,
  gradientColors = [theme.color.purple1, theme.color.orange1],
  label,
}: CircularRateProps) => {
  const maskId = useMaskId();

  // 내접원의 지름 / 반지름
  const diameter = size - barWeight,
    r = diameter / 2;

  return (
    <Box>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        <circle cx="50%" cy="50%" r={r} fill="none" stroke="#F2F3F3" strokeWidth={barWeight} />
        <mask id={`ring-${maskId}`}>
          <circle
            cx="50%"
            cy="50%"
            r={r}
            fill="none"
            stroke="white"
            strokeLinecap={percentage === 0 ? 'butt' : 'round'}
            strokeWidth={barWeight}
            // 원에 외접하는 정사각형의 길이를 원주로 변환
            strokeDasharray={`${(percentage / 100) * diameter * Math.PI}px 1000%`}
            style={{
              transform: 'rotateY(180deg) rotateZ(-90deg)',
              transformOrigin: 'center',
            }}
          />
        </mask>
        <foreignObject width={size} height={size} mask={`url(#ring-${maskId})`}>
          <GradientBox $colors={gradientColors} />
        </foreignObject>
      </svg>
      <InnerBox $size={size}>
        <ProgressText>{percentage}%</ProgressText>
        <LabelText>{label}</LabelText>
      </InnerBox>
    </Box>
  );
};

const Box = styled.div`
  position: relative;
`;

const GradientBox = styled.div<{ $colors: Array<string> }>`
  width: 100%;
  height: 100%;
  background-image: conic-gradient(${({ $colors }) => $colors.reverse().join(', ')});
`;

const InnerBox = styled.div<{ $size: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProgressText = styled.span`
  height: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.color.black5};
`;

const LabelText = styled.span`
  font-size: 16;
  font-weight: 400;
  line-height: '24px';
  color: ${({ theme }) => theme.color.black2};
`;
