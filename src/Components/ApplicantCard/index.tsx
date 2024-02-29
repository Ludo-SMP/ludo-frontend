import { Profile } from '@/Assets';
import { MemberType } from '@/Types/study';
import styled from 'styled-components';
import { InfoField } from '../Common/InfoField';
import Button from '../Common/Button';

interface ApplicantCardProps extends Omit<MemberType, 'role'> {
  title: string;
}

const ApplicantCard = ({ title, nickname, email, position }: ApplicantCardProps) => {
  return (
    <ApplicantCardWrapper>
      <Profile width={180} height={180} />
      <ApplicantInfoWrapper>
        <div className="title">{title}</div>
        <div className="detail__info">
          <span className="nickname">{nickname}</span>
          <InfoField title="이메일" content={email} />
          <InfoField title="포지션" content={position} />
        </div>
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
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;

    .nickname {
      color: ${({ theme }) => theme.color.black5};
      font-family: Pretendard;
      font-size: ${({ theme }) => theme.font.xxlarge};
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
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
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black2};
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
  }
`;

export default ApplicantCard;
