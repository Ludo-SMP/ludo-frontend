import { CREATE_STUDY, SEARCH } from '@/Constants/messages';
import { useLoginStore } from '@/store/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';
import styled from 'styled-components';
import { ROUTES } from '@/Constants/route';
import { useModalStore } from '@/store/modal';
import Modal from '../Common/Modal';

const NotFound = () => {
  const { isLoggedIn } = useLoginStore();
  const { isModalOpen, openModal } = useModalStore();
  const navigate = useNavigate();
  const handleNotFound = () => {
    if (isLoggedIn) {
      navigate(ROUTES.STUDY.CREATE);
      return;
    }
    openModal();
  };
  return (
    <NotFoundWrapper>
      <div className="notFound__image"></div>
      <div className="notFound__text">{SEARCH.NOT_FONND.content}</div>
      <Button scheme="primary" onClick={() => handleNotFound()}>
        <span>스터디 직접 생성하기</span>
      </Button>
      {!isLoggedIn && isModalOpen && (
        <Modal
          title={CREATE_STUDY.LOGIN.title}
          handleApprove={() => navigate(ROUTES.AUTH.LOGIN)}
          approveBtnText="로그인하기"
          cancelBtnText="나중에 할래요"
          isBtnWidthEqual={false}
        >
          {CREATE_STUDY.LOGIN.content}
        </Modal>
      )}
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 40px;

  .notFound__image {
    margin: 0 auto;
    width: 316px;
    height: 160px;
    background-color: ${({ theme }) => theme.color.gray1};
  }

  .notFound__text {
    color: ${({ theme }) => theme.color.black4};
    text-align: center;
    font-size: ${({ theme }) => theme.font.medium};
    font-style: normal;
    font-weight: 500;
    white-space: pre-line;
    line-height: 40px;
  }

  button {
    font-size: 18px;
    padding: 4px 24px;
  }
`;

export default NotFound;
