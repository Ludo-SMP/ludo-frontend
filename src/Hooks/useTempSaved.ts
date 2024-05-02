// 임시저장 관련 훅

import { useSavedKeyStore } from '@/store/study';
import { useEffect } from 'react';

export const useTempSaved = <T>() => {
  const savedKey = useSavedKeyStore((state) => state.savedKey);
  const setSavedKey = useSavedKeyStore((state) => state.setSavedKey);
  const tempSaved: T | null = JSON.parse(localStorage.getItem(savedKey)) ?? null;

  useEffect(() => {
    return () => {
      // 언마운트될 때, 임시저장 선택된 키 초기화
      if (tempSaved) setSavedKey('');
    };
  }, []);

  return { tempSaved, savedKey, setSavedKey };
};
