// 기술스택모달
import { useState } from 'react';
import { ModalContent } from './ModalContent/ModalContent';
import { StackButton } from '../Button/Studies/StackButton';

// type ModalProps = {
//   closeModal?: () => void;
//   open: () => void;
// };

//
export const StackModal = () => {
  const [showModal, setShowModal] = useState(false);
  const onClickButton = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="Modals">
      <StackButton onClick={onClickButton}>ex) Typescript</StackButton>
      {showModal && (
        <ModalContent
          open={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};
