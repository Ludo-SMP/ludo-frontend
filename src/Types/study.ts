import { APPLY_STATUS, POSITION, MEMBER_STATUS, PLATFORM, PROGRESS_METHOD, ROLE, STUDY_STATUS } from '@/Shared/study';
import { AttendanceDay } from './atoms';

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
export type ApplyTryStatus = 'NOT APPLY' | 'SUCCESS' | 'CLOSED' | 'ALREADY_APPLY' | 'ALREADY_PARTICIPATED';

export interface Position {
  id: number;
  name: '백엔드' | '프론트엔드' | '디자이너' | '데브옵스';
}

export interface Category {
  id: number;
  name: '프로젝트' | '코딩 테스트' | '모의 면접';
}

export interface User {
  /** 사용자 고유 ID */
  id: number;

  /** 사용자 닉네임 */
  nickname: string;

  /** 사용자 이메일 */
  email: string;
}

export interface Member extends User {
  /** 지원 포지션 */
  position: Position;

  /** 스터디원 역할, 스터디장, 스터디원, 또는 탈퇴 요청 */
  role: Role;

  /** 총합 출석일 */
  totalAttendance: number;

  /** 최근 출석일 */
  recentAttendanceDate: string | null;

  /** 해당 팀원에게 리뷰를 남겼는지 여부 */
  isReviewedParticipant: boolean;
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

export interface RecruitmentDetail {
  recruitment: {
    id: number;
    title: string;
    stacks: Stack[];
    positions: Position[];
    applicantCount: number;
    applicantLimit: number;
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
    platformUrl: string;
    way: ProgressMethod;
    participantLimit: number;
    startDateTime: string;
    endDateTime: string;
    attendanceDay: number[];
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
  positionIds: number[];
  applicantLimit: number;
  recruitmentEndDateTime: string;
  contact: string; // 'KAKAO' | 'EMAIL';
  callUrl: string;
  content: string;
}

// 셀렉트가 포함된 모집공고 폼 관리 타입
export interface RecruitFormWithSelect {
  title: RecruitmentForm['title'];
  recruitmentEndDateTime: RecruitmentForm['recruitmentEndDateTime'];
  callUrl: RecruitmentForm['callUrl'];
  content: RecruitmentForm['content'];
  stackIds?: Stack[];
  applicantLimit: number;
  contact: string;
  positionIds: number[];
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

/**
 * 스터디 지원자 타입
 */
export interface Applicant extends User {
  /** 지원 포지션 */
  position: Position;

  /** 해당 지원자의 평가 지표 */
  reviewStatistics: {
    activeness: number;
    professionalism: number;
    communication: number;
    together: number;
    recommend: number;
  };
}

export interface StudyCreate {
  title: string;
  categoryId: number;
  positionId: number;
  way: ProgressMethod;
  platform: Platform;
  platformUrl: string;
  participantLimit: number;
  startDateTime: string;
  endDateTime: string;
  attendanceDay: number[];
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
    attendanceDay: Array<AttendanceDay>;
    startDateTime: string;
    endDateTime: string;
    category: Category;
    owner: User;
    participants: Member[];
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

export interface Option {
  value: string | number;
  label: string | number;
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

/**
 * @description 마이페이지 신뢰도 항목 타입
 *
 * @property {number} finishStudy - 진행한 스터디
 * @property {number} perfectStudy - 완주한 스터디
 * @property {number} leftStudyCount - 탈퇴한 스터디
 * @property {number} accumulatedTeamMembers - 누적 팀원 수
 * @property {number} averageAttendanceRate - 평균 출석률
 * @property {number} activeness - 적극성
 * @property {number} professionalism - 전문성
 * @property {number} communication - 의사소통능력
 * @property {number} together - 협업능력 (80% 이상)
 * @property {number} recommend - 추천도 (80% 이상)
 *
 */
export interface Trust {
  finishStudy: number;
  perfectStudy: number;
  leftStudyCount: number;
  accumulatedTeamMembers: number;
  averageAttendanceRate: number;
  activeness: number;
  professionalism: number;
  communication: number;
  together: number;
  recommend: number;
}

export interface MyPageInfo extends MyStudies {
  user: User;
  trust: Trust;
}
