import styled from 'styled-components';

export interface StudyProgressProps {
  /** 진행한 총 스터디 수 */
  totalStudy: number;

  /** 완료한 스터디 수 */
  completedStudy: number;
}

/** 사용자의 스터디 진행률을 나타내는 컴포넌트 */
export const StudyProgress = ({ totalStudy, completedStudy }: StudyProgressProps) => {
  const p = (completedStudy / totalStudy) * 100;

  return (
    <Bar $ratio={p}>
      <ClippedText $ratio={p}>
        진행한 {totalStudy}개의 스터디 중 {completedStudy}개 완주!
      </ClippedText>
    </Bar>
  );
};

const Bar = styled.div<{ $ratio: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px ${({ theme }) => theme.color.black2} solid;
  border-radius: 9999px;
  background-image: linear-gradient(
    to right,
    ${({ theme, $ratio }) => `${theme.color.purple1} ${$ratio}%, ${theme.color.gray1} ${$ratio}%`}
  );
`;

const ClippedText = styled.div<{ $ratio: number }>`
  padding: 0 7px;
  font-size: 18px;
  font-family: Pretendard500;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    ${({ theme, $ratio }) => `${theme.color.white} ${$ratio}%, ${theme.color.black2} ${$ratio}%`}
  );

  -webkit-text-fill-color: transparent;
`;
