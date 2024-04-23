import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';
import { Card, RecruitmentForm } from '@/Types/study';
import Button from '../Common/Button';
import { useSavedKeyStore } from '@/store/study';
import { useModalStore } from '@/store/modal';
import Modal from '../Common/Modal';
import { DELETE } from '@/Constants/messages';
import React from 'react';

interface Props {
  savedKey: string;
  onRemove: (savedKey: string) => void;
}

const TemporarySavedCard = ({ savedKey, title, onRemove }: Partial<RecruitmentForm> & Props) => {
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModalStore();

  const [studyOrRecruitment, id] = savedKey?.split('-') ?? [];

  // 클릭된 savedKey는 스토어에 저장한다.
  const setSavedKey = useSavedKeyStore((state) => state.setSavedKey);

  console.log('title', title);

  const deleteCb = () => {
    console.log(savedKey, title);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          handleApprove={() => {
            console.log('삭제', savedKey, title);
            localStorage.removeItem(savedKey);
            onRemove(savedKey);
            closeModal();
          }}
          cancelBtnText="취소하기"
          title={DELETE.TEMP_SAVED.title}
          approveBtnText="삭제하기"
        >
          {savedKey} {title}
          {DELETE.TEMP_SAVED.content}
        </Modal>
      )}
      <TemporarySavedCardWrapper>
        <span className="title">{title || '제목 없음'}</span>
        <div className="button__wrap">
          <Button
            scheme="normal"
            onClick={() => {
              openModal();
              console.log('삭제', savedKey, title);
            }}
          >
            글 삭제하기
          </Button>
          <Button
            scheme="secondary"
            onClick={() => {
              console.log('이어 작성하기');
              navigate(studyOrRecruitment === 'STUDY' ? ROUTES.STUDY.CREATE : `/studies/${id}/recruitments/create`);
              setSavedKey(savedKey);
            }}
          >
            이어 작성하기
          </Button>
        </div>
      </TemporarySavedCardWrapper>
    </>
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

  .button__wrap {
    display: flex;
    gap: 12px;
  }

  /* Card */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

export default React.memo(TemporarySavedCard);
