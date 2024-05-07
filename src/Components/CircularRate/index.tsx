export interface CircularRateProps {
  /** 0부터 100 사이의 평가 지수 */
  percentage: number;

  /** 선 두께 */
  barWeight?: number;

  /** 전체 상자 크기. 단위는 픽셀. */
  size: number;
}

export const CircularRate = ({ percentage, barWeight = 8, size = 100 }: CircularRateProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <circle
        cx="50%"
        cy="50%"
        r={50 - barWeight / 2}
        fill="transparent"
        stroke="red"
        strokeLinecap="round"
        strokeWidth={barWeight}
        strokeDasharray={`${(percentage / 100) * (size - barWeight) * Math.PI}px 1000%`}
        style={{
          transform: 'rotateY(180deg) rotateZ(-90deg)',
          transformOrigin: 'center',
        }}
      />
    </svg>
  );
};
