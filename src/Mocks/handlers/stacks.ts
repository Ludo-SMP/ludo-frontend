import { HttpResponse, http } from 'msw';
import { mockStackData } from '../data/mockStack';

const baseURL = import.meta.env.VITE_BASE_API_URL;

const getStacks = http.get(`${baseURL}/api/stacks`, () => {
  return new HttpResponse(JSON.stringify({ data: mockStackData, message: 'Success' }), {
    status: 200,
    statusText: 'OK',
  });
});

export default [getStacks];
