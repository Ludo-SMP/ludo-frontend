import { HttpResponse, http } from 'msw';
import { mockNotifications } from '../data/mockNotifications';
const baseURL = import.meta.env.VITE_BASE_API_URL;

const encoder = new TextEncoder();

const subscribeSSE = http.get(`${baseURL}/api/notifications/subscribe`, async () => {
  const data = {
    notificationId: 1,
    title: 'STUDY_APPLICANT',
    content: '스터디 지원 현황 알림',
    type: 'STUDY_APPLICANT',
    read: false,
    params: {},
    createdAt: '2024-05-21T20:34:19.884948',
  };

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(JSON.stringify(data)));
      // 커넥션 종료되면 자동으로 onerror 호출 후, 커넥션 다시 맺는 것 방지하기 위해 주석 처리
      //controller.close();
    },
  });

  return new HttpResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
    },
    status: 200,
    statusText: 'OK',
  });
});

const getNotifications = http.get(`${baseURL}/api/notifications`, async () => {
  ``;
  return new HttpResponse(
    JSON.stringify({
      data: mockNotifications.data,
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const readNotifications = http.post(`${baseURL}/api/notifications/:notificationId`, async () => {
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

export default [subscribeSSE, getNotifications, readNotifications];
