import { APPLY_STATUS, MEMBER_STATUS, PLATFORM, PROGRESS_METHOD, ROLE, STUDY_STATUS } from '@/Shared/study';

export type CategoryPropertyType = 'category' | 'stacks' | 'positions' | 'way' | 'sort';
export type StudyStatus = keyof typeof STUDY_STATUS;
export type MemberStatus = keyof typeof MEMBER_STATUS;
export type ApplyStatus = keyof typeof APPLY_STATUS;
export type ProgressMethod = keyof typeof PROGRESS_METHOD;
export type Role = keyof typeof ROLE;
export type Platform = keyof typeof PLATFORM;
export type Card = 'STUDY' | 'RECRUITMENT';
export type Sort = '최신순' | '조회순';
export type ApplyTryStatus = 'NOT APPLY' | 'SUCCESS' | 'FAIL';

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

/////////////////////
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
    contact: string;
    callUrl: string;
    content: string;
    createdDateTime: string;
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

export interface FilterOptionParams {
  last?: number;
  pageNum: number;
  count: number;
  stackId: number;
  progressMethod: string;
  positionId: number;
  categoryId: number;
  sort?: Sort[];
}

////////////////////////

export interface Participant {
  id: number;
  nickname: string;
  role: Role;
  email: string;
  position: Position;
}
export interface Applicant extends Omit<Member, 'role'> {}

export interface StudyDetail {
  study: {
    id: number;
    status: StudyStatus;
    title: string;
    platform: Platform;
    way: ProgressMethod;
    participantsCount: number;
    participantsLimit: number;
    startDateTime: string;
    endDateTime: string;
    category: Category;
    owner: User;
    participants: Participant[];
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
}

export interface ApplicantRecruitment {
  recruitmentId: number;
  title: string;
  position: { id: number; name: Position };
  applicantStatus: ApplyStatus;
}

export interface CompletedStudy {
  studyId: number;
  title: string;
  position: Position;
  startDateTime: string;
  endDateTime: string;
  status: StudyStatus;
  participantCount: number;
}

export interface MyStudies {
  participateStudies: ParticipateStudy[];
  applicantRecruitments: ApplicantRecruitment[];
  completedStudies: CompletedStudy[];
}

export interface MyPageInfo extends MyStudies {
  user: User;
}
