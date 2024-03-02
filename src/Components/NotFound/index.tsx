import styled from 'styled-components';
import CreateButton from '../Button/CreateButton';
import { useRef, useState } from 'react';
import { useOutSideClick } from '@/Hooks/useOutsideClick';

const notFoundText = `찾는 태그에 대한 검색 결과가 없습니다\n프로젝트를 직접 생성하시겠습니까?`;
const NotFound = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  const modalWrapperRef = useRef(null);
  useOutSideClick(modalWrapperRef, handleModalOpen);
  return (
    <NotFoundWrapper>
      <div className="notFound__text">{notFoundText}</div>
      <CreateButton onClick={handleModalOpen}>
        <span>스터디 생성하기</span>
      </CreateButton>
      {isModalOpen && <LoginModal closeModal={handleModalOpen} ref={modalWrapperRef} />}
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 116px auto;
  gap: 40px;
  text-align: center;
  line-height: 40px;
  white-space: pre-wrap;

  .notFound__text {
    color: ${(props) => props.theme.color.black4};
    text-align: ${(props) => props.theme.font.medium};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }

  button {
    display: flex;
    height: 48px;
    padding: 0 24px;
    color: ${(props) => props.theme.color.white};
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 48px;
    border-radius: 8px;
    background: ${(props) => props.theme.color.purple3};
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.color.black1};
  }
`;

export default NotFound;
