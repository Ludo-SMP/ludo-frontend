import { Profile, More } from '@/Assets';
import { Member } from '@/Types/study';
import styled from 'styled-components';

import Button from '../Common/Button';

type MemberCardProps = Pick<Member, 'nickname' | 'email'>;

const MemberCard = ({ nickname, email }: MemberCardProps) => {
  return (
    <MemberCardWrapper>
      <Profile width={180} height={180} />
      <MemberInfoWrapper>
        <span className="nickname">{nickname}</span>
        <span className="email">{email}</span>
      </MemberInfoWrapper>
      <ApplicantButtonsWrapper>
        <Button>
          <More width={32} height={32} />
        </Button>
      </ApplicantButtonsWrapper>
    </MemberCardWrapper>
  );
};

const MemberCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 28px 0px;
  align-items: flex-start;
  gap: 24px;
`;

const MemberInfoWrapper = styled.div`
  display: flex;
  padding: 20px 20px 18px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  .nickname {
    font-size: ${({ theme }) => theme.font.xxlarge};
    color: ${({ theme }) => theme.color.black5};
    font-weight: 700;
  }
  .email {
    font-size: ${({ theme }) => theme.font.medium};
    color: rgba(0, 0, 0, 0.4);
    font-weight: 400;
  }
`;
const ApplicantButtonsWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
`;

export default MemberCard;
