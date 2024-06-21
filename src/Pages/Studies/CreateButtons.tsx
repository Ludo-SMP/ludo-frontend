import { useNavigate } from 'react-router-dom';
import { Buttons, StudyCreateForm } from './Layout';
import { useTempSaved } from '@/Hooks/useTempSaved';
import Button from '@/Components/Common/Button';
import { saveTemporary } from '@/utils/temporarySavedUtils';
import { useModalStore } from '@/store/modal';
import Modal from '@/Components/Common/Modal';

interface CreateButtonsProps {
  type?: 'STUDY' | 'RECRUITMENT';
  formData?: StudyCreateForm;
  studyId?: number;
}

const CreateButtons = ({ type = 'STUDY', studyId = 1, formData }: CreateButtonsProps) => {
  const navigate = useNavigate();
  const { savedKey } = useTempSaved();

  const { isModalOpen, closeModal, openModal } = useModalStore();

  return (
    <Buttons>
      <Button type="button" onClick={openModal}>
        임시저장
      </Button>
      <Button scheme="secondary">등록하기</Button>
      {isModalOpen && (
        <Modal
          handleApprove={() => {
            closeModal();
            saveTemporary(savedKey, studyId, type, formData);
            navigate('/mypage');
          }}
          cancelBtnText="취소하기"
          title="작성 중인 스터디 생성 글을 임시 저장 하시겠습니까?"
          approveBtnText="확인하기"
        >
          임시 저장한 글은 ‘마이 페이지 {'>'} 임시 저장된 글’ 에서 확인하실 수 있습니다.
        </Modal>
      )}
    </Buttons>
  );
};

export { CreateButtons };
