import { Profile } from '@/Assets';
import { Member } from '@/Types/study';
import styled from 'styled-components';
import { InfoField } from '../Common/InfoField';
import Button from '../Common/Button';
import { useState } from 'react';
import { useRefuseApplyMutation } from '@/Apis/study';
interface ApplicantCardProps extends Omit<Member, 'role'> {
  studyId: number;
  title: string;
  isOwner: boolean;
}

const ApplicantCard = ({ studyId, id, title, nickname, email, position, isOwner }: ApplicantCardProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  // 임시 RecruitmentId
  const recruitmentId = 1;
  const { mutate: refuseMutate } = useRefuseApplyMutation(studyId, recruitmentId, id);

  return (
    <ApplicantCardWrapper>
      <Profile width={180} height={180} />
      <ApplicantInfoWrapper>
        <div className="title">{title}</div>
        <div className="detail__info">
          <span className="nickname">{nickname}</span>
          <InfoField title="이메일" content={email} />
          <InfoField title="포지션" content={position?.name} />
        </div>
      </ApplicantInfoWrapper>
      {isOwner && (
        <ApplicantButtonsWrapper>
          <Button
            disabled={isDisabled}
            onClick={() => {
              refuseMutate();
              setIsDisabled(!isDisabled);
            }}
          >
            거절하기
          </Button>
          <Button
            disabled={isDisabled}
            scheme="secondary"
            onClick={() => {
              setIsDisabled(!isDisabled);
            }}
          >
            수락하기
          </Button>
        </ApplicantButtonsWrapper>
      )}
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
`;

export default ApplicantCard;
