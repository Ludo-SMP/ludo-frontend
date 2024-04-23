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
        글 삭제하기
      </Button>
    </TemporarySavedCardWrapper>
  );
};

const TemporarySavedCardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 32px 40px;
  align-items: center;
  gap: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};

  .title {
    font-size: 24px;
  }

  &:hover {
    cursor: pointer;
  }

  /* Card */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

export default TemporarySavedCard;
