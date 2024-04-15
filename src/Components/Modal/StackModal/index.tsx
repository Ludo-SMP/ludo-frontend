import { Close, Search } from '@/Assets';
import Button from '@/Components/Common/Button';
import ChipMenu from '@/Components/Common/ChipMenu';
import { TechStack } from '@/Components/Common/TechStack';
import { SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface StackModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
}

const StackModal = ({ handleModal }: StackModalProps) => {
  const stackModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (stackModalRef.current && !stackModalRef.current.contains(event.target as Node)) {
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [stackModalRef, handleModal]);

  return (
    <StackModalWrapper ref={stackModalRef}>
      <ModalContentWrapper>
        <TitleWrapper>
          <div className="title">기술 스택</div>
          <div className="close__icon" onClick={() => handleModal(false)}>
            <Close width={32} height={32} />
          </div>
        </TitleWrapper>
        <SearchInputWrapper>
          <input type="text" placeholder="기술스택" />
          <div className="search__icon">
            <Search />
          </div>
        </SearchInputWrapper>
        <CategoryChipsWrapper>
          <ChipMenu checked={true} onClick={() => {}}>
            전체
          </ChipMenu>
          <ChipMenu checked={false} onClick={() => {}}>
            프론트엔드
          </ChipMenu>
          <ChipMenu checked={false} onClick={() => {}}>
            백엔드
          </ChipMenu>
          <ChipMenu checked={false} onClick={() => {}}>
            디자인
          </ChipMenu>
          <ChipMenu checked={false} onClick={() => {}}>
            데이터베이스
          </ChipMenu>
          <ChipMenu checked={false} onClick={() => {}}>
            데브옵스
          </ChipMenu>
          <ChipMenu checked={false} onClick={() => {}}>
            언어
          </ChipMenu>
        </CategoryChipsWrapper>
        <TechStackListWrapper>
          <TechStack name={'기술 스택'} id={0} onClick={() => {}} />
          <TechStack name={'기술 스택'} id={0} onClick={() => {}} />
          <TechStack name={'기술 스택'} id={0} onClick={() => {}} selected />
          <TechStack name={'기술 스택'} id={0} onClick={() => {}} />
          <TechStack name={'기술 스택'} id={0} onClick={() => {}} selected />
          <TechStack name={'기술 스택'} id={0} onClick={() => {}} />
          <TechStack name={'기술 스택'} id={0} onClick={() => {}} selected />
        </TechStackListWrapper>
      </ModalContentWrapper>
      <BtnsWrapper>
        <Button size="fullWidth" onClick={() => {}}>
          선택 초기화
        </Button>
        <Button
          scheme="primary"
          size="fullWidth"
          onClick={() => {
            handleModal(false);
          }}
        >
          선택 완료
        </Button>
      </BtnsWrapper>
    </StackModalWrapper>
  );
};

const StackModalWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 32px 52px;
  gap: 40px;
  background: ${({ theme }) => theme.color.white2};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  transform: translate(-50%, -50%);
`;

const ModalContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 24px;
  align-self: stretch;

  .title {
    display: flex;
    width: 50%;
    color: ${({ theme }) => theme.color.black5};
    font-family: 'Pretendard800';
    font-size: 24px;
    font-style: normal;
    line-height: 32px; /* 133.333% */
  }

  .close__icon {
    width: 50%;
    &:hover {
      cursor: pointer;
    }
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  padding: 10px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};

  input {
    width: 100%;
  }

  & > input::placeholder {
    color: ${({ theme }) => theme.color.black2};
    font-family: Pretendard400;
    font-size: ${({ theme }) => theme.font.small};
    font-style: normal;
    line-height: 24px;
  }
`;

const CategoryChipsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 8px;
`;

const TechStackListWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

const BtnsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 24px;
  align-self: stretch;
`;

export default StackModal;
