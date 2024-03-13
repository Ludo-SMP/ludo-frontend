import styled from 'styled-components';
import { ColumnDivider } from '../Common/Divider/ColumnDivider';
import { Profile } from '@/Assets';
import { Member } from '@/Types/study';
import { ROLE } from '@/Shared/study';

export interface MemberProfileProps extends Member {
  imgUrl?: string;
}

const MemberProfile = ({ nickname, email, role, position }: MemberProfileProps) => {
  return (
    <MemberProfileWrapper>
      <Profile width={160} height={160} />
      <div className="private__info">
        <div className="nickname">{nickname}</div>
        <div className="email">{email}</div>
      </div>
      <div className="positions">
        <div className="position">{ROLE[role]}</div>
        <ColumnDivider />
        <div className="position">{position.name}</div>
      </div>
    </MemberProfileWrapper>
  );
};

const MemberProfileWrapper = styled.div`
  display: flex;
  width: 288px;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${(props) => props.theme.color.black1};
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 20px 0px ${(props) => props.theme.color.black1};

  .private__info {
    .nickname {
      color: ${(props) => props.theme.color.black4};
      text-align: center;
      font-family: Pretendard;
      font-size: ${(props) => props.theme.font.xlarge};
      font-style: normal;
      font-weight: 700;
      line-height: 44px;
    }
    .email {
      color: ${(props) => props.theme.color.black2};
      text-align: center;
      font-size: ${(props) => props.theme.font.medium};
      font-weight: 400;
      line-height: 40px;
      letter-spacing: -0.2px;
    }
  }

  .positions {
    display: flex;
    justify-content: center;
    padding: 4px 0;
    align-items: center;
    gap: 16px;

    .position {
      color: ${(props) => props.theme.color.black2};
      text-align: center;
      font-size: ${(props) => props.theme.font.medium};
      font-weight: 600;
      line-height: 40px;
      letter-spacing: -0.2px;
    }
  }
`;

export default MemberProfile;
