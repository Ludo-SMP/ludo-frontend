import { REVIEW } from '@/Constants/queryString';
import { useMutation } from '@tanstack/react-query';
import { submitReview } from '@/Apis/review';
import { ReviewCreate } from '@/Types/review';

export const useSubmitReviewMutation = (studyId: number, successHandler?: () => void) =>
  useMutation({
    mutationKey: [...REVIEW.SUBMIT(studyId)],
    mutationFn: (data: ReviewCreate) => submitReview(data, studyId),
    onSuccess: successHandler,
    onError: () => {},
  });
