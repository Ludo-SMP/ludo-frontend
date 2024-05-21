import recruitmentHandler from './recruitment';
import studyHandler from './study';
import authHandler from './auth';
import stackHandler from './stacks';
import reviewHandler from './review';

export const handlers = [...studyHandler, ...recruitmentHandler, ...authHandler, ...stackHandler, ...reviewHandler];
