import styled from 'styled-components';
import { ModalContainer } from './ModalContainer';
import { useOutSideClick } from '../../../Hooks/useOutsideClick';
import { useRef } from 'react';

type ModalProps = {
  onClose: () => void;
  open: boolean;
  children?: React.ReactNode;
};

export const ModalContent = ({ onClose }: ModalProps) => {
  const ModalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(ModalRef, handleClose);

  return (
    <div>
      <ModalContainer>
        <Overlay>
          <Modal ref={ModalRef}>
            <ModalContainers>
              <ModalTitle>기술스택</ModalTitle>
            </ModalContainers>
          </Modal>
        </Overlay>
      </ModalContainer>
    </div>
  );
};

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const Modal = styled.div`
  display: flex;
  box-shadow: #64646f 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid #f0f0f0;
  border-radius: 20px;
  bottom: 70px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainers = styled.section`
  padding: 32px 52px;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
  height: 882px;
`;

const ModalTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
  line-height: 40px;
`;
