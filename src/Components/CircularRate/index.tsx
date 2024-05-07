import { theme } from '@/Styles/theme';

export interface CircularRateProps {
  /** 0부터 100 사이의 평가 지수 */
  percentage: number;

  /** 선 두께 */
  barWeight?: number;

  /** 전체 상자 크기. 단위는 픽셀. */
  size?: number;

  /** 그래디언트 색상 */
  gradientColors?: string[];
}

export const CircularRate = ({
  percentage,
  barWeight = 8,
  size = 100,
  gradientColors = [theme.color.purple1, theme.color.orange1],
}: CircularRateProps) => {
  console.log(gradientColors);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <mask id="cpg">
        <circle
          cx="50%"
          cy="50%"
          r={50 - barWeight / 2}
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeWidth={barWeight}
          // 원에 외접하는 정사각형의 길이를 원주로 변환
          strokeDasharray={`${(percentage / 100) * (size - barWeight) * Math.PI}px 1000%`}
          style={{
            transform: 'rotateY(180deg) rotateZ(-90deg)',
            transformOrigin: 'center',
          }}
        />
      </mask>
      <g mask="url(#cpg)">
        <foreignObject width={size} height={size}>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `conic-gradient(${gradientColors.reverse().join(', ')})`,
            }}
          />
        </foreignObject>
      </g>
    </svg>
  );
};
