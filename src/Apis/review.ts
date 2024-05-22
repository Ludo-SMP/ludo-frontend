import { httpClient } from '@/utils/axios';
import { API_END_POINT } from '@/Constants/api';
import { ReviewCreate } from '@/Types/review';

// 리뷰 작성
export const submitReview = async (data: ReviewCreate) => httpClient.post(API_END_POINT.REVIEW, { ...data });
