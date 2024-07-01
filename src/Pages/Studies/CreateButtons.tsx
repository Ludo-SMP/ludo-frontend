import { useNavigate } from 'react-router-dom';
import { Buttons, StudyCreateForm } from './Layout';
import { useTempSaved } from '@/Hooks/useTempSaved';
import Button from '@/Components/Common/Button';
import { saveTemporary } from '@/utils/temporarySavedUtils';
import Modal from '@/Components/Common/Modal';
import { RecruitFormWithSelect } from '@/Types/study';
import { useState } from 'react';

interface CreateButtonsProps {
  type?: 'STUDY' | 'RECRUITMENT';
  savedForm?: StudyCreateForm | RecruitFormWithSelect;
  studyId?: number;
}

const CreateButtons = ({ type = 'STUDY', studyId = 1, savedForm }: CreateButtonsProps) => {
  const navigate = useNavigate();
  const { savedKey } = useTempSaved();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <Buttons>
      <Button type="button" onClick={() => setModalOpen(true)}>
        임시저장
      </Button>
      <Button scheme="secondary">등록하기</Button>
      {isModalOpen && (
        <Modal
          handleApprove={() => {
            setModalOpen(false);
            saveTemporary(savedKey, studyId, type, savedForm);
            navigate('/mypage');
          }}
          approveBtnText="확인하기"
          handleCancel={() => setModalOpen(false)}
          cancelBtnText="취소하기"
          title="작성 중인 스터디 생성 글을 임시 저장 하시겠습니까?"
        >
          임시 저장한 글은 ‘마이 페이지 {'>'} 임시 저장된 글’ 에서 확인하실 수 있습니다.
        </Modal>
      )}
    </Buttons>
  );
};

export { CreateButtons };
