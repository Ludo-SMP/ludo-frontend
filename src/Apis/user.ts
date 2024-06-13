import { API_END_POINT } from '@/Constants/api';
import { MyPageInfo } from '@/Types/study';
import { httpClient } from '@/utils/axios';

// 닉네임 수정
export const editProfileNickname = (nickname: string) =>
  httpClient.post(API_END_POINT.EDIT_NICKNAME, { changeNickname: nickname });

// 마이페이지 정보 조회
export const getMyPageInfo = (): Promise<{ data: { data: MyPageInfo } }> => httpClient.get(API_END_POINT.MYPAGE);
