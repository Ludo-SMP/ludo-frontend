import { API_END_POINT } from '@/Constants/api';
import { USER } from '@/Constants/queryString';
import { httpClient } from '@/Utils/axios';
import { useMutation } from '@tanstack/react-query';

export const editProfileNickname = (nickname: string) =>
  httpClient.post(API_END_POINT.EDIT_NICKNAME, { changeNickname: nickname });

export const useEditProfileNickname = (successHandler: () => void, failHandler: () => void) => {
  const { mutate, error } = useMutation({
    mutationKey: [...USER.EDIT_PROFILE()],
    mutationFn: (nickname: string) => editProfileNickname(nickname),
    onSuccess: (e) => {
      console.log(e);
      successHandler();
      console.log('닉네임 변경 성공');
    },
    onError: () => {
      failHandler();
      console.log('닉네임 변경 실패');
    },
  });
  return { mutate, error };
};
