import { Category, Position, ProgressMethod, Sort } from '@/Types/study';

export const STUDY_STATUS = {
  PROGRESS: '진행 중',
  RECRUITING: '모집 중',
  RECRUITED: '모집 완료',
  COMPLETED: '진행 완료',
};

export const APPLY_STATUS = {
  UNCHECKED: '지원 중',
  ACCEPTED: '지원 수락',
  REFUSED: '지원 거절',
};

export const MEMBER_STATUS = {
  PARTICIPATED: '참여 중',
};

export const POSITION = {
  1: '백엔드',
  2: '프론트엔드',
  3: '디자이너',
  4: '데브옵스',
};

export const PROGRESS_METHOD = {
  ONLINE: '온라인',
  OFFLINE: '오프라인',
};

export const WAY = {
  1: 'ONLINE',
  2: 'OFFLINE',
};

export const SORT = {
  1: '최신순',
  2: '조회순',
};

export const CATEGORY = {
  1: '프로젝트',
  2: '코딩 테스트',
  3: '모의 면접',
};

export const ROLE = {
  OWNER: '팀장',
  MEMBER: '팀원',
};

export const PLATFORM = {
  GATHER: 'Gather',
  GOOGLE_MEET: 'Google Meet',
};

export const ALL = {
  id: 0,
  name: '전체',
};

export const CATEGORIES = [
  { id: 1, name: '프로젝트' },
  { id: 2, name: '코딩 테스트' },
  { id: 3, name: '모의 면접' },
];

export const POSITIONS = [
  { id: 1, name: '백엔드' },
  { id: 2, name: '프론트엔드' },
  { id: 3, name: '디자이너' },
  { id: 4, name: '데브옵스' },
];

export const PROGRESS_METHODS = [
  { id: 1, name: 'ONLINE' },
  { id: 2, name: 'OFFLINE' },
];

export const SORTS = [
  { id: 1, name: '최신순' },
  { id: 2, name: '조회순' },
];
