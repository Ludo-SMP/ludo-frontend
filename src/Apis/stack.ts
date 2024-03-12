import { API_END_POINT } from '@/Constants/api';
import { STACK } from '@/Constants/queryString';
import { httpClient } from '@/Utils/axios';
import { useQuery } from '@tanstack/react-query';

export const getStack = () => httpClient.get(API_END_POINT.STACK);

export const useStack = () => {
  return useQuery({
    queryKey: [...STACK.STACK],
    queryFn: () => getStack(),
    select: (data) => ({
      data: data?.data.data.stackCategory.flatMap((data: any) => data), // stackcategory 데이터
      categoryName: data?.data.data.stackCategory.flatMap((data: any) => data.name), //  카테고리 이름
      categoryId: data?.data.data.stackCategory.flatMap((data: any) => data.id), //  카테고리id 데이터
      stacks: data?.data.data.stackCategory.flatMap((data: any) => data.stacks.flatMap((stacks: any) => stacks)), //기술스택 이름
      stackId: data?.data.data.stackCategory.flatMap((data: any) => data.stacks.flatMap((stacks: any) => stacks.id)), //기술 스택 id
      stackImg: data?.data.data.stackCategory.flatMap((data: any) =>
        data.stacks.flatMap((stacks: any) => stacks.imageUrl),
      ), //기술스택 이미지
    }),
  });
};
