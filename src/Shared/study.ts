import { Position, Option } from '@/Types/study';

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

export const POSITION: Array<Option<number, string>> = [
  { value: 1, label: '백엔드' },
  { value: 2, label: '프론트엔드' },
  { value: 3, label: '디자이너' },
  { value: 4, label: '데브옵스' },
];

export const CONTACT: Array<Option<string, string>> = [
  { value: 'EMAIL', label: '이메일' },
  { value: 'KAKAO', label: '카카오톡' },
];

export const APPLICATION_CNT: Array<Option<number, string>> = [
  { value: 1, label: '1명' },
  { value: 2, label: '2명' },
  { value: 3, label: '3명' },
  { value: 4, label: '4명' },
  { value: 5, label: '5명' },
  { value: 6, label: '6명' },
  { value: 7, label: '7명' },
  { value: 8, label: '8명' },
  { value: 9, label: '9명' },
  { value: 10, label: '10명' },
];

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

export const PLATFORM_OPTIONS = [
  { label: 'Gather', value: 'GATHER' },
  { label: 'Google Meet', value: 'GOOGLE_MEET' },
];

export const ALL = {
  id: 0,
  name: '전체',
};

export const CATEGORIES = [
  { id: 1, name: '프로젝트' },
  { id: 2, name: '코딩 테스트' },
  { id: 3, name: '모의 면접' },
];

export const CATEGORIES_OPTION = [
  { value: 1, label: '프로젝트' },
  { value: 2, label: '코딩 테스트' },
  { value: 3, label: '모의 면접' },
];

export const CATEGORY_KEYWORD_OPTIONS = [
  { value: 3, label: '모의 면접' },
  { value: 1, label: '개발 프로젝트' },
  { value: 2, label: '코딩 테스트' },
];

export const POSITIONS: Position[] = [
  { id: 1, name: '백엔드' },
  { id: 2, name: '프론트엔드' },
  { id: 3, name: '디자이너' },
  { id: 4, name: '데브옵스' },
];

export const POSITIONS_OPTIONS = [
  { value: 1, label: '백엔드' },
  { value: 2, label: '프론트엔드' },
  { value: 3, label: '디자이너' },
  { value: 4, label: '데브옵스' },
];

export const POSITION_KEYWORD_OPTIONS = [
  { value: 2, label: '프론트엔드' },
  { value: 1, label: '백엔드' },
  { value: 3, label: '디자인' },
  { value: 4, label: '데브옵스' },
];

export const PROGRESS_METHODS = [
  { id: 1, name: 'ONLINE' },
  { id: 2, name: 'OFFLINE' },
];

export const PROGRESS_METHODS_OPTIONS = [
  { value: 'ONLINE', label: '온라인' },
  { value: 'OFFLINE', label: '오프라인' },
];

export const SORTS = [
  { id: 1, name: '최신순' },
  { id: 2, name: '조회순' },
];

export const ATTENDANCE_DAY = [
  {
    id: 1,
    name: '월요일',
  },
  {
    id: 2,
    name: '화요일',
  },
  {
    id: 3,
    name: '수요일',
  },
  {
    id: 4,
    name: '목요일',
  },
  {
    id: 5,
    name: '금요일',
  },
  {
    id: 6,
    name: '토요일',
  },
  {
    id: 7,
    name: '일요일',
  },
] as const;
