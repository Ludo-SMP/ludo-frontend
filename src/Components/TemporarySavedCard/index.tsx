import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { RecruitmentForm } from '@/Types/study';
import Button from '../Common/Button';
import { useSavedKeyStore, useSelectedCardStore } from '@/store/study';

const TemporarySavedCard = ({ savedKey, title }: Partial<RecruitmentForm> & { savedKey: string }) => {
  const navigate = useNavigate();

  const { setSelectedCard } = useSelectedCardStore();

  const [studyOrRecruitment, id] = savedKey?.split('-') ?? [];

  // 클릭된 savedKey는 스토어에 저장한다.
  const setSavedKey = useSavedKeyStore((state) => state.setSavedKey);

  return (
    <TemporarySavedCardWrapper
      onClick={() => {
        navigate(studyOrRecruitment === 'STUDY' ? ROUTES.STUDY.CREATE : `/studies/${id}/recruitments/create`);
        setSavedKey(savedKey);
      }}
    >
      <span className="title">{title}</span>
      <Button
        scheme="normal"
        onClick={(e) => {
          e.stopPropagation();
          localStorage.removeItem(savedKey);
          setSelectedCard(studyOrRecruitment === 'STUDY' ? 'STUDY' : 'RECRUITMENT');
        }}
      >
        삭제하기
      </Button>
    </TemporarySavedCardWrapper>
  );
};

const TemporarySavedCardWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 32px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.color.black0};

  .title {
    color: ${({ theme }) => theme.color.black5};
    font-family: 'Pretendard800';
    font-size: ${({ theme }) => theme.font.large};
    font-style: normal;
    font-weight: 800;
    line-height: 32px;
  }

  &:hover {
    cursor: pointer;
  }

  button {
    padding: 0 32px;
  }
`;

export default TemporarySavedCard;
