import { NotificationsSettingConfigType } from '@/Types/notifications';
import { create } from 'zustand';

export const allOnSettingConfigs = {
  ALL_CONFIG: true,
  RECRUITMENT_CONFIG: true,
  STUDY_APPLICANT_CONFIG: true,
  STUDY_APPLICANT_RESULT_CONFIG: true,
  STUDY_PARTICIPANT_LEAVE_CONFIG: true,
  STUDY_END_DATE_CONFIG: true,
  REVIEW_CONFIG: true,
};

export const allOffSettingConfigs = {
  ALL_CONFIG: false,
  RECRUITMENT_CONFIG: false,
  STUDY_APPLICANT_CONFIG: false,
  STUDY_APPLICANT_RESULT_CONFIG: false,
  STUDY_PARTICIPANT_LEAVE_CONFIG: false,
  STUDY_END_DATE_CONFIG: false,
  REVIEW_CONFIG: false,
};

export type NotificationSettingConfigState = { settingConfigs: Record<NotificationsSettingConfigType, boolean> };

export interface NotificationSettingConfigStateAction {
  setAllSettingConfigs: (newSettingConfigs: Record<NotificationsSettingConfigType, boolean>) => void;
  setAllOnSettingConfigs: () => void;
  setAllOffSettingConfigs: () => void;
  setSettingConfig: ({
    configType,
    on,
  }: {
    configType: Omit<NotificationsSettingConfigType, 'ALL_CONFIG'>;
    on: boolean;
  }) => void;
}

export const useClickedNotificationSettingConfig = create<
  NotificationSettingConfigState & NotificationSettingConfigStateAction
>((set, get) => ({
  settingConfigs: { ...allOffSettingConfigs },
  setAllSettingConfigs: (newSettingConfigs: Record<NotificationsSettingConfigType, boolean>) =>
    set({ settingConfigs: { ...newSettingConfigs } }),
  setAllOnSettingConfigs: () => set({ settingConfigs: { ...allOnSettingConfigs } }),
  setAllOffSettingConfigs: () => set({ settingConfigs: { ...allOffSettingConfigs } }),
  setSettingConfig: ({
    configType,
    on,
  }: {
    configType: Omit<NotificationsSettingConfigType, 'ALL_CONFIG'>;
    on: boolean;
  }) => set({ settingConfigs: { ...get().settingConfigs, [configType.toString()]: on } }),
}));
