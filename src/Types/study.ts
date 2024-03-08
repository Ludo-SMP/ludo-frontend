import { APPLY_STATUS, MEMBER_STATUS, ROLE, STUDY_STATUS } from '@/Shared/study';

export type Position = '백엔드' | '프론트엔드' | '디자이너' | '데브옵스';
export type ActivityType = '온라인' | '오프라인' | '미정';
export type ToolType = 'React' | 'Java' | 'Spring' | 'Figma' | 'Java' | 'Javascript';
export type StackType = ToolType;
export type ProgressMethod = ActivityType;
export type StudyCategory = '코딩 테스트' | '모의 면접' | '프로젝트';
export type SortType = '최신순' | '조회순';
export type CategoryPropertyType = 'category' | 'stacks' | 'positions' | 'way' | 'sort';
export type StudyStatus = keyof typeof STUDY_STATUS;
export type MemberStatus = keyof typeof MEMBER_STATUS;
export type ApplyStatus = keyof typeof APPLY_STATUS;
export type AllType = '전체';
export type Role = keyof typeof ROLE;
export type Platform = 'GATHER' | 'GOOGLE MEET';
export type Card = 'STUDY' | 'RECRUITMENT';

export interface Member {
  id: number;
  nickname: string;
  email: string;
  position: PositionType;
  role: Role;
}

export interface User {
  id: number;
  nickname: string;
  email: string;
}

// 추후에 Position 타입과 통합하는 과정 필요
export interface PositionType {
  id: number;
  name: Position;
}

export interface RecruitmentInfoType {
  recruitmentId: number;
  recruitmentTitle: string;
  applicantCnt: number;
  positions: Position[];
  stacks: StackType[];
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

export interface RecruitmentDetailType extends RecruitmentInfoType, ProgressInfoType, StudyBasicInfoType {}

export interface RecruitmentRawDataType {
  id: number;
  title: string;
  stacks: ToolType[];
  category: StudyCategory;
  positions: Position[];
  ownerNickname: string;
  way: ActivityType;
  startDateTime: string;
  endDateTime: string;
  recruitmentEndDateTime: string;
  createdDateTime: string;
  hits: number;
}

export interface PopularRecruitmentsRawDataType {
  popularCodingRecruitments: RecruitmentRawDataType[];
  popularInterviewRecruitments: RecruitmentRawDataType[];
  popularProjectRecruitments: RecruitmentRawDataType[];
}

export interface RecruitmentDetailRawDataType extends RecruitmentRawDataType {
  applicantCount: number;
  platformUrl: string;
  content: string;
  platform: string;
  memberCnt: number;
  contact: string;
}

export type MainCategoryNameType = '스터디 유형' | '기술 스택' | '포지션' | '진행 방식' | '목록 정렬 기준';
export type ApplyState = 'NOT APPLY' | 'APPROVE' | 'FAIL';
export type ApplyAcceptState = 'REFUSED' | 'ACCEPTED' | 'NOT DETERMINED';

export interface MainCategoryType<T, S> {
  categoryName: MainCategoryNameType;
  categoryProperty: string;
  categoryItems?: (T | S)[];
}

export interface FilterOptionsType {
  category: StudyCategory[];
  stacks: StackType[];
  positions: Position[];
  way: ProgressMethod;
  sort: SortType[];
}

export interface Participant {
  id: number;
  nickname: string;
  role: Role;
  email: string;
  position: PositionType;
}
export interface Applicant extends Omit<Member, 'role'> {}

export interface StudyDetail {
  study: {
    id: number;
    status: StudyStatus;
    title: string;
    platform: Platform;
    way: 'ONLINE' | 'OFFLINE';
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
  position: PositionType;
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
  position: PositionType;
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
