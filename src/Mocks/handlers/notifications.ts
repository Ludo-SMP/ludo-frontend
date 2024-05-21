import { HttpResponse, http } from 'msw';

const baseURL = import.meta.env.VITE_MOCK_API_URL;

export const onOffNotifications = http.post(`${baseURL}/api/notifications/settings`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: null,
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

export default [onOffNotifications];
