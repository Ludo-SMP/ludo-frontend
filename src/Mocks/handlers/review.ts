import { API_END_POINT } from '@/Constants/api';
import { HttpResponse, http } from 'msw';

const submitReview = http.post(
  API_END_POINT.REVIEW,
  async () =>
    new HttpResponse(
      JSON.stringify({
        data: null,
        message: 'Success',
      }),
      {
        status: 200,
        statusText: 'OK',
      },
    ),
);

export default [submitReview];
