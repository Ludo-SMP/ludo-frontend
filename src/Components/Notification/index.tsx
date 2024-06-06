import { RecruitmentNotification, ReviewNotification, StudyNotification } from '@/Types/notifications';

interface NotificationProps<T extends RecruitmentNotification | StudyNotification | ReviewNotification> {
  /** 알림 타입 */
  type: T['type'];

  /** 알림 id */
  notificationId: number;

  /** 알림 Title */
  title: string;

  /** 알림 상세 내용 */
  content?: string;

  /** 읽은 기록  */
  read: string;

  /** 페이지 이동에 필요한 params */
  params: T['params'];

  /** 알림 생성 시간 */
  createdAt: string;
}

export const Notification = <T extends RecruitmentNotification | StudyNotification | ReviewNotification>({
  type,
  notificationId,
  title,
  content,
  read,
  params,
  createdAt,
}: NotificationProps<T>) => {
  return <></>;
};
