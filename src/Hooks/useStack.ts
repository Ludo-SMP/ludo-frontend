import { Stack as StackType } from '@/Types/study';
import { useState } from 'react';

// TODO: DropdownFilter랑 중복 로직 합치기
export const useStack = (initialValue: string) => {
  // 선택된 스택들
  const [selectedStacks, setSelectedStacks] = useState<StackType[] | null>(null);

  // placeholder에 보여질 내용
  const [content, setContent] = useState(initialValue);

  // 선택된 스택들을 핸들링하는 함수
  const handleSelectedStacks = (stacks: StackType[]) => {
    setSelectedStacks([...stacks]);
    setContent(stacks.map((stack) => stack.name).join(', '));
  };

  const isValidStack = (): boolean => {
    if (!selectedStacks || selectedStacks?.length === 0) {
      setSelectedStacks([]);
      return false;
    }
    return true;
  };

  return { handleSelectedStacks, content, selectedStacks, setSelectedStacks, isValidStack };
};
