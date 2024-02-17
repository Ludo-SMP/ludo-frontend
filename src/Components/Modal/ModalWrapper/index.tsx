import { ReactNode } from 'react';
import styled from 'styled-components';

export interface BtnPropsType {
  content: string;
}

export interface ModalWrapperProps {
  closeModal?: () => void;
  children: ReactNode;
  title?: string;
  approveBtnProps: BtnPropsType;
  cancelBtnProps?: BtnPropsType;
}

const ModalWrapper = ({ closeModal, children, title, approveBtnProps, cancelBtnProps }: ModalWrapperProps) => {
  return (
    <>
      <ModalContainerWrapper>
        <ModalContentWrapper>
          <div className="title">{title}</div>
          {children}
          <ModalBtnsWrapper cancelBtn={cancelBtnProps}>
            {cancelBtnProps ? (
              <button onClick={closeModal} className="cancel__btn">
                {cancelBtnProps?.content}
              </button>
            ) : null}
            <button onClick={closeModal} className="approve__btn">
              {approveBtnProps?.content}
            </button>
          </ModalBtnsWrapper>
        </ModalContentWrapper>
      </ModalContainerWrapper>
    </>
  );
};

const ModalContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  width: 600px;
  padding: 32px 40px;
  border-radius: 20px;
  position: relative;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  color: ${(props) => props.theme.color.black4};
  background: #fff;
  gap: 12px;

  .title {
    color: rgba(0, 0, 0, 0.95);
    text-align: start;
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.large};
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }
`;

const ModalBtnsWrapper = styled.div<{ cancelBtn: BtnPropsType }>`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  padding-top: 20px;

  button {
    display: flex;
    padding: 0px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 600;
    line-height: 48px;
  }

  .approve__btn {
    width: ${(props) => (props.cancelBtn ? '338px' : '100%')};
    color: 'rgba(255, 255, 255, 0.85)';
    background-color: ${(props) => props.theme.color.purple5};
  }

  .cancel__btn {
    width: 158px;
    color: ${(props) => props.theme.color.black2};
    background-color: ${(props) => props.theme.color.white};
  }
`;

export default ModalWrapper;
