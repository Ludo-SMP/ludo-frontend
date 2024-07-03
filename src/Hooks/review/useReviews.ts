import { getReviews } from '@/Apis/review';
import { STUDY } from '@/Constants/queryString';
import { AllStudyReviews } from '@/Types/review';
import { useQuery } from '@tanstack/react-query';

/** 스터디원이 남긴 리뷰 조회 Custom Hook */
export const useReviews = () => {
  return useQuery({
    queryKey: [...STUDY.REVIEWS],
    queryFn: () => getReviews(),
    select: (data: { data: { data: AllStudyReviews } }) => data?.data?.data,
  });
};
