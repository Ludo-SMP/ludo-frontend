import styled from 'styled-components';
import { ColumnDivider } from '../Common/Divider/ColumnDivider';

type MemberProfileProps = {
  imgUrl?: string;
  nickName: string;
  email: string;
  teamPosition: string;
  skillPosition: string;
};

const MemberProfile = ({ imgUrl, nickName, email, teamPosition, skillPosition }: MemberProfileProps) => {
  return (
    <MemberProfileWrapper>
      <div className="member__img">{imgUrl}</div>
      <div className="private__info">
        <div className="nickname">{nickName}</div>
        <div className="email">{email}</div>
      </div>
      <div className="positions">
        <div className="position">{teamPosition}</div>
        <ColumnDivider />
        <div className="position">{skillPosition}</div>
      </div>
    </MemberProfileWrapper>
  );
};

const MemberProfileWrapper = styled.div`
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 12px;
  width: 394px;
  height: 397px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.color.black1};
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 20px 0px ${(props) => props.theme.color.black1};

  .member__img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.gray1};
    padding-bottom: 4px;
  }

  .private__info {
    .nickname {
      color: ${(props) => props.theme.color.black4};
      text-align: center;
      font-size: ${(props) => props.theme.font.xlarge};
      font-weight: 700;
      line-height: 44px;
      letter-spacing: -0.2px;
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
    align-items: center;
    gap: 12px;

    .position {
      width: 80px;
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
