import { ReviewStandard } from '@/Types/review';
import styled from 'styled-components';
import { StarScore } from './StarScore';

interface ReviewScoreProps {
  /** 리뷰 평가 기준 */
  standard: ReviewStandard;
  /** 평가 점수 */
  score: number;
}

export const ReviewScore = ({ standard, score }: ReviewScoreProps) => {
  return (
    <ReviewScoreBox>
      <ReviewScoreRow>
        <StarScore score={score} />
        <ReviewScoreText $score={score}>{score}</ReviewScoreText>
      </ReviewScoreRow>
      <ReviewStandardText>{standard}</ReviewStandardText>
    </ReviewScoreBox>
  );
};

const ReviewScoreBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewScoreRow = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
`;

const ReviewScoreText = styled.p<{ $score: number }>`
  position: absolute;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme, $score }) => ($score <= 2 ? theme.color.black5 : theme.color.white)};
  width: 40px;
  text-align: center;

  /* List,Alert/Body-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;

const ReviewStandardText = styled.p`
  color: ${({ theme }) => theme.color.black2};

  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
