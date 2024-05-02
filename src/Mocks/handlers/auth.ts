import { HttpResponse, http } from 'msw';
import { mockUsers } from '../data/mockAuth';

const baseURL = import.meta.env.VITE_BASE_API_URL;

const getUser = http.get(`${baseURL}/api/users/me`, () => {
  const isAuthenticated = document.cookie.includes('Authorization=');

  if (!isAuthenticated) {
    return new HttpResponse(JSON.stringify({ data: null, message: '로그인이 필요합니다.' }), {
      status: 401,
      statusText: 'Unauthorized',
    });
  }

  return new HttpResponse(JSON.stringify({ data: mockUsers[1], message: 'Success' }), {
    status: 200,
    statusText: 'OK',
  });
});

const logout = http.post(`${baseURL}/api/auth/logout`, () => {
  return new HttpResponse(JSON.stringify({ data: null, message: '로그아웃 성공' }), {
    status: 307,
    statusText: 'Temporary Redirect',
  });
});

export default [getUser, logout];
