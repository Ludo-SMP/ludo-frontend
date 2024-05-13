import styled from 'styled-components';
import { CustomRadio } from '../CustomRadio/CustomRadio';

interface ReviewQuestionProps {
  title: string;
  contents: string[];
  optionCnt?: number;
}

const errorMessageContent = '해당 항목이 체크되지 않았습니다.';

export const ReviewQuestion = ({ title, contents, optionCnt = 5 }: ReviewQuestionProps) => {
  return (
    <ReviewQuestionWrapper>
      <QuestionTitle>{title}</QuestionTitle>
      <SelectSection>
        <QuestionContent alignEnd>{contents[0]}</QuestionContent>
        <RadioButtonsSection>
          {Array.from({ length: optionCnt }, (_, i) => i + 1).map((value: number) => (
            <CustomRadio value={value} key={value} />
          ))}
        </RadioButtonsSection>
        <QuestionContent>{contents[1]}</QuestionContent>
      </SelectSection>
      <ErrorMessageWrapper>{errorMessageContent}</ErrorMessageWrapper>
    </ReviewQuestionWrapper>
  );
};

const ReviewQuestionWrapper = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 808px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const QuestionTitle = styled.div`
  font-family: 'Pretendard500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  width: 100%;
`;

const SelectSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  align-self: stretch;
  width: 100%;
`;

const QuestionContent = styled.p<{ alignEnd?: boolean }>`
  display: flex;
  justify-content: ${({ alignEnd }) => alignEnd && 'flex-end'};
  color: ${({ theme }) => theme.color.black5};
  text-align: right;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  max-width: 132px;
  padding: 4px 0;
  flex: 1 0 0;
`;

const RadioButtonsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
`;

const ErrorMessageWrapper = styled.p`
  display: flex;
  height: 28px;
  padding: 4px 0px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  color: ${({ theme }) => theme.color.negative};
  font-family: 'Pretendard400';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
