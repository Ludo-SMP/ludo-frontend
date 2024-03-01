import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '@/Constants/Router_Path';

interface TemporarySavedStudyCardProps {
  studyId?: number;
  title: string;
}

const TemporarySavedStudyCard = ({ studyId, title }: TemporarySavedStudyCardProps) => {
  return (
    <TemporarySavedStudyCardWrapper>
      <Link to={studyId ? ROUTER_PATH.createStudy : `/studies/${studyId}/recruitments/create`}>
        <span className="title">{title}</span>
      </Link>
    </TemporarySavedStudyCardWrapper>
  );
};

const TemporarySavedStudyCardWrapper = styled.div`
  display: flex;
  padding: 32px 40px;
  align-items: flex-start;
  width: 100%;
  gap: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};

  /* Card */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

export default TemporarySavedStudyCard;
