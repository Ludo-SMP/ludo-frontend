import { ReviewStandard } from '@/Types/review';
import styled, { css } from 'styled-components';
import { StarScore } from './StarScore';

export interface ReviewScoreProps {
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
  top: 14px;
  left: calc(50%-20px);
  ${({ theme, $score }) =>
    $score === 2
      ? css`
          background-clip: text;
          background-image: linear-gradient(
            to top,
            ${theme.color.white} ${$score * 20}%,
            ${theme.color.black5} ${$score * 20}%
          );
          color: transparent;
          -webkit-text-fill-color: transparent;
        `
      : css`
          color: ${$score <= 2 ? theme.color.black5 : theme.color.white};
        `}
  text-align: center;
  width: 100%;
  height: 24px;

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
