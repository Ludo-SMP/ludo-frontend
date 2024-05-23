import MemberProfile from '@/Components/MemberProfile';
import styled from 'styled-components';
import { Member } from '@/Types/study';

export interface MemberSectionProps {
  members: Member[];
}

const MemberSection = ({ members }: MemberSectionProps) => (
  <MemberSectionBox>
    {members?.map((member) => (
      <li key={member.id}>
        <MemberProfile {...member} />
      </li>
    ))}
  </MemberSectionBox>
);
const MemberSectionBox = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export default MemberSection;
