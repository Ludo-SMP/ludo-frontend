import recruitmentHandler from './recruitment';
import studyHandler from './study';
import authHandler from './auth';
import stackHandler from './stacks';
import SSEnotificationHandler from './SSEnotification';
import reviewHandler from './review';
import notificationsHandler from './notifications';
import mypageHandler from './users';

export const handlers = [
  ...studyHandler,
  ...recruitmentHandler,
  ...authHandler,
  ...stackHandler,
  ...reviewHandler,
  ...notificationsHandler,
  ...SSEnotificationHandler,
  ...mypageHandler,
];
