import { BannerProps } from '../Components/Banner';
import { StudyInfo } from '../Components/StudyCard';
import { StudyCardListProps } from '../Components/StudyCardList';

export const bannerDummy: BannerProps = {
  brief: '함께 발견하는 가능성, 기회의 연결',
  title: 'Ludo Study',
};

export const studyInfoDummy: StudyInfo = {
  studyType: '프로젝트',
  recruitDeadLine: '24. 03. 01',
  studyName: 'Ludo Study',
  studyPeriod: '3개월',
  activityType: '오프라인',
  activityPositions: ['백엔드', '프론트엔드', '디자이너'],
  tools: ['React', 'Figma', 'Spring'],
  creator: 'Hyun',
  createdAt: '2024.01.18',
  views: 1234,
};

export const algorithmStudyInfosDummy: StudyInfo[] = [
  {
    studyType: '알고리즘',
    recruitDeadLine: '24.03.01',
    studyName: 'Ludo Algorithm 1',
    studyPeriod: '3개월',
    activityType: '오프라인',
    activityPositions: ['백엔드', '프론트엔드'],
    tools: ['Java', 'Javascript'],
    creator: 'BBack',
    createdAt: '2024.01.11',
    views: 1234,
  },
  {
    studyType: '알고리즘',
    recruitDeadLine: '24.02.22',
    studyName: 'Ludo Algorithm 2',
    studyPeriod: '0.5개월',
    activityType: '온라인',
    activityPositions: ['백엔드'],
    tools: ['Java'],
    creator: '아카',
    createdAt: '2024.01.12',
    views: 230,
  },
  {
    studyType: '알고리즘',
    recruitDeadLine: '24.04.23',
    studyName: 'Ludo Algorithm 3',
    studyPeriod: '4개월',
    activityType: '오프라인',
    activityPositions: ['프론트엔드'],
    tools: ['Javascript'],
    creator: 'Hyun',
    createdAt: '2024.01.15',
    views: 999999,
  },
];

export const interviewStudyInfosDummy: StudyInfo[] = [
  {
    studyType: '모의 면접',
    recruitDeadLine: '24.02.01',
    studyName: 'Ludo Interview 1',
    studyPeriod: '2개월',
    activityType: '오프라인',
    activityPositions: ['백엔드', '프론트엔드', '디자이너'],
    tools: ['React', 'Spring', 'Figma'],
    creator: '휴',
    createdAt: '2024.01.16',
    views: 24,
  },
  {
    studyType: '모의 면접',
    recruitDeadLine: '24.02.22',
    studyName: 'Ludo Interview 2',
    studyPeriod: '3개월',
    activityType: '오프라인',
    activityPositions: ['디자이너', '기획'],
    tools: ['Figma'],
    creator: '포카',
    createdAt: '2024.01.25',
    views: 1111,
  },
  {
    studyType: '모의 면접',
    recruitDeadLine: '24.03.13',
    studyName: 'Ludo Interview 3',
    studyPeriod: '1개월',
    activityType: '온라인',
    activityPositions: ['백엔드', '프론트엔드', '디자이너'],
    tools: ['React', 'Figma', 'Spring'],
    creator: 'Hyun',
    createdAt: '2024.01.31',
    views: 1234,
  },
];

export const projectStudyInfosDummy: StudyInfo[] = [
  {
    studyType: '프로젝트',
    recruitDeadLine: '24.03.12',
    studyName: 'Ludo Study Project 1',
    studyPeriod: '6개월',
    activityType: '오프라인',
    activityPositions: ['백엔드', '디자이너', '프론트엔드'],
    tools: ['React', 'Figma', 'Spring'],
    creator: 'Ludo',
    createdAt: '2024.02.01',
    views: 3333,
  },
  {
    studyType: '프로젝트',
    recruitDeadLine: '24.02.22',
    studyName: 'Ludo Study Project 2',
    studyPeriod: '3개월',
    activityType: '오프라인',
    activityPositions: ['백엔드', '프론트엔드', '기획'],
    tools: ['React', 'Figma', 'Spring'],
    creator: 'Hyun',
    createdAt: '2024.01.31',
    views: 5555,
  },
  {
    studyType: '프로젝트',
    recruitDeadLine: '24.03.01',
    studyName: 'Ludo Study Project 3',
    studyPeriod: '3개월',
    activityType: '오프라인',
    activityPositions: ['백엔드', '프론트엔드'],
    tools: ['React', 'Spring'],
    creator: 'Poca',
    createdAt: '2024.2.18',
    views: 12346789,
  },
];

export const algorithmStudyCardListPropsDummy: StudyCardListProps = {
  studyType: '알고리즘',
  studyInfos: algorithmStudyInfosDummy,
};

export const interviewStudyCardListPropsDummy: StudyCardListProps = {
  studyType: '모의 면접',
  studyInfos: interviewStudyInfosDummy,
};

export const projectStudyCardListPropsDummy: StudyCardListProps = {
  studyType: '프로젝트',
  studyInfos: projectStudyInfosDummy,
};
