import { PROGRESS_METHODS } from '@/Shared/study';

export const getProgressMethod = (progressMethodId: number) => {
  const selectedProgressMethod = PROGRESS_METHODS.filter(
    (progressMethod: { id: number; name: string }) => progressMethod.id === progressMethodId,
  )[0];
  return selectedProgressMethod?.name;
};
