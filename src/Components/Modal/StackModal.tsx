// 기술스택모달
// import { MouseEventHandler, PropsWithChildren } from 'react';
// import { PropsWithChildren } from 'react';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModalContent/ModalContent';
import { StackButton } from '../Button/Studies/StackButton';

// type ModalProps = {
//   closeModal?: () => void;
// };

// {}: PropsWithChildren<ModalProps>
export const StackModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (showModal && !modalRef.current?.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [showModal]);
  return (
    <div ref={modalRef}>
      <StackButton onClick={() => setShowModal(true)}>ex) Typescript</StackButton>
      {showModal && createPortal(<ModalContent />, document.body)}
    </div>
  );
};
