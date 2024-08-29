import { SEARCH } from '@/Constants/messages';
import { useLoginStore } from '@/store/auth';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';
import styled from 'styled-components';
import { ROUTES } from '@/Constants/route';
import { useModalStore } from '@/store/modal';
import { NotFound } from '@/Assets';
import { media } from '@/Styles/theme';

/** 찾고자 하는 스터디가 존재하지 않을 때 대신 보여주는 화면입니다. */
const NotFoundResult = () => {
  const { isLoggedIn } = useLoginStore();
  const { openModal } = useModalStore();
  const navigate = useNavigate();
  const handleNotFoundResult = () => {
    if (isLoggedIn) {
      navigate(ROUTES.STUDY.CREATE);
      return;
    }
    openModal();
  };
  return (
    <NotFoundResultWrapper>
      <div className="notFoundResult__text">{SEARCH.NOT_FONND_RESULT.content}</div>
      <img className="notFoundResult__image" src={NotFound} alt="not found" />
      <Button scheme="primary" onClick={() => handleNotFoundResult()}>
        <span>스터디 직접 생성하기</span>
      </Button>
    </NotFoundResultWrapper>
  );
};

const NotFoundResultWrapper = styled.div`
  display: flex;
  padding: 40px 0px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 40px;

  .notFoundResult__image {
    margin: 0 auto;
    width: 392px;
    height: 240px;

    ${media.custom(424)} {
      width: calc(100% - 32px);
    }
  }

  .notFoundResult__text {
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
    width: 392px;
    padding: 4px 24px;

    ${media.custom(424)} {
      width: calc(100% - 32px);
    }
  }
`;

export default NotFoundResult;
