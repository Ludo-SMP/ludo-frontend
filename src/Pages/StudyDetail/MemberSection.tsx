import MemberProfile from '@/Components/MemberProfile';
import styled from 'styled-components';
import { Member } from '@/Types/study';
import { isToday } from 'date-fns';

export interface MemberSectionProps {
  members: Member[];
}

export const MemberSection = ({ members }: MemberSectionProps) => (
  <MemberSectionBox>
    {members?.map((member) => (
      <li key={member.id}>
        <MemberProfile
          totalAttendance={member.totalAttendance}
          // 참고: new Date(null) 은 UNIX epoch time인 1970년 1월 1일 00:00:00 UTC를 반환한다.
          attended={isToday(new Date(member.recentAttendanceDate))}
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
