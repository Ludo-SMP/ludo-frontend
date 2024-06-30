import { Stack as StackType } from '@/Types/study';
import { useState } from 'react';

export const useStack = (initialValue: string) => {
  const [selectedStacks, setSelectedStacks] = useState<StackType[] | null>(null);

  const [content, setContent] = useState(initialValue);

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
