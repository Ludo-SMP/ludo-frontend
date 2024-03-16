import { useQuery } from '@tanstack/react-query';
import { STACK } from '@/Constants/queryString';
import { getStack } from '@/Apis/stack';

export const useStack = () => {
  return useQuery({
    queryKey: [...STACK.STACK],
    queryFn: () => getStack(),
    select: (data) => ({
      data: data?.data.data.stackCategory.flatMap((data: any) => data),
      categoryName: data?.data.data.stackCategory.flatMap((data: any) => data.name),
      categoryId: data?.data.data.stackCategory.flatMap((data: any) => data.id),
      stacks: data?.data.data.stackCategory.flatMap((data: any) => data.stacks.flatMap((stacks: any) => stacks)),
      stackId: data?.data.data.stackCategory.flatMap((data: any) => data.stacks.flatMap((stacks: any) => stacks.id)),
      stackImg: data?.data.data.stackCategory.flatMap((data: any) =>
        data.stacks.flatMap((stacks: any) => stacks.imageUrl),
      ),
    }),
  });
};
