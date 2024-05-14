import styled from 'styled-components';

export interface StudyProgressProps {
  totalStudy: number;
  completedStudy: number;
}

export const StudyProgress = ({ totalStudy, completedStudy }: StudyProgressProps) => {
  console.log((completedStudy / totalStudy) * 100);

  return (
    <Inner $ratio={(completedStudy / totalStudy) * 100}>
      진행한 {totalStudy}개의 스터디 중 {completedStudy}개 완주!
    </Inner>
  );
};

const Inner = styled.div<{ $ratio: number }>`
  padding: 0 7px;
  font-size: 18px;
  font-family: Pretendard500;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  border: 1px ${({ theme }) => theme.color.black2} solid;
  border-radius: 9999px;
  color: white;
  background-image: linear-gradient(
    to right,
    ${({ theme, $ratio }) => `${theme.color.purple1} ${$ratio}%, ${theme.color.gray1} ${$ratio}%`}
  );
`;
