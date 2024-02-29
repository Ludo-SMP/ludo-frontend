import { HttpResponse, http } from 'msw';
import { mockUsers } from '../data/mockAuth';

const baseURL = import.meta.env.VITE_MOCK_API_URL;

const getUser = http.get(`${baseURL}/api/users/me`, () => {
  return new HttpResponse(JSON.stringify({ data: mockUsers[1], message: 'Success' }), {
    status: 200,
    statusText: 'OK',
  });
});

export default [getUser];