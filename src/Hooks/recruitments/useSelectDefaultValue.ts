import { RecruitmentForm } from '@/Types/study';
import { useCallback } from 'react';
import { APPLICATION_CNT, CONTACT, POSITIONS, POSITION } from '@/Shared/study';
import { useSavedKeyStore } from '@/store/study';

export const useSelectDefaultValue = () => {
  const savedKey = useSavedKeyStore((state) => state.savedKey);
  const tempSaved: RecruitmentForm | null = JSON.parse(localStorage.getItem(savedKey)) ?? null;

  const getDefVal = useCallback(
    (formKey: keyof RecruitmentForm) => {
      if (!tempSaved) return;
      const val = tempSaved[formKey]; // [1, 2]

      switch (formKey) {
        case 'applicantCount': {
          return APPLICATION_CNT.find((el) => el.value === val) ?? null;
        }
        // 포지션 id
        case 'positionIds': {
          return POSITION.find((el) => el.value === val) ?? null;
        }
        case 'stackIds': {
          // TODO: 스택 id 초기값 설정
          // if (typeof val === 'object' && val.length > 0) {
          //   if(val[0] !== undefined) {
          // // handleSelectedStacks(val);
          // }
          return;
        }
        case 'contact': {
          return CONTACT.find((el) => el.value === val) ?? null;
        }
        default: {
          return val;
        }
      }
    },
    [tempSaved],
  );

  return getDefVal;
};
