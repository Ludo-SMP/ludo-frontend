import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { ROUTES } from '@/Constants/route';
import { RecruitmentForm } from '@/Types/study';
import Button from '../Common/Button';
import { useSavedKeyStore } from '@/store/study';
import { useModalStore } from '@/store/modal';
import { media } from '@/Styles/theme';

interface Props {
  savedKey: string;
  onRemove: (savedKey: string) => void;
}

const TemporarySavedCard = ({ savedKey, title }: Partial<RecruitmentForm> & Props) => {
  const navigate = useNavigate();

  const { openModal } = useModalStore();

  const [studyOrRecruitment, id] = savedKey?.split('-') ?? [];

  // 클릭된 savedKey는 스토어에 저장한다.
  const setSavedKey = useSavedKeyStore((state) => state.setSavedKey);

  return (
    <TemporarySavedCardBox
      onClick={() => {
        navigate(studyOrRecruitment === 'STUDY' ? ROUTES.STUDY.CREATE : `/studies/${id}/recruitments/create`);
        setSavedKey(savedKey);
      }}
    >
      <span className="title">{title || '제목 없음'}</span>
      <Button
        scheme="normal"
        onClick={(e) => {
          e.stopPropagation();
          openModal();
          setSavedKey(savedKey);
        }}
      >
        삭제하기
      </Button>
    </TemporarySavedCardBox>
  );
};

const TemporarySavedCardBox = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  border-radius: 12px;
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

  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);

  ${media.custom(600)} {
    flex-direction: column;
    width: 300px;
    padding: 16px;
    gap: 16px;

    button {
      width: 100%;
    }
  }
`;

export default React.memo(TemporarySavedCard);
