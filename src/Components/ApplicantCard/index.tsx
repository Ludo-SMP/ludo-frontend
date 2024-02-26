import { Profile } from '@/Assets';
import { MemberType } from '@/Types/study';
import styled from 'styled-components';
import { ColumnDivider } from '../Common/Divider/ColumnDivider';
import { InfoField } from '../Common/InfoField';
import Button from '../Common/Button';

interface ApplicantCardProps extends MemberType {
  title: string;
}

const ApplicantCard = ({ title, nickname, email, skillPosition }: ApplicantCardProps) => {
  return (
    <ApplicantCardWrapper>
      <Profile width={180} height={180} />
      <ApplicantInfoWrapper>
        <div className="title">{title}</div>
        <div className="detail__info">
          <span className="nickname">{nickname}</span>
          <ColumnDivider />
          <span className="email">{email}</span>
        </div>
        <InfoField title="포지션" content={skillPosition || '포지션'} />
      </ApplicantInfoWrapper>
      <ApplicantButtonsWrapper>
        <Button>거절하기</Button>
        <Button>수락하기</Button>
      </ApplicantButtonsWrapper>
    </ApplicantCardWrapper>
  );
};

const ApplicantCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  padding: 32px 40px;
  align-items: flex-start;
  gap: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.color.black0};
`;

const ApplicantInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  .title {
    color: ${({ theme }) => theme.color.black3};
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.small};
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }

  .detail__info {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.xxlarge};
    font-style: normal;
    font-weight: 700;
    line-height: 40px;

    .nickname {
      color: ${({ theme }) => theme.color.black5};
    }
    .email {
      color: ${({ theme }) => theme.color.black2};
    }
  }
`;
const ApplicantButtonsWrapper = styled.div`
  position: absolute;
  right: 32px;
  bottom: 40px;
  display: flex;
  gap: 24px;
  align-items: flex-end;

  button {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: var(--Background-Button, #fff);
    color: var(--Font-text-muted, rgba(0, 0, 0, 0.45));
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
  }
`;

export default ApplicantCard;
