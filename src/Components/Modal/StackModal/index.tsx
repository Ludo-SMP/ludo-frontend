import { Close, Search } from '@/Assets';
import Button from '@/Components/Common/Button';
import ChipMenu from '@/Components/Common/ChipMenu';
import InputText from '@/Components/Common/InputText/index';
import { TechStack } from '@/Components/Common/TechStack';
import { useStack } from '@/Hooks/stack/useStack';
import useDebounce from '@/Hooks/useDebounce';
import { useOutSideClick } from '@/Hooks/useOutsideClick';
import { media } from '@/Styles/theme';
import { Stack } from '@/Types/study';
import { SetStateAction, useRef, useState } from 'react';
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

const getFilteredStacks = (
  stacksByCategory: { id: number; name: StackCategory; stacks: Stack[] }[],
  selectedCategory: StackCategory,
  deBouncedKeyword: string,
) => {
  let filteredStacks: Stack[] = [];
  stacksByCategory
    ?.filter(
      (stacksByCategory: { id: number; name: StackCategory; stacks: Stack[] }) =>
        selectedCategory === null || STACK_CATEGORY[selectedCategory] === stacksByCategory.id,
    )
    .map((stacksByCategory: { id: number; name: StackCategory; stacks: Stack[] }) => {
      filteredStacks = [
        ...filteredStacks,
        ...stacksByCategory.stacks.filter(
          (stack: Stack) =>
            deBouncedKeyword.length === 0 || stack.name.toLowerCase().includes(deBouncedKeyword.toLowerCase()),
        ),
      ];
    });
  filteredStacks.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
  return filteredStacks;
};

interface StackModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  initialSelectedStacks?: Stack[];
  handleSelectedStacks?: (stacks: Stack[]) => void;
}

export const StackModal = ({ handleModal, initialSelectedStacks, handleSelectedStacks }: StackModalProps) => {
  const stackModalRef = useRef<HTMLDivElement>(null);
  const { data } = useStack();

  const [selectedCategory, setSelectedCategory] = useState<StackCategory | null>(null);
  const [selectedStacks, setSelectedStacks] = useState<Stack[]>(initialSelectedStacks);
  const [keyword, setKeyword] = useState<string>('');
  const deBouncedKeyword = useDebounce(keyword);

  const stacksSortedByCategory = data?.data;

  useOutSideClick(stackModalRef, () => handleModal(false));

  const filteredStacks = getFilteredStacks(stacksSortedByCategory, selectedCategory, deBouncedKeyword);

  return (
    <StackModalWrapper ref={stackModalRef}>
      <ModalContentWrapper>
        <TitleWrapper>
          <div className="title">기술 스택</div>
          <div className="close__icon" onClick={() => handleModal(false)}>
            <Close width={24} height={24} />
          </div>
        </TitleWrapper>
        <SearchInputWrapper>
          <InputText placeholder="기술 스택" icon={<Search />} onChange={(e) => setKeyword(e.target.value)} />
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
          {filteredStacks &&
            filteredStacks.map((stack: Stack) => (
              <TechStack
                key={stack.id}
                {...stack}
                onClick={() => {
                  if (selectedStacks.filter((selectedStack: Stack) => selectedStack.id === stack.id).length === 0)
                    setSelectedStacks([...selectedStacks, { ...stack }]);
                  else {
                    setSelectedStacks(selectedStacks.filter((selectedStack: Stack) => selectedStack.id !== stack.id));
                  }
                }}
                selected={selectedStacks.filter((selectedStack: Stack) => selectedStack.id === stack.id).length !== 0}
              />
            ))}
        </TechStackListWrapper>
      </ModalContentWrapper>
      <BtnsWrapper>
        <Button
          size="fullWidth"
          type="button"
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
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 990px;
  gap: 32px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};
  z-index: 100;

  ${media.custom(990)} {
    width: 834px;
  }

  ${media.custom(834)} {
    width: 678px;
  }

  ${media.custom(678)} {
    width: 522px;
  }

  ${media.custom(522)} {
    width: 350px;
    padding: 32px 24px;
  }
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
  gap: 24px;
  align-self: stretch;

  .title {
    display: flex;
    flex: 1 0 0;
    color: ${({ theme }) => theme.color.black5};
    font-family: 'Pretendard800';
    font-size: ${({ theme }) => theme.font.large};
    font-style: normal;
    font-weight: 800;
    line-height: 32px;
  }

  .close__icon {
    display: flex;
    &:hover {
      cursor: pointer;
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
  overflow-x: scroll;
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

  ${media.custom(522)} {
    gap: 12px;
  }
`;
