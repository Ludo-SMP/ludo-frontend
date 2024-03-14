import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
// import { API_END_POINT } from '@/Constants/api';
import { STUDY } from '@/Constants/queryString';
// import { ItemCategory, StackItem } from '@/Types/studies';

export const ID_KEY = ['StudyId'];
export const getId = (
  studyId: number,
): Promise<{
  data: {
    data: any;
  };
}> => axios.get(`https://ludoapi.store/api/api/studies/${studyId}/recruitments`);

export const useStudyId = (studyId: number) => {
  return useQuery({
    // queryKey: [...STUDY.STUDY(studyId)],
    queryKey: [...STUDY.STUDY(studyId)],
    queryFn: () => getId(studyId),
    select: (data: { data: any }) => data.data.data,
  });
};

// const fetchProductDetails = (studyId:number) => {
//     return axios.get(
//       `https://mypocketbase.fly.dev/api/collections/products/records/${studyId}`,
//     )
//   }

// export const useStack = () => {
//   return useQuery({
//     queryKey: StudyId,
//     // queryKey: [...STUDY.STUDY(studyId)],
//     select: (data) => ({
//       data: data?.data.data.stackCategory.flatMap((data: any) => data), // stackcategory 데이터
//       categoryName: data?.data.data.stackCategory.flatMap((data: any) => data.name), //  카테고리 이름
//       categoryId: data?.data.data.stackCategory.flatMap((data: any) => data.id), //  카테고리id 데이터
//       stacks: data?.data.data.stackCategory.flatMap((data: any) => data.stacks.flatMap((stacks: any) => stacks)), //기술스택 이름
//       stackId: data?.data.data.stackCategory.flatMap((data: any) => data.stacks.flatMap((stacks: any) => stacks.id)), //기술 스택 id
//       stackImg: data?.data.data.stackCategory.flatMap((data: any) =>
//         data.stacks.flatMap((stacks: any) => stacks.imageUrl),
//       ), //기술스택 이미지
//     }),
//   });
// };
