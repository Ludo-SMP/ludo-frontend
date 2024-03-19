import { useQuery } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { getMyPageInfo } from '@/Apis/study';
import { MyPageInfo } from '@/Types/study';

export const useMyPageInfo = () => {
  return useQuery({
    queryKey: [...STUDY.MYPAGE_INFO()],
    queryFn: () => getMyPageInfo(),
    select: (data: { data: { data: MyPageInfo } }) => data?.data?.data,
  });
};
