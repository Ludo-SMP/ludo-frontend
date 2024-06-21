import { TCustomLabelKey, TCustomValueKey } from '@/Shared/study';

/**
 * @description custom key, value로 shared 데이터를 만들어주는 함수
 * @param customLabelKey custom label key 이름 (ex. name)
 * @param customValueKey custom value key 이름 (ex. id)
 */

export const generateShardObjectByCustomKey =
  <T extends TCustomLabelKey, U extends TCustomValueKey>(customLabelKey: T, customValueKey: U) =>
  (customKeyObject: { [key: string | number]: unknown }): unknown[] | unknown => {
    return Object.entries(customKeyObject)?.map(([key, value]) => {
      if (typeof key === 'undefined' || typeof value === 'undefined') return undefined;
      return {
        [customLabelKey]: key as typeof key,
        [customValueKey]: value,
      };
    });
  };

export type CustomObjectType = ReturnType<typeof generateShardObjectByCustomKey>;
