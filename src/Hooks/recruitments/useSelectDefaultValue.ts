import { RecruitFormWithSelect } from '@/Types/study';
import { APPLICATION_CNT, CONTACT } from '@/Shared/study';
import { useSavedKeyStore } from '@/store/study';

const defValue = { label: '', value: '' };
export const useSelectDefaultValue = (type: 'api' | 'storage', data?: any) => {
  const savedKey = useSavedKeyStore((state) => state.savedKey);
  const tempSaved: RecruitFormWithSelect | null = JSON.parse(localStorage.getItem(savedKey)) ?? null;

  /**
   *
   * @descriptioin 임시저장과 api에 들어온 값을 셀렉트 option에 들어가는 타입으로 가공합니다.
   */
  const parseSelectValue = (formKey: keyof RecruitFormWithSelect) => {
    if (type === 'storage' && !tempSaved) return;
    if (type === 'storage') return tempSaved[formKey];

    switch (formKey) {
      case 'contact':
        return CONTACT?.find((contact) => contact.value === data[formKey]) ?? defValue;
      case 'applicantCount':
        return APPLICATION_CNT?.find((cnt) => cnt.value === data[formKey]) ?? defValue;
      case 'positionIds':
        return data?.positionIds?.map(({ id, name }: { id: number; name: string }) => ({ value: id, label: name }));
      default:
        return data[formKey] ?? defValue;
    }
  };

  return parseSelectValue;
};
