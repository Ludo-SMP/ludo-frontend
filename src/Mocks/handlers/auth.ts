// import { HttpResponse, http } from 'msw';
// import { mockUsers } from '../data/mockAuth';
// import { HttpStatus } from '@/Constants/statusCodes';

// const baseURL = import.meta.env.VITE_MOCK_API_URL;

// const getUser = http.get(`${baseURL}/api/users/me`, () => {
//   return new HttpResponse(JSON.stringify({ data: mockUsers[1], message: 'Success' }), {
//     status: HttpStatus.OK,
//     statusText: 'OK',
//   });
// });

// const logout = http.post(`${baseURL}/api/auth/logout`, () => {
//   return new HttpResponse(JSON.stringify({ data: null, message: '로그아웃 성공' }), {
//     status: HttpStatus.TEMPORARY_REDIRECT,
//     statusText: 'Temporary Redirect',
//   });
// });

// export default [getUser, logout];
