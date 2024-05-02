import recruitmentHandler from './recruitment';
import studyHandler from './study';
import authHandler from './auth';
import stackHandler from './stacks';

export const handlers = [...studyHandler, ...recruitmentHandler, ...authHandler, ...stackHandler];
