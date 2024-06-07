import { HttpResponse, http } from 'msw';
import { mockReviews } from '../data/mockReviews';

const baseURL = import.meta.env.VITE_BASE_API_URL;

const submitReview = http.post(
  `${baseURL}/api/users/me/review`,
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

export const getReviews = http.get(`${baseURL}/api/reviews`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: mockReviews,
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

export default [submitReview, getReviews];
