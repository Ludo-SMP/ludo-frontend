import recruitmentHandler from './recruitment';
import studyHandler from './study';
import authHandler from './auth';

export const handlers = [...studyHandler, ...recruitmentHandler, ...authHandler];
