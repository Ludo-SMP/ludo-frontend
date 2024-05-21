import { HttpResponse, http } from 'msw';

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

export default [submitReview];
