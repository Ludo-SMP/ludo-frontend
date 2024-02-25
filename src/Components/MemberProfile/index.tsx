import styled from 'styled-components';
import { ColumnDivider } from '../Common/Divider/ColumnDivider';
<<<<<<< HEAD

type MemberProfileProps = {
=======
import { Profile } from '@/Assets';

export interface MemberProfileProps {
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  imgUrl?: string;
  nickName: string;
  email: string;
  teamPosition: string;
  skillPosition: string;
<<<<<<< HEAD
};
=======
}
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b

const MemberProfile = ({ imgUrl, nickName, email, teamPosition, skillPosition }: MemberProfileProps) => {
  return (
    <MemberProfileWrapper>
<<<<<<< HEAD
      <div className="member__img">{imgUrl}</div>
=======
      {/* 이미지 들어가는 자리 <div className="member__img">{imgUrl}</div>  */}
      <Profile width={160} height={160} />
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
<<<<<<< HEAD
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 12px;
  width: 394px;
  height: 397px;
  border-radius: 20px;
=======
  width: 288px;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  border: 1px solid ${(props) => props.theme.color.black1};
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 20px 0px ${(props) => props.theme.color.black1};

<<<<<<< HEAD
  .member__img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.gray1};
    padding-bottom: 4px;
  }

=======
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  .private__info {
    .nickname {
      color: ${(props) => props.theme.color.black4};
      text-align: center;
<<<<<<< HEAD
      font-size: ${(props) => props.theme.font.xlarge};
      font-weight: 700;
      line-height: 44px;
      letter-spacing: -0.2px;
=======
      font-family: Pretendard;
      font-size: ${(props) => props.theme.font.xlarge};
      font-style: normal;
      font-weight: 700;
      line-height: 44px;
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
<<<<<<< HEAD
    align-items: center;
    gap: 12px;

    .position {
      width: 80px;
=======
    padding: 4px 0;
    align-items: center;
    gap: 16px;

    .position {
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
