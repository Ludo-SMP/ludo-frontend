import { v1 as uuidv1 } from 'uuid';

export const saveTemporary = (savedKey: string, type: 'STUDY' | 'RECRUITMENT', data: unknown) => {
  if (savedKey.length > 0) localStorage.removeItem(savedKey);
  const newSavedKey = `${type}-${uuidv1()}`;
  localStorage.setItem(newSavedKey, JSON.stringify(data));
};
