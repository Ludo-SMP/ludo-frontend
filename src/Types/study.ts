export type PositionType = '백엔드' | '프론트엔드' | '기획' | '디자이너';
export type ActivityType = '온라인' | '오프라인' | '미정';
export type ToolType = 'React' | 'Java' | 'Spring' | 'Figma' | 'Java' | 'Javascript';
export type StackType = ToolType;
export type ProgressMethodType = ActivityType;
export type StudyCategoryType = '코딩 테스트' | '모의 면접' | '프로젝트' | 'All';

export interface RecruitmentInfoType {
  recruitmentId: number;
  recruitmentTitle: string;
  applicantCnt: number;
  positions: PositionType[];
  stacks: StackType[];
  contact: string;
  platfromUrl: string;
  detail: string;
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
  studyId: number;
  studyTitle: string;
  category: StudyCategoryType;
  memberCnt: number;
}

export interface StudyInfoType extends RecruitmentInfoType, ProgressInfoType, StudyBasicInfoType {}

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

export interface StudyInfoRawDataType extends RecruitmentRawDataType {
  applicantCount: number;
  platformUrl: string;
  content: string;
  platform: string;
  memberCnt: number;
  cotnact: string;
}
