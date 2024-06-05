import styled from 'styled-components';
import { ColumnDivider } from '../Common/Divider/ColumnDivider';
import { Profile } from '@/Assets';
import { Member } from '@/Types/study';
import { ROLE } from '@/Shared/study';

export interface MemberProfileProps extends Member {
  /** 스터디원의 프로필 이미지 URL */
  imgUrl?: string;

  /** 스터디원의 총합 출석 횟수 */
  totalAttendance?: number;

  /** 당일 출석 여부 */
  attended?: boolean;
}

/** 스터디원의 프로필을 보여줍니다. */
const MemberProfile = ({
  nickname,
  email,
  role,
  position,
  totalAttendance = 0,
  attended = false,
}: MemberProfileProps) => {
  return (
    <MemberProfileWrapper>
      <Profile width={120} height={120} />
      <div className="private__info">
        <div className="nickname">{nickname}</div>
        <div className="email">{email}</div>
        <AttendanceBadge $attended={attended}>
          {attended ? `${totalAttendance}일 출석 완료!` : `${totalAttendance}일 출석 중`}
        </AttendanceBadge>
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
  width: 248px;
  min-width: 248px;
  max-width: 288px;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.color.black1};
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 20px 0px ${(props) => props.theme.color.black0};

  .private__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    .nickname {
      color: ${(props) => props.theme.color.black5};
      font-family: 'Pretendard600';
      font-size: ${(props) => props.theme.font.medium};
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
    }

    .email {
      color: ${(props) => props.theme.color.black2};
      font-size: ${(props) => props.theme.font.small};
      font-family: Pretendard400;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .positions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .position {
      color: ${(props) => props.theme.color.black2};
      font-size: ${(props) => props.theme.font.small};
      font-family: Pretendard400;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;

const AttendanceBadge = styled.span<{
  $attended: boolean;
}>`
  display: flex;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: ${({ theme, $attended }) =>
    $attended ? `linear-gradient(93deg, #6262b2, ${theme.color.orange3})` : `transparent`};
  color: ${({ theme, $attended }) => ($attended ? theme.color.white : theme.color.black2)};
  text-align: center;
  font-family: Pretendard400;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export default MemberProfile;
