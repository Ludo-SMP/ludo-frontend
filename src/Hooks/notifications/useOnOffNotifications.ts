import { useMutation, useQueryClient } from '@tanstack/react-query';
import { onOffNotifications } from '@/Apis/notification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationsSetting, NotificationsSettingConfigType } from '@/Types/notifications';
import { AxiosResponse } from 'axios';

const updateNotificatinoSettings = (
  prevNotificationSettings: AxiosResponse<{ data: NotificationsSetting }>,
  type: NotificationsSettingConfigType,
): AxiosResponse<{ data: NotificationsSetting }> => {
  const studySettings = { ...prevNotificationSettings.data.data.settings.study };
  const recruitmentSettings = { ...prevNotificationSettings.data.data.settings.recruitment };
  const reviewSettings = { ...prevNotificationSettings.data.data.settings.review };
  let allSetting = prevNotificationSettings.data.data.settings.all;

  switch (type) {
    case 'RECRUITMENT_CONFIG':
      recruitmentSettings.notification = !recruitmentSettings.notification;
      break;
    case 'REVIEW_CONFIG':
      reviewSettings.notification = !reviewSettings.notification;
      break;
    case 'STUDY_APPLICANT_CONFIG':
      studySettings.applicantNotification = !studySettings.applicantNotification;
      break;
    case 'STUDY_APPLICANT_RESULT_CONFIG':
      studySettings.applicantResultNotification = !studySettings.applicantResultNotification;
      break;
    case 'STUDY_END_DATE_CONFIG':
      studySettings.endDateNotification = !studySettings.endDateNotification;
      break;
    case 'STUDY_PARTICIPANT_LEAVE_CONFIG':
      studySettings.participantLeaveNotification = !studySettings.participantLeaveNotification;
      break;
    case 'ALL_CONFIG':
      allSetting = !allSetting;
  }

  const newNotificationSettings: AxiosResponse<{ data: NotificationsSetting }> = { ...prevNotificationSettings };
  newNotificationSettings.data.data.settings = {
    all: allSetting,
    study: { ...studySettings },
    recruitment: { ...recruitmentSettings },
    review: { ...reviewSettings },
  };
  return newNotificationSettings;
};

export const useOnOffNotifications = ({ type }: { type: NotificationsSettingConfigType }) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [...NOTIFICATIONS.NOTIFICATIONS_ON_OFF],
    mutationFn: ({ on }: { on: boolean }) => onOffNotifications({ type, on }),
    onSuccess: () => {
      if (type === 'ALL_CONFIG') queryClient.invalidateQueries({ queryKey: [...NOTIFICATIONS.NOTIFICATIONS_SETTING] });
    },
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: [...NOTIFICATIONS.NOTIFICATIONS_SETTING] });
      const prevNotificationSettings: AxiosResponse<{ data: NotificationsSetting }> = queryClient.getQueryData([
        ...NOTIFICATIONS.NOTIFICATIONS_SETTING,
      ]);

      queryClient.setQueryData(
        [...NOTIFICATIONS.NOTIFICATIONS_SETTING],
        updateNotificatinoSettings(prevNotificationSettings, type),
      );
      return { prevNotificationSettings };
    },
  });
};
