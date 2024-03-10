import { APPLY_STATUS, MEMBER_STATUS, PLATFORM, PROCESS_METHOD, ROLE, STUDY_STATUS } from '@/Shared/study';

export type StudyCategory = '코딩 테스트' | '모의 면접' | '프로젝트';
export type CategoryPropertyType = 'category' | 'stacks' | 'positions' | 'way' | 'sort';
export type StudyStatus = keyof typeof STUDY_STATUS;
export type MemberStatus = keyof typeof MEMBER_STATUS;
export type ApplyStatus = keyof typeof APPLY_STATUS;
export type ProgressMethod = keyof typeof PROCESS_METHOD;
export type AllType = '전체';
export type Role = keyof typeof ROLE;
export type Platform = keyof typeof PLATFORM;
export type Card = 'STUDY' | 'RECRUITMENT';
export type Sort = '최신순' | '조회순';
export interface Position {
  id: number;
  name: '백엔드' | '프론트엔드' | '디자이너' | '데브옵스';
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

export interface RecruitmentInfoType {
  recruitmentId: number;
  recruitmentTitle: string;
  applicantCnt: number;
  positions: Position[];
  stacks: string[];
  contact: string;
  platformUrl: string;
  content: string;
  creator: string;
  createdAt: string;
  recruitmentEndDate: string;
  isModified?: boolean;
  views: number;
}

export interface ProgressInfoType {
  progressMethod: ProgressMethod;
  platform: string;
  startDate: string;
  endDate: string;
}

export interface StudyBasicInfoType {
  studyId?: number;
  studyTitle: string;
  category: StudyCategory;
  memberCnt: number;
}

export type MainCategoryNameType = '스터디 유형' | '기술 스택' | '포지션' | '진행 방식' | '목록 정렬 기준';

export interface MainCategoryType<T, S> {
  categoryName: MainCategoryNameType;
  categoryProperty: string;
  categoryItems?: (T | S)[];
}

export interface FilterOptionsType {
  category: StudyCategory[];
  stacks: string[];
  positions: Position[];
  way: ProgressMethod;
  sort: Sort[];
}

//////////////////
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
    endDateTime: string;
  };
  study: {
    id: number;
    title: string;
    category: { id: number; name: StudyCategory };
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
  category: { id: number; name: StudyCategory };
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
    category: {
      id: number;
      name: StudyCategory;
    };
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
