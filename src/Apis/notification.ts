import { API_END_POINT } from '@/Constants/api';
import {
  RecruitmentKeywordsForm,
  NotificationsSetting,
  NotificationsSettingConfigType,
  NotificationIds,
  NotificationSSEType,
} from '@/Types/notifications';
import { httpClient } from '@/utils/axios';

/** 알림 목록 API */
export const getNotifications = (): Promise<{
  data: {
    data: Array<NotificationSSEType>;
  };
}> => httpClient.get(API_END_POINT.NOTIFICATIONS);

/** 알림 읽음 API */
export const readNotifications = (data: NotificationIds) => httpClient.post(API_END_POINT.READ_NOTIFICATIONS, data);

/** 알림 설정 조회 API */
export const getNotificationsSetting = (): Promise<{ data: { data: NotificationsSetting } }> =>
  httpClient.get(API_END_POINT.NOTIFICATIONS_SETTING);

/** 모집공고 알림 설정 API */
export const editNotificationsKeywords = (data: RecruitmentKeywordsForm) =>
  httpClient.put(API_END_POINT.EDIT_NOTIFICATIONS_KEYWORDS, data);

/** 알림 on/off 설정 API */
export const onOffNotifications = (data: { notificationConfigGroup: NotificationsSettingConfigType; on: boolean }) =>
  httpClient.post(API_END_POINT.NOTIFICATIONS_SETTING, data);
