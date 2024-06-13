import { HttpResponse, http } from 'msw';
import { mockMypage } from '../data/mockMypage';

const baseURL = import.meta.env.VITE_BASE_API_URL;

export const getMypage = http.get(`${baseURL}/api/users/mypage`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: mockMypage,
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

export default [getMypage];
