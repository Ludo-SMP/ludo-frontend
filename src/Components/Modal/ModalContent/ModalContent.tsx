import styled from 'styled-components';
import { ModalContainer } from './ModalContainer';
import { useOutSideClick } from '../../../Hooks/useOutsideClick';
import { useRef } from 'react';
import { SearchBar } from './SearchBar';
import { FilterContent } from './FilterContent';
import { StackContent } from './StackContent';
import { CancelButton } from './ModalButton/CancelButton';
import { SelectButton } from './ModalButton/SelectButton';

type ModalProps = {
  onClose: () => void;
  open: boolean;
  children?: React.ReactNode;
};

export const ModalContent = ({ onClose }: ModalProps) => {
  const ModalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
    document.body.style.overflow = 'unset';
  };

  useOutSideClick(ModalRef, handleClose);

  return (
    <div>
      <ModalContainer>
        <Overlay>
          <Modal ref={ModalRef}>
            <ModalContainers>
              <ModalTitle>기술스택</ModalTitle>
              <SearchBar />
              <FilterContent />
              <StackContent />
              <ButtonWrapper>
                <CancelButton>선택취소</CancelButton>
                <SelectButton>선택완료</SelectButton>
              </ButtonWrapper>
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
  height: 932px;
`;

const ButtonWrapper = styled.section`
  width: 720px;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex-direction: row;
  /* margin-left: 240px; */
  margin: auto;
`;

const ModalTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
  line-height: 40px;
`;
