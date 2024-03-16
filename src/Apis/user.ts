import { API_END_POINT } from '@/Constants/api';
import { httpClient } from '@/utils/axios';

export const editProfileNickname = (nickname: string) =>
  httpClient.post(API_END_POINT.EDIT_NICKNAME, { changeNickname: nickname });
