import { HttpResponse, http } from 'msw';
import { mockNotificationsSetting } from '../data/mockNotifications';

const baseURL = import.meta.env.VITE_BASE_API_URL;

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

export const editNotificationsKeywords = http.put(`${baseURL}/api/notifications/settings/keywords`, async () => {
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

export const getNotificationsSetting = http.get(`${baseURL}/api/notifications/settings`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: mockNotificationsSetting,
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

export default [onOffNotifications, editNotificationsKeywords, getNotificationsSetting];
