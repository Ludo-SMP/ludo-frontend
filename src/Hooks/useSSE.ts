import { useRef } from 'react';
import { EventSourcePolyfill, Event, MessageEvent } from 'event-source-polyfill';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { useQueryClient } from '@tanstack/react-query';
import { NotificationSSEType } from '@/Types/notifications';
import { NotificationResponse } from './notifications/useNotifications';

/**
 * SSE 구독 후, 실시간 알림 데이터를 받아오는 훅
 */
export const useSSE = () => {
  const queryClient = useQueryClient();
  const eventSource = useRef<EventSourcePolyfill>(null);

  const fetchSSE = () => {
    const EventSource = EventSourcePolyfill;

    // 새로운 EventSource 연결
    eventSource.current = new EventSource(`${import.meta.env.VITE_BASE_API_URL}/api/notifications/subscribe`, {
      headers: {
        'Content-Type': 'text/event-stream',
      },
      withCredentials: true,
      heartbeatTimeout: 60 * 60 * 1000, // sse 연결 시간 (토큰 유지 1시간)
    });

    // 메시지 수신 시 캐시에 저장
    eventSource.current.addEventListener('notification', (evt: Event) => {
      const messageEvent = evt as MessageEvent;
      const data: { data: NotificationSSEType } = JSON.parse(messageEvent.data);

      queryClient.setQueryData(NOTIFICATIONS.NOTIFICATIONS, (prev: { data: { data: NotificationResponse } }) => {
        const newData = JSON.parse(JSON.stringify(prev));
        newData.data.data.notification = [...prev?.data?.data?.notification, data?.data];
        return newData;
      });
    });

    // 접속이 종료되거나 에러 발생 시 호출
    eventSource.current.onerror = (e) => {
      console.error('에러 발생', e);
    };
  };

  return { fetchSSE, eventSource };
};
