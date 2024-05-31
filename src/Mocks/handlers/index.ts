import recruitmentHandler from './recruitment';
import studyHandler from './study';
import authHandler from './auth';
import stackHandler from './stacks';
import notification from './notification';

export const handlers = [...studyHandler, ...recruitmentHandler, ...authHandler, ...stackHandler, ...notification];
