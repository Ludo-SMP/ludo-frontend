// 임시저장 관련 훅

import { RecruitFormWithSelect } from '@/Types/study';
import { useSavedKeyStore } from '@/store/study';
import { useEffect } from 'react';

export const useTempSaved = () => {
  const savedKey = useSavedKeyStore((state) => state.savedKey);
  const setSavedKey = useSavedKeyStore((state) => state.setSavedKey);
  const tempSaved: RecruitFormWithSelect | null = JSON.parse(localStorage.getItem(savedKey)) ?? null;

  useEffect(() => {
    return () => {
      // 언마운트될 때, 임시저장 선택된 키 초기화
      if (tempSaved) setSavedKey('');
    };
  }, []);

  return { tempSaved, savedKey, setSavedKey };
};
