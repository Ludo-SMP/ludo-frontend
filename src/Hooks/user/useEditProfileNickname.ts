import { useMutation } from '@tanstack/react-query';
import { USER } from '@/Constants/queryString';
import { editProfileNickname } from '@/Apis/user';

export const useEditProfileNickname = (successHandler: () => void, failHandler: () => void) => {
  const { mutate, error } = useMutation({
    mutationKey: [...USER.EDIT_PROFILE()],
    mutationFn: (nickname: string) => editProfileNickname(nickname),
    onSuccess: () => {
      successHandler();
    },
    onError: () => {
      failHandler();
    },
  });
  return { mutate, error };
};
