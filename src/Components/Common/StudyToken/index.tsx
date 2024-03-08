import { APPLY_STATUS, MEMBER_STATUS, STUDY_STATUS } from '@/Shared/study';
import { ApplyStatus, MemberStatus, RecruitStatus, StudyStatus } from '@/Types/study';
import { getStudyState } from '@/Utils/status';
import styled from 'styled-components';

export interface StudyTokenProps {
  status: RecruitStatus | ApplyStatus | MemberStatus;
  startDate?: string;
  endDate?: string;
}

const StudyToken = ({ status, startDate, endDate }: StudyTokenProps) => {
  const correctedStatus =
    status === 'RECRUITED' || status === 'RECRUITING' ? getStudyState(startDate, endDate, status) : status;
  return (
    <StudyTokenWrapper correctedStatus={correctedStatus}>
      {status === 'PARTICIPATED'
        ? `${MEMBER_STATUS[status]}인 스터디`
        : status === 'UNCHECKED' || status === 'ACCEPTED' || status === 'REJECTED'
        ? `${APPLY_STATUS[status]}`
        : `${STUDY_STATUS[getStudyState(startDate, endDate, status)]}`}
    </StudyTokenWrapper>
  );
};

const StudyTokenWrapper = styled.span<{ correctedStatus: ApplyStatus | MemberStatus | StudyStatus }>`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;

  color: ${({ correctedStatus, theme }) =>
    correctedStatus === 'PARTICIPATED'
      ? theme.color.purple1
      : correctedStatus === ('COMPLETED' || 'REJECTED' || 'RECRUITED')
      ? `rgba(0, 0, 0, 0.25)`
      : correctedStatus === 'PROGRESS'
      ? theme.color.purple5
      : correctedStatus === 'RECRUITING'
      ? theme.color.black3
      : correctedStatus === 'ACCEPTED'
      ? '#AD8395'
      : theme.color.orange3};

  background: #5b4d4d;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  text-align: center;
  font-size: ${({ theme }) => theme.font.small};
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
`;

export default StudyToken;
