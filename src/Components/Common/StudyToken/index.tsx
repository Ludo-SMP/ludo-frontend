import { APPLY_STATUS, MEMBER_STATUS, STUDY_STATUS } from '@/Shared/study';
import { ApplyStatus, MemberStatus, StudyStatus } from '@/Types/study';
import styled from 'styled-components';

export interface StudyTokenProps {
  status?: StudyStatus | ApplyStatus | MemberStatus;
}

const StudyToken = ({ status }: StudyTokenProps) => {
  return (
    <StudyTokenWrapper status={status}>
      {status === 'PARTICIPATED'
        ? `${MEMBER_STATUS[status]}인 스터디`
        : status === 'UNCHECKED'
        ? `${APPLY_STATUS[status]}`
        : `${STUDY_STATUS[status]}`}
    </StudyTokenWrapper>
  );
};

const StudyTokenWrapper = styled.span<{ status: StudyStatus | ApplyStatus | MemberStatus }>`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;

  color: ${({ status, theme }) =>
    status === 'PARTICIPATED'
      ? theme.color.purple1
      : status === 'PROGRESS'
      ? theme.color.purple5
      : status === 'COMPLETED'
      ? `rgba(0, 0, 0, 0.25)`
      : theme.color.orange3};

  background: #f2f2f2;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  font-size: ${({ theme }) => theme.font.small};
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;

export default StudyToken;
