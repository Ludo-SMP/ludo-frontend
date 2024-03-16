import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { Card } from '@/Types/study';

export interface TemporarySavedCardProps {
  id?: number;
  title: string;
  card: Card;
  content?: string;
}

const TemporarySavedCard = ({ id, title, card, content }: TemporarySavedCardProps) => {
  const navigate = useNavigate();
  return (
    <TemporarySavedCardWrapper
      onClick={() => {
        navigate(card === 'STUDY' ? ROUTES.STUDY.CREATE : `/studies/${id}/recruitments/create`);
      }}
    >
      <span className="title">{title}</span>
      {content && <div>{content}</div>}
    </TemporarySavedCardWrapper>
  );
};

const TemporarySavedCardWrapper = styled.div`
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

export default TemporarySavedCard;
