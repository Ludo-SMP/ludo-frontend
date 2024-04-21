import { Close, Search } from '@/Assets';
import Button from '@/Components/Common/Button';
import ChipMenu from '@/Components/Common/ChipMenu';
import InputText from '@/Components/Common/InputText/iindex';
import { TechStack } from '@/Components/Common/TechStack';
import { useStack } from '@/Hooks/stack/useStack';
import { Stack } from '@/Types/study';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const STACK_CATEGORY = {
  프론트엔드: 4,
  데브옵스: 5,
  백엔드: 6,
  데이터베이스: 8,
  언어: 9,
  디자인: 10,
};

type StackCategory = keyof typeof STACK_CATEGORY;

interface StackModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  initialSelectedStacks?: Stack[];
  handleSelectedStacks?: (stacks: Stack[]) => void;
}

const StackModal = ({ handleModal, initialSelectedStacks, handleSelectedStacks }: StackModalProps) => {
  const stackModalRef = useRef<HTMLDivElement>(null);
  const { data } = useStack();

  const [selectedCategory, setSelectedCategory] = useState<StackCategory | null>(null);
  const [selectedStacks, setSelectedStacks] = useState<Stack[]>(initialSelectedStacks);
  const stacksSortedByCategory = data?.data;

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
          <InputText placeholder="기술 스택" icon={<Search />} />
        </SearchInputWrapper>
        <CategoryChipsWrapper>
          <ChipMenu checked={selectedCategory === null} onClick={() => setSelectedCategory(null)}>
            전체
          </ChipMenu>
          <ChipMenu checked={selectedCategory === '프론트엔드'} onClick={() => setSelectedCategory('프론트엔드')}>
            프론트엔드
          </ChipMenu>
          <ChipMenu checked={selectedCategory === '백엔드'} onClick={() => setSelectedCategory('백엔드')}>
            백엔드
          </ChipMenu>
          <ChipMenu checked={selectedCategory === '디자인'} onClick={() => setSelectedCategory('디자인')}>
            디자인
          </ChipMenu>
          <ChipMenu checked={selectedCategory === '데이터베이스'} onClick={() => setSelectedCategory('데이터베이스')}>
            데이터베이스
          </ChipMenu>
          <ChipMenu checked={selectedCategory === '데브옵스'} onClick={() => setSelectedCategory('데브옵스')}>
            데브옵스
          </ChipMenu>
          <ChipMenu checked={selectedCategory === '언어'} onClick={() => setSelectedCategory('언어')}>
            언어
          </ChipMenu>
        </CategoryChipsWrapper>
        <TechStackListWrapper>
          {stacksSortedByCategory &&
            stacksSortedByCategory.map((stacksByCategory: { id: number; name: StackCategory; stacks: Stack[] }) => {
              return (
                (selectedCategory === null || STACK_CATEGORY[selectedCategory] === stacksByCategory.id) &&
                stacksByCategory.stacks.map((stack: Stack) => (
                  <TechStack
                    key={stack.id}
                    {...stack}
                    onClick={() => {
                      if (selectedStacks.filter((selectedStack: Stack) => selectedStack.id === stack.id).length === 0)
                        setSelectedStacks([...selectedStacks, { ...stack }]);
                      else {
                        setSelectedStacks(
                          selectedStacks.filter((selectedStack: Stack) => selectedStack.id !== stack.id),
                        );
                      }
                    }}
                    selected={
                      selectedStacks.filter((selectedStack: Stack) => selectedStack.id === stack.id).length !== 0
                    }
                  />
                ))
              );
            })}
        </TechStackListWrapper>
      </ModalContentWrapper>
      <BtnsWrapper>
        <Button
          size="fullWidth"
          onClick={() => {
            setSelectedCategory(null);
            setSelectedStacks([]);
          }}
        >
          선택 초기화
        </Button>
        <Button
          scheme="primary"
          size="fullWidth"
          onClick={() => {
            handleSelectedStacks([...selectedStacks]);
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
  z-index: 100;
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
  justify-content: space-between;
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
    line-height: 32px;
    font-weight: 800;
  }

  .close__icon {
    display: flex;
    flex-direction: row-reverse;
    width: 50%;
    & > svg:hover {
      cursor: pointer;
    }
    & > svg {
      padding-top: 2.5px;
    }
  }
`;

const SearchInputWrapper = styled.div`
  width: 100%;
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
  height: 240px;
  overflow-y: scroll;
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
