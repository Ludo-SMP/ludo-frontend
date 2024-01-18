import { BannerProps } from '../Components/Banner';
import { StudyInfo } from '../Components/StudyCard';

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

export const projectStudyInfosDummy: StudyInfo[] = [
  {
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
  },
  {
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
  },
  {
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
  },
];

export const projectStudyListDummy = {
  studyType: '프로젝트',
  studyInfos: projectStudyInfosDummy,
};
