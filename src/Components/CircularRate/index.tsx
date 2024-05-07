import { color, theme } from '@/Styles/theme';

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

export const CircularRate = ({
  percentage,
  barWeight = 4,
  size = 80,
  gradientColors = [theme.color.purple1, theme.color.orange1],
  label,
}: CircularRateProps) => {
  console.log(gradientColors);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
        <mask id="cpg">
          <circle
            cx="50%"
            cy="50%"
            r={(size - barWeight) / 2}
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
        <foreignObject width={size} height={size} mask="url(#cpg)">
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `conic-gradient(${gradientColors.reverse().join(', ')})`,
            }}
          />
        </foreignObject>
      </svg>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: size,
          height: size,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            height: 24,
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '24px',
            color: theme.color.black5,
          }}
        >
          {percentage}%
        </span>
        <span
          style={{
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '24px',
            color: theme.color.black2,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
