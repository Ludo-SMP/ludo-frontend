import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ItemCategory, StackItem } from '@/Types/studies';

export const Stack_KEY = ['stack'];
export const getStack = () => axios.get('https://ludoapi.store/api/stacks');

type Props = { d: ItemCategory[] };

export const useStack = () => {
  return useQuery({
    queryKey: Stack_KEY,
    queryFn: () => getStack(),
    select: (data) => ({
      // data: data?.data.data.stackCategory, // 영역별 배열 분리
      //   data: data?.data.data.stackCategory.flatMap((data: { id: any }) => data.id), // id
      data: data?.data.data.stackCategory.flatMap((data: any) => data.id), // stackcategory 데이터
      categoryId: data?.data.data.stackCategory.flatMap((data: any) => data), // stackcategory 데이터
      stacks: data?.data.data.stackCategory.flatMap((data: any) => data.stacks.flatMap((stacks: any) => stacks.name)), //기술스택 이름
      stackId: data?.data.data.stackCategory.flatMap((data: any) => data.stacks.flatMap((stacks: any) => stacks.id)), //기술 스택 id
      stackImg: data?.data.data.stackCategory.flatMap((data: any) =>
        data.stacks.flatMap((stacks: any) => stacks.imageUrl),
      ), //기술스택 이미지
    }),
  });
};
// async function post() {
//     const { data } = await axios.get('https://ludoapi.store/api/stacks');
//     console.log(data);
//     // console.log(data && data.data.stackCategory);  영역별 분리
//     // console.log(data && data.data.stackCategory[0]); 프론트엔드 id=4
//     // console.log(data && data.data.stackCategory[0].stacks); 안에 있는 항목들
//   }
//   post();
