import { CREATE_STUDY, SEARCH } from '@/Constants/messages';
import { useLoginStore } from '@/Store/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';
import styled from 'styled-components';
import { ROUTER_PATH } from '@/Constants/Router_Path';
import { useModalStore } from '@/Store/modal';
import Modal from '../Common/Modal';

const NotFound = () => {
  const { isLoggedIn } = useLoginStore();
  const { isModalOpen, openModal } = useModalStore();
  const navigate = useNavigate();
  const handleNotFound = () => {
    if (isLoggedIn) {
      navigate(ROUTER_PATH.createStudy);
      return;
    }
    openModal();
  };
  return (
    <NotFoundWrapper>
      <div className="notFound__image"></div>
      <div className="notFound__text">{SEARCH.NOT_FONND.content}</div>
      <Button onClick={() => handleNotFound()}>
        <span>스터디 직접 생성하기</span>
      </Button>
      {!isLoggedIn && isModalOpen && (
        <Modal
          title={CREATE_STUDY.LOGIN.title}
          handleApprove={() => navigate(ROUTER_PATH.login)}
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
    display: flex;
    padding: 4px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 48px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 1px solid ${({ theme }) => theme.color.black1};
    background: ${(props) => props.theme.color.purple1};
  }
`;

export default NotFound;
