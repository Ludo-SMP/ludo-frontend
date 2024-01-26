import styled from 'styled-components';

// type ModalProps = {
//   onClose?: () => void;
// };

export const ModalContent = () => {
  return (
    <>
      <Modal className="modal">
        <ModalContainer>
          <ModalTitle>기술스택</ModalTitle>
        </ModalContainer>
      </Modal>
    </>
  );
};

const Modal = styled.div`
  display: flex;
  width: 1200px;
  height: 882px;
  /* justify-content: space-evenly; */
  /* align-items: center; */
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

const ModalContainer = styled.section`
  padding: 32px 52px;
  flex-direction: column;
  align-items: flex-start;
`;

const ModalTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
  line-height: 40px;
`;
