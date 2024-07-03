import MemberProfile from '@/Components/MemberProfile';
import styled from 'styled-components';
import { Member } from '@/Types/study';
import { isToday } from 'date-fns';

export interface MemberSectionProps {
  members: Member[];
  userId: number;
  isStudyEnd: boolean;
  studyId: number;
}

export const MemberSection = ({ members, userId, isStudyEnd, studyId }: MemberSectionProps) => (
  <MemberSectionBox>
    {members?.map((member) => (
      <li key={member.id}>
        <MemberProfile
          totalAttendance={member.totalAttendance}
          isSelf={member.id === userId}
          studyId={studyId}
          state={
            isStudyEnd
              ? member.isReviewedParticipant
                ? 'reviewEnd'
                : 'needReview'
              : member.role === 'PENDING'
                ? 'needLeaveApproval'
                : // 참고: new Date(null) 은 UNIX epoch time인 1970년 1월 1일 00:00:00 UTC를 반환한다.
                  isToday(new Date(member.recentAttendanceDate))
                  ? 'attended'
                  : 'unattended'
          }
          {...member}
        />
      </li>
    ))}
  </MemberSectionBox>
);

const MemberSectionBox = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
