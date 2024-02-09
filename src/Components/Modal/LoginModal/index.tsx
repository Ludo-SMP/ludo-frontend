import ModalWrapper from '../ModalWrapper';

interface LoginModalProps {
  closeModal: () => void;
}

const loginText =
  '스터디에 지원하기 위해서 로그인이 필요합니다.\n가입을 통해 루도의 더 많은 서비스를 즐길 수 있습니다.\n로그인을 진행하시겠습니까?';
export const LoginModal = ({ closeModal }: LoginModalProps) => {
  return (
    <ModalWrapper
      title={'로그인이 필요한 서비스입니다.'}
      closeModal={closeModal}
      approveBtnProps={{ content: '로그인하기' }}
      cancelBtnProps={{ content: '나중에하기' }}
    >
      {loginText}
    </ModalWrapper>
  );
};

export default LoginModal;
