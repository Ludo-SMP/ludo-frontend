export type PositionType = '백엔드' | '프론트엔드' | '디자이너' | '데브옵스';
export type ActivityType = '온라인' | '오프라인' | '미정';
export type ToolType = 'React' | 'Java' | 'Spring' | 'Figma' | 'Java' | 'Javascript';
export type StackType = ToolType;
export type ProgressMethodType = ActivityType;
export type StudyCategoryType = '코딩 테스트' | '모의 면접' | '프로젝트';
export type SortType = '최신순' | '조회순';
export type CategoryPropertyType = 'category' | 'stacks' | 'positions' | 'way' | 'sort';
export type TeamPositionType = '팀장' | '팀원';
export type StudyApplyState = '합류 확정' | '지원 완료' | '합류 거절';
export type StudyRecruitState = '모집 중' | '모집 마감';
export type StudyProgressState = '진행 중' | '진행 완료';
export type myStudyState = '참여' | '지원' | '완료';
export type AllType = '전체';

export interface MemberType {
  nickname: string;
  email: string;
  teamPosition: string;
  skillPosition: string;
}

export interface RecruitmentInfoType {
  recruitmentId: number;
  recruitmentTitle: string;
  applicantCnt: number;
  positions: PositionType[];
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
  progressMethod: ProgressMethodType;
  platform: string;
  startDate: string;
  endDate: string;
}

export interface StudyBasicInfoType {
  studyId?: number;
  studyTitle: string;
  category: StudyCategoryType;
  memberCnt: number;
}

export interface RecruitmentDetailType extends RecruitmentInfoType, ProgressInfoType, StudyBasicInfoType {}

// StudyCard Prop로 사용하기 전, 서버로부터 받은 Raw Data
export interface RecruitmentRawDataType {
  id: number;
  title: string;
  stacks: ToolType[];
  category: StudyCategoryType;
  positions: PositionType[];
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

export interface MainCategoryType<T, S> {
  categoryName: MainCategoryNameType;
  categoryProperty: string;
  categoryItems?: (T | S)[];
}

export interface FilterOptionsType {
  category: StudyCategoryType[];
  stacks: StackType[];
  positions: PositionType[];
  way: ProgressMethodType[];
  sort: SortType[];
}

export const defaultFilterOptions = {
  category: ['코딩 테스트', '모의 면접', '프로젝트'],
  stacks: ['React', 'Java', 'Spring', 'Figma', 'Java', 'Javascript'],
  positions: ['백엔드', '프론트엔드', '기획', '디자이너'],
  way: ['온라인', '오프라인', '미정'],
  sort: ['최신순'],
};
