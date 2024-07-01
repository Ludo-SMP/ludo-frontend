import { generateShardObjectByCustomKey } from '@/utils/selectUtil';

export interface OriginalShared {
  [key: number | string]: number | string;
}

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

// 포지션
export const NEW_POSITION: OriginalShared = {
  1: '백엔드',
  2: '프론트엔드',
  3: '디자이너',
  4: '데브옵스',
};

export const generateSelectOption = generateShardObjectByCustomKey('value', 'label');
export const generateDropdownOption = generateShardObjectByCustomKey('id', 'name');

export const POSITIONS = generateDropdownOption(NEW_POSITION);
export const POSITION = generateSelectOption(NEW_POSITION);

export const NEW_CONTACT: OriginalShared = {
  EMAIL: '이메일',
  KAKAO: '카카오톡',
};

export const CONTACT = generateSelectOption(NEW_CONTACT);

export const NEW_APPLICATION_CNT: OriginalShared = {
  1: '1명',
  2: '2명',
  3: '3명',
  4: '4명',
  5: '5명',
  6: '6명',
  7: '7명',
  8: '8명',
  9: '9명',
  10: '10명',
};

export const APPLICATION_CNT = generateSelectOption(NEW_APPLICATION_CNT);

// platform
export const PLATFORM = {
  GATHER: 'Gather',
  GOOGLE_MEET: 'Google Meet',
};

export const PLATFORM_OPTIONS = generateSelectOption(PLATFORM);

export const ALL = {
  id: 0,
  name: '전체',
};

export const CATEGORY: OriginalShared = {
  1: '프로젝트',
  2: '코딩 테스트',
  3: '모의 면접',
};

export const CATEGORIES = generateDropdownOption(CATEGORY);
export const CATEGORIES_OPTION = generateSelectOption(CATEGORY);

// category
export const PROGRESS_METHOD: OriginalShared = {
  ONLINE: '온라인',
  OFFLINE: '오프라인',
};

export const WAY: OriginalShared = {
  1: 'ONLINE',
  2: 'OFFLINE',
};

export const PROGRESS_METHODS = generateDropdownOption(WAY);
export const PROGRESS_METHODS_OPTIONS = generateSelectOption(PROGRESS_METHOD);

export const SORT = {
  1: '최신순',
  2: '조회순',
};

export const ROLE = {
  OWNER: '팀장',
  MEMBER: '팀원',
};

export const NEW_ATTENDANCE_DAY: OriginalShared = {
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
  7: '일요일',
};

export const ATTENDANCE_DAY = generateDropdownOption(NEW_ATTENDANCE_DAY);
