import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { Card } from '@/Types/study';
import Button from '../Common/Button';

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
      <ButtonsWrapper>
        <Button scheme="normal">글 삭제하기</Button>
        <Button scheme="secondary">이어서 작성하기</Button>
      </ButtonsWrapper>
    </TemporarySavedCardWrapper>
  );
};

const TemporarySavedCardWrapper = styled.div`
  display: flex;
  padding: 32px 40px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};

  &:hover {
    cursor: pointer;
  }

  /* Card */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export default TemporarySavedCard;
