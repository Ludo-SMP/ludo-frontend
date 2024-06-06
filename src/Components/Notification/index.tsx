import { RecruitmentNotification, ReviewNotification, StudyNotification } from '@/Types/notifications';
import { List, Box, Item, Title, ElapsedTime, Accordion } from '../Accordion';
import Button from '../Common/Button';
import { getElapsedTime } from '@/utils/date';

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
  read: boolean;

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
  return (
    <>
      {type?.includes('STUDY') ? (
        <Accordion title={title} createdAt={createdAt} children={content} />
      ) : (
        <List>
          <Box>
            <Item>
              <Title>{title}</Title>
              <ElapsedTime>{getElapsedTime(createdAt)}</ElapsedTime>
            </Item>
            {type?.includes('RECRUITMENT') && (
              <Button type="button" scheme="secondary">
                페이지로 이동
              </Button>
            )}
          </Box>
        </List>
      )}
    </>
  );
};
