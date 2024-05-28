import { API_END_POINT } from '@/Constants/api';
import { NotificationKeywords, NotificationsSetting, NotificationsType } from '@/Types/notifications';
import { httpClient } from '@/utils/axios';

/** 알림 목록 API */
export const getNotifications = () => httpClient.get(API_END_POINT.NOTIFICATIONS);

/** 알림 읽음 API */
export const readNotifications = (notificationId: number) =>
  httpClient.post(API_END_POINT.READ_NOTIFICATIONS(notificationId));

/** 알림 설정 조회 API */
export const getNotificationsSetting = (): Promise<{ data: { data: NotificationsSetting } }> =>
  httpClient.get(API_END_POINT.NOTIFICATIONS_SETTING);

/** 모집공고 알림 설정 API */
export const editNotificationsKeywords = (data: NotificationKeywords) =>
  httpClient.put(API_END_POINT.EDIT_NOTIFICATIONS_KEYWORDS, data);

/** 알림 on/off 설정 API */
export const onOffNotifications = (data: { type: NotificationsType | 'ALL'; on: boolean }) =>
  httpClient.post(API_END_POINT.NOTIFICATIONS_SETTING, data);
