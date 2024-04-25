import { APPLY_STATUS, MEMBER_STATUS, STUDY_STATUS } from '@/Shared/study';
import { ApplyStatus, MemberStatus, StudyStatus } from '@/Types/study';
import styled from 'styled-components';

export interface StudyTokenProps {
  /** 스터디 상태 */
  status: StudyStatus | ApplyStatus | MemberStatus;
}

const StudyToken = ({ status }: StudyTokenProps) => {
  return (
    <StudyTokenWrapper status={status}>
      {status === 'PARTICIPATED'
        ? `${MEMBER_STATUS[status]}인 스터디`
        : status === 'UNCHECKED' || status === 'ACCEPTED' || status === 'REFUSED'
          ? `${APPLY_STATUS[status]}`
          : `${STUDY_STATUS[status]}`}
    </StudyTokenWrapper>
  );
};

const StudyTokenWrapper = styled.span<{ status: ApplyStatus | MemberStatus | StudyStatus }>`
  display: flex;
  padding: 0px 12px;
  justify-content: center;
  align-items: center;

  color: ${({ status, theme }) =>
    status === 'PARTICIPATED'
      ? theme.color.purple1
      : status === 'COMPLETED' || status === 'REFUSED' || status === 'RECRUITED'
        ? `rgba(0, 0, 0, 0.25)`
        : status === 'PROGRESS'
          ? theme.color.purple5
          : status === 'RECRUITING'
            ? theme.color.black3
            : status === 'ACCEPTED'
              ? '#AD8395'
              : theme.color.orange3};

  background: #f2f2f2;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  font-size: ${({ theme }) => theme.font.small};
  font-family: 'Pretendard500';
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export default StudyToken;
