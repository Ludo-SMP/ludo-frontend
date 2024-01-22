import styled from 'styled-components';
import { ColumnDivider } from '../Common/Divider/ColumnDivider';

export interface MemberProfileProps {
  imgUrl?: string;
  nickName: string;
  email: string;
  teamPosition: string;
  position: string;
}

const MemberProfile: React.FC = ({ imgUrl, nickName, email, teamPosition, skillPosition }) => {
  return (
    <MemberProfileWrapper>
      <div className="member__img"></div>
      <div className="member__nickname">{nickName}</div>
      <div className="member__email">{email}</div>
      <div className="member__positions">
        <div className="team__position">{teamPosition}</div>
        <ColumnDivider />
        <div className="skill__position">{skillPosition}</div>
      </div>
    </MemberProfileWrapper>
  );
};

const MemberProfileWrapper = styled.div`
  display: flex;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 225px;
  height: 260px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

  .member {
    &__img {
      width: 140px;
      height: 140px;
      background-color: #F2F3F3;
      border-radius: 70px;
    }

    &__nickname {
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
    }

    &__email {
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
    }

    &__positions {
      display: flex;
      width: 312px;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }
  }
`;

export default MemberProfile;
