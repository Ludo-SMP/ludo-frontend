import styled from 'styled-components';
import { ColumnDivider } from '../Common/Divider/ColumnDivider';
import { More, Profile } from '@/Assets';
import { Member } from '@/Types/study';
import { ROLE } from '@/Shared/study';
import { useEffect, useRef, useState } from 'react';
import { ROUTES } from '@/Constants/route';
import { Link } from 'react-router-dom';
import { LeaveModal } from '../LeaveModal';
import { match } from 'ts-pattern';
import { useStudyForceLeaveMutation } from '@/Hooks/study/useStudyForceLeaveMutation';
import { useStudyLeaveRequestMutation } from '@/Hooks/study/useStudyLeaveRequestMutation';
import Modal from '../Common/Modal';
import { LEAVE } from '@/Constants/messages';

export interface MemberProfileProps extends Member {
  /** 스터디원의 프로필 이미지 URL */
  imgUrl?: string;

  /** 당일 출석 여부 */
  attended?: boolean;

  /** 해당 멤버가 자신인지 나타냅니다. */
  isSelf?: boolean;

  /** 해당 멤버가 속한 스터디 ID */
  studyId?: number;
}

/** 스터디원의 프로필을 보여줍니다. */
const MemberProfile = ({
  nickname,
  email,
  role,
  position,
  totalAttendance = 0,
  attended = false,
  isSelf = true,
  studyId,
}: MemberProfileProps) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isForceLeaveSuccessModalOpen, setIsForceLeaveSuccessModalOpen] = useState(false);
  const [isLeaveRequestSuccessModalOpen, setIsLeaveRequestSuccessModalOpen] = useState(false);

  const { mutate: mutateForceLeave } = useStudyForceLeaveMutation(studyId);
  const { mutate: mutateRequestLeave } = useStudyLeaveRequestMutation(studyId);

  return (
    <MemberProfileWrapper>
      {isSelf && (
        <OptionsButton onClick={() => setIsOptionsOpen(true)}>
          <More />
          {isOptionsOpen && (
            <Options
              onSelect={(action) => (
                match(action)
                  .with('leave', () => setIsLeaveModalOpen(true))
                  .exhaustive(),
                setIsOptionsOpen(false)
              )}
              onClose={() => setIsOptionsOpen(false)}
            />
          )}
        </OptionsButton>
      )}
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
      {isLeaveModalOpen && (
        <LeaveModal
          handleApprove={(value) => (
            value === 'request'
              ? (studyId && mutateRequestLeave(), setIsLeaveRequestSuccessModalOpen(true))
              : (studyId && mutateForceLeave(), setIsForceLeaveSuccessModalOpen(true)),
            setIsLeaveModalOpen(false)
          )}
          handleCancel={() => setIsLeaveModalOpen(false)}
        />
      )}
      {isForceLeaveSuccessModalOpen && (
        <Modal title={LEAVE.MEMBER.SUCCESS.force.title} handleApprove={() => setIsForceLeaveSuccessModalOpen(false)}>
          {LEAVE.MEMBER.SUCCESS.force.content}
        </Modal>
      )}
      {isLeaveRequestSuccessModalOpen && (
        <Modal
          title={LEAVE.MEMBER.SUCCESS.request.title}
          handleApprove={() => setIsLeaveRequestSuccessModalOpen(false)}
        >
          {LEAVE.MEMBER.SUCCESS.request.content}
        </Modal>
      )}
    </MemberProfileWrapper>
  );
};

const Options = ({
  onClose = () => void 0,
  onSelect = () => void 0,
}: {
  onClose?: () => void;
  onSelect: (action: 'leave') => void;
}) => {
  const ref = useRef<null | HTMLUListElement>(null);

  const blur = ({ target }: MouseEvent) => ref.current?.contains(target as Node) || onClose();

  useEffect(
    () => (document.addEventListener('mousedown', blur), () => document.removeEventListener('mousedown', blur)),
    [onClose],
  );

  return (
    <Menu ref={ref}>
      <MenuItem>
        <Link to={ROUTES.MYPAGE.HOME}>마이 페이지</Link>
      </MenuItem>
      <MenuItem onClick={() => onSelect('leave')}>스터디 탈퇴하기</MenuItem>
    </Menu>
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
  position: relative;

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

const OptionsButton = styled.button`
  position: absolute;
  top: 24px;
  right: 16px;
  padding: 0;
  background-color: transparent;
  text-align: start;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.black1};
  box-shadow: 0px 4px 20px 0px ${({ theme }) => theme.color.black1};
  width: 184px;
  padding: 8px 0;
  background: ${({ theme }) => theme.color.white};
  position: absolute;
  top: -8px;
`;

const MenuItem = styled.li`
  display: flex;
  padding: 12px 8px 12px 16px;
  align-items: center;
  color: ${({ theme }) => theme.color.black3};
  font-family: Pretendard600;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;

  &:hover {
    color: ${({ theme }) => theme.color.black4};
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
