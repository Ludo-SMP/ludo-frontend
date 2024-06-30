/**
 * @description custom key, value로 shared 데이터를 만들어주는 함수
 * @param customLabelKey custom label key 이름 (ex. name)
 * @param customValueKey custom value key 이름 (ex. id)
 */

import { OriginalShared } from '@/Shared/study';

export type TCustomLabelKey = 'label' | 'name';
export type TCustomValueKey = 'value' | 'id';

export const generateShardObjectByCustomKey =
  <T extends TCustomValueKey, U extends TCustomLabelKey>(customValueKey: T, customLabelKey: U) =>
  (customKeyObject: { [key: string | number]: any }): OriginalShared | OriginalShared[] => {
    return Object.entries(customKeyObject)?.map(([value, key]) => {
      if (typeof key === 'undefined' || typeof value === 'undefined') return undefined;
      return {
        [customLabelKey]: key as typeof key,
        [customValueKey]: value,
      };
    });
  };

export type CustomObjectType = ReturnType<typeof generateShardObjectByCustomKey>;
