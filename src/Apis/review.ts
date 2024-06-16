import { httpClient } from '@/utils/axios';
import { API_END_POINT } from '@/Constants/api';
import { AllStudyReviews } from '@/Types/review';

// 리뷰 작성
// export const submitReview = async (data: ReviewCreate) => httpClient.post(API_END_POINT.REVIEW, { ...data });

// 스터디원이 남긴 리뷰 조회
export const getReviews = (): Promise<{ data: { data: AllStudyReviews } }> => httpClient.get(API_END_POINT.GET_REVIEWS);
