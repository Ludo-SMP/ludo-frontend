import styled from 'styled-components';
import Button from '../Button';

export interface ModalProps {
  closeModal?: () => void;
  children: React.ReactNode;
  alignTitle?: 'flex-start' | 'center';
  title?: string;
  handleApprove: () => void;
  handleCancel?: () => void;
  approveBtnText: string;
  cancelBtnText?: string;
  isBtnWidthEqual?: boolean;
}

const Modal = ({
  closeModal,
  children,
  alignTitle = 'flex-start',
  title,
  handleApprove,
  handleCancel,
  approveBtnText,
  cancelBtnText,
  isBtnWidthEqual = true,
}: ModalProps) => {
  return (
    <ModalBackDropWrapper>
      <ModalWrapper>
        <ModalInfoWrapper alignTitle={alignTitle}>
          <div className="title">{title}</div>
          <ModalContentWrapper>{children}</ModalContentWrapper>
        </ModalInfoWrapper>
        <ModalBtnsWrapper onClick={closeModal} isBtnWidthEqual={isBtnWidthEqual}>
          {handleCancel && (
            <Button className="cancel__btn" onClick={handleCancel}>
              {cancelBtnText}
            </Button>
          )}
          <Button className="approve__btn" onClick={handleApprove}>
            {approveBtnText}
          </Button>
        </ModalBtnsWrapper>
      </ModalWrapper>
    </ModalBackDropWrapper>
  );
};
const ModalBackDropWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  background-color: ${({ theme }) => theme.color.white};
`;

const ModalInfoWrapper = styled.div<{ alignTitle: 'flex-start' | 'center' }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  .title {
    display: flex;
    justify-content: ${(props) => props.alignTitle || 'flex-start'};
    height: 40px;
    padding: 5px 0px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    color: ${({ theme }) => theme.color.black5};
    text-align: center;
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.large};
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
`;

const ModalContentWrapper = styled.div`
  display: flex;
  width: 520px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.black4};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

const ModalBtnsWrapper = styled.div<{ isBtnWidthEqual: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.isBtnWidthEqual ? `1fr 1fr` : `158fr 338fr`)};
  align-items: flex-start;
  grid-gap: 24px;
  align-self: stretch;

  button {
    display: flex;
    padding: 0 16px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
  }

  .cancel__btn {
    color: ${({ theme }) => theme.color.black3};
    background: ${({ theme }) => theme.color.white};
  }

  .approve__btn {
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.purple5};
    background: ${({ theme }) => theme.color.purple1};
  }
`;

// export default Modal;
// import { useState } from 'react';
// import styled from 'styled-components';

// function Modal() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <ModalContainer onClick={() => setIsOpen(!isOpen)}>
//         <ModalButton onClick={() => setIsOpen(!isOpen)}>open modal</ModalButton>
//         {isOpen ? (
//           <ModalBackDrop>
//             <ModalView onClick={(e) => e.stopPropagation()}>
//               HIII
//               <span onClick={() => setIsOpen(!isOpen)}>x</span>
//             </ModalView>
//           </ModalBackDrop>
//         ) : null}
//       </ModalContainer>
//     </div>
//   );
// }

// const ModalContainer = styled.div`
//   height: 150px;
//   text-align: center;
//   margin: 120px auto;
//   display: flex;
// `;

// const ModalButton = styled.button`
//   background-color: black;
//   width: 100px;
//   height: 50px;
//   color: white;
//   border-radius: 20px;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
// `;

// const ModalBackDrop = styled.div`
//   position: fixed;
//   z-index: 999;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.4);

//   /* 중앙 정렬 option 1 - display: grid */
//   /* display: grid;
//   place-items: center; */

//   /* 중앙 정렬 option 2 - display: flex */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalView = styled.div`
//   position: relative;
//   width: 300px;
//   border-radius: 20px;
//   height: 200px;
//   background-color: white;
//   display: flex;
// align-items: center;
// justify-content: center;

//   span {
//     position: absolute;
//     top: 5px;
//     right: 15px;
//   }
// `;

export default Modal;
