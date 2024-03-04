export type Position = '백엔드' | '프론트엔드' | '디자이너' | '데브옵스';
export type ActivityType = '온라인' | '오프라인' | '미정';
export type ToolType = 'React' | 'Java' | 'Spring' | 'Figma' | 'Java' | 'Javascript';
export type StackType = ToolType;
export type ProgressMethod = ActivityType;
export type StudyCategory = '코딩 테스트' | '모의 면접' | '프로젝트';
export type SortType = '최신순' | '조회순';
export type CategoryPropertyType = 'category' | 'stacks' | 'positions' | 'way' | 'sort';
export type StudyApplyStatus = '합류 확정' | '지원 완료' | '합류 거절';
export type StudyStatus = '진행 중' | '모집 중' | '모집 완료' | '완료됨';
export type myStudyStatus = '참여' | '지원' | '완료';
export type AllType = '전체';
export type Role = '팀장' | '팀원';
export type Platform = 'GATHER' | 'GOOGLE MEET';
export interface Member {
  id: number;
  nickname: string;
  email: string;
  position: {
    id: number;
    name: StudyCategory | string;
  };
  role: Role | string;
}

export interface Applicant extends Omit<Member, 'role'> {}

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

export const defaultFilterOptions = {
  category: ['코딩 테스트', '모의 면접', '프로젝트'],
  stacks: ['React', 'Java', 'Spring', 'Figma', 'Java', 'Javascript'],
  positions: ['백엔드', '프론트엔드', '기획', '디자이너'],
  way: ['온라인', '오프라인', '미정'],
  sort: ['최신순'],
};

export interface Participant {
  id: number;
  nickname: string;
  role: 'OWNER' | 'MEMBER';
  email: string;
  position: { id: number; name: string };
}

export type Status = 'PROGRESS' | 'RECRUITING' | 'RECRUITED' | 'COMPLETED';

export interface StudyDetailResponseData {
  study: {
    id: number;
    status: Status;
    title: string;
    platform: Platform;
    way: 'ONLINE' | 'OFFLINE';
    participantsCount: number;
    participantsLimit: number;
    startDateTime: string;
    endDateTime: string;
    category: {
      id: number;
      name: StudyCategory | string;
    };
    owner: {
      id: number;
      nickname: string;
      email: string;
    };
    participants: Participant[];
    applicants: Applicant[];
  };
}

export interface StudyInfoType {
  studyId: number;
  title: string;
  progressMethod: ProgressMethod;
  category: StudyCategory;
  startDate: string;
  endDate: string;
}

export interface StudyDetail {
  studyId: number;
  title: string;
  progressMethod: ProgressMethod;
  members: Member[];
  memberCnt: number;
  memberLimit: number;
}

export interface ParticiPantStudyType {
  id: number;
  title: string;
  status: StudyStatus[];
  startDateTime: string;
  endDateTime: string;
}

export interface ApplicantStudyType {
  id: number;
  title: string;
  status: StudyStatus[];
}

export interface MyStudiesType {
  user: Pick<Member, 'id' | 'nickname' | 'email'>;
  participantStudies: ParticiPantStudyType[];
  applicantStudies: ApplicantStudyType[];
}
