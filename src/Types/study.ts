import { APPLY_STATUS, POSITION, MEMBER_STATUS, PLATFORM, PROGRESS_METHOD, ROLE, STUDY_STATUS } from '@/Shared/study';

export type CategoryPropertyType = 'category' | 'stacks' | 'positions' | 'way' | 'sort';
export type StudyStatus = keyof typeof STUDY_STATUS;
export type MemberStatus = keyof typeof MEMBER_STATUS;
export type ApplyStatus = keyof typeof APPLY_STATUS;
export type ProgressMethod = keyof typeof PROGRESS_METHOD;
export type Role = keyof typeof ROLE;
export type Platform = keyof typeof PLATFORM;
export type PositionId = typeof POSITION;
export type Card = 'STUDY' | 'RECRUITMENT';
export type Sort = '최신순' | '조회순';
export type ApplyTryStatus = 'NOT APPLY' | 'SUCCESS' | 'CLOSED' | 'ALREDAY_APPLY' | 'ALREDY_PARTICIPATED';

export interface Position {
  id: number;
  name: '백엔드' | '프론트엔드' | '디자이너' | '데브옵스';
}

export interface Category {
  id: number;
  name: '프로젝트' | '코딩 테스트' | '모의 면접';
}

export interface Member {
  id: number;
  nickname: string;
  email: string;
  position: Position;
  role: Role;
}

export interface User {
  id: number;
  nickname: string;
  email: string;
}

export type MainCategoryNameType = '스터디 유형' | '기술 스택' | '포지션' | '진행 방식' | '목록 정렬 기준';

export interface MainCategoryType<T, S> {
  categoryName: MainCategoryNameType;
  categoryProperty: string;
  categoryItems?: (T | S)[];
}

export type FilterOption = 'CATEGORY' | 'STACK' | 'POSITION' | 'PROGRESS_METHOD' | 'SORT';
export interface Stack {
  id: number;
  name: string;
  imageUrl: string;
}

// TODO: 타입 구조 개선
export interface RecruitmentDetail {
  recruitment: {
    id: number;
    title: string;
    stacks: Stack[];
    positions: Position[];
    applicantCount: number;
    contact: 'KAKAO' | 'EMAIL';
    callUrl: string;
    content: string;
    createdDateTime: string;
    updatedDateTime: string;
    endDateTime: string;
  };
  study: {
    id: number;
    title: string;
    category: Category;
    owner: User;
    platform: Platform;
    way: ProgressMethod;
    participantLimit: number;
    startDateTime: string;
    endDateTime: string;
  };
}

export interface Recruitment {
  id: number;
  title: string;
  stacks: Stack[];
  positions: Position[];
  category: Category;
  ownerNickname: string;
  way: ProgressMethod;
  startDateTime: string;
  endDateTime: string;
  recruitmentEndDateTime: string;
  createdDateTime: string;
  hits: number;
}

export interface PopularRecruitments {
  popularCodingRecruitments: Recruitment[];
  popularInterviewRecruitments: Recruitment[];
  popularProjectRecruitments: Recruitment[];
}

export interface Recruitments {
  recruitments: Recruitment[];
}

export interface RecruitmentForm {
  title: string;
  stackIds: number[];
  positionIds: Position[];
  applicantCount: number;
  recruitmentEndDateTime: string;
  contact: 'KAKAO' | 'EMAIL';
  callUrl: string;
  content: string;
}

// 셀렉트로 관리해야 하는 타입
export type SingleSelectValue = Pick<RecruitmentForm, 'applicantCount' | 'contact'>;
export type SelectOptionType = Record<keyof SingleSelectValue, Option<number, string>>;
export type MultiSelectType = Record<'positionIds', Option<number, string>[]>;

export type SelectType = SelectOptionType & MultiSelectType;

// 셀렉트가 포함된 모집공고 폼 관리 타입
export interface RecruitFormWithSelect extends SelectType {
  title: RecruitmentForm['title'];
  recruitmentEndDateTime: RecruitmentForm['recruitmentEndDateTime'];
  callUrl: RecruitmentForm['callUrl'];
  content: RecruitmentForm['content'];
  stackIds?: Stack[];
}

export interface FilterOptionParams {
  pageParam?: number;
  last?: number;
  count: number;
  stackIds?: number[];
  progressMethod?: string;
  positionId?: number;
  categoryId?: number;
  sort?: Sort[];
}

export interface Participant {
  id: number;
  nickname: string;
  role: Role;
  email: string;
  position: Position;
  // 총합 출석일
  totalAttendance: number;
  // 최근 출석일
  recentAttendanceDate: string | null;
}

export interface Applicant extends Omit<Member, 'role'> {}

export interface StudyCreate {
  title: string;
  categoryId: number;
  positionId: number;
  way: ProgressMethod;
  platform: Platform;
  participantLimit: number;
  startDateTime: string;
  endDateTime: string;
}

export interface StudyDetail {
  study: {
    id: number;
    status: StudyStatus;
    title: string;
    platform: Platform;
    platformUrl: string;
    way: ProgressMethod;
    participantCount: number;
    participantLimit: number;
    // 출석요일
    attendanceDay: Array<number>;
    startDateTime: string;
    endDateTime: string;
    category: Category;
    owner: User;
    participants: Participant[];
    hasRecruitment: boolean;
    createdDateTime: string;
    updatedDateTime: string;
    // 스터디 지원자 수
    applicantCount: number;
  };
}

export interface ApplicantsDetail {
  study: {
    id: number;
    owner: User;
    status: StudyStatus;
    title: string;
    participantLimit: number;
    participantCount: number;
    startDateTime: string;
    endDateTime: string;
  };
  applicants: Applicant[];
}

export interface ParticipateStudy {
  studyId: number;
  title: string;
  position: Position;
  startDateTime: string;
  endDateTime: string;
  status: StudyStatus;
  participantCount: number;
  isOwner: boolean;
  hasRecruitment: boolean;
}

export interface ApplicantRecruitment {
  recruitmentId: number;
  title: string;
  position: Position;
  applicantStatus: ApplyStatus;
}

export interface Option<T, K> {
  value: T;
  label: K;
}

export interface CompletedStudy {
  studyId: number;
  title: string;
  position: Position;
  startDateTime: string;
  endDateTime: string;
  status: StudyStatus;
  participantCount: number;
  isOwner: boolean;
  hasRecruitment: boolean;
}

export interface MyStudies {
  participateStudies: ParticipateStudy[];
  applicantRecruitments: ApplicantRecruitment[];
  completedStudies: CompletedStudy[];
}

export interface MyPageInfo extends MyStudies {
  user: User;
}
