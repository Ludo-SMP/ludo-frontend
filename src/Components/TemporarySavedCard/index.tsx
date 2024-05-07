import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { ROUTES } from '@/Constants/route';
import { RecruitmentForm } from '@/Types/study';
import Button from '../Common/Button';
import { useSavedKeyStore } from '@/store/study';
import { useModalStore } from '@/store/modal';

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
    <TemporarySavedCardWrapper>
      <span className="title">{title || '제목 없음'}</span>
      <div className="button__wrap">
        <Button
          scheme="normal"
          onClick={() => {
            openModal();
            setSavedKey(savedKey);
          }}
        >
          글 삭제하기
        </Button>
        <Button
          scheme="secondary"
          onClick={() => {
            navigate(studyOrRecruitment === 'STUDY' ? ROUTES.STUDY.CREATE : `/studies/${id}/recruitments/create`);
            setSavedKey(savedKey);
          }}
        >
          이어 작성하기
        </Button>
      </div>
    </TemporarySavedCardWrapper>
  );
};

const TemporarySavedCardWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 32px;
  justify-content: space-between;
  padding: 32px 40px;
  align-items: center;
  gap: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
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

  .title {
    font-size: 24px;
  }

  &:hover {
    cursor: pointer;
  }

  .button__wrap {
    display: flex;
    gap: 12px;
  }

  /* Card */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

export default React.memo(TemporarySavedCard);
