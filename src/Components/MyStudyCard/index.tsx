import styled from 'styled-components';
import { BlankSquare } from '../Common/BlankSquare';
import StudyToken from '../Common/StudyToken';
import { InfoField } from '../Common/InfoField';
import Button from '../Common/Button';
import { Position, StudyStatus } from '@/Types/study';

interface MyStudyCardProps {
  id: number;
  title: string;
  status: StudyStatus[];
  position?: Position;
  period?: string;
  memberCnt?: number;
  isCreator?: boolean;
}

const MyStudyCard = ({ title, status, position, memberCnt, isCreator }: MyStudyCardProps) => {
  return (
    <MyStudyCardWrapper>
      <BlankSquare width="180px" height="180px" />
      <StudyInfoWrapper>
        <div className="study__status">
          <span className="title">{title}</span>
          <div className="studyTokens">
            {status.map((_status: StudyStatus) => (
              <StudyToken tokenState="InProgress">{_status}</StudyToken>
            ))}
          </div>
        </div>
        <div className="detail__info">
          <InfoField title="나의 포지션" content={position || '나의 포지션'} />
          <InfoField title="진행 기간" content={position || '포지션'} />
          <InfoField title="팀원 수" content={memberCnt || 0} />
        </div>
      </StudyInfoWrapper>
      <MyStudyCardButtonsWrapper>{isCreator && <Button>스터디원 모집 공고 작성하기</Button>}</MyStudyCardButtonsWrapper>
    </MyStudyCardWrapper>
  );
};

const MyStudyCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 32px 40px;
  align-items: flex-start;
  gap: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};

  /* Card */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);

  & > div:first-child {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: ${({ theme }) => theme.color.gray5};
  }
`;

const StudyInfoWrapper = styled.div`
  display: flex;
  width: (100%-180px);
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  .study__status {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;

    .title {
      color: ${({ theme }) => theme.color.black5};
      font-family: Pretendard;
      font-size: ${({ theme }) => theme.font.xxlarge};
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
    }

    .studyTokens {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

const MyStudyCardButtonsWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  right: 40px;

  button {
    display: inline-flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 1px solid ${({ theme }) => theme.color.black1};
    background: ${({ theme }) => theme.color.purple3};
    color: var(--Font-text-on-primary, #fff);
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
  }
`;

export default MyStudyCard;
