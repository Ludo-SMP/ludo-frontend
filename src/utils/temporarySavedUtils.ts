export const saveTemporary = (savedKey: string, type: 'STUDY' | 'RECRUITMENT', data: unknown) => {
  if (savedKey.length > 0) localStorage.removeItem(savedKey);
  const newSavedKey = `${type}-${studyId}-${uuidv1()}`;
  localStorage.setItem(newSavedKey, JSON.stringify(data));
};
