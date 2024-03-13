import { BannerProps } from '../Components/Banner';
import { TemporarySavedCardProps } from '@/Components/TemporarySavedCard';
export const bannerDummy: BannerProps = {
  brief: '함께 발견하는 가능성, 기회의 연결',
  title: 'Ludo Study',
};

export const studyInfoDummy = {
  studyId: 1,
  studyCategory: '프로젝트',
  recruitDeadLine: '24. 03. 01',
  studyName: 'Ludo Study',
  studyPeriod: '3개월',
  activityType: '오프라인',
  positions: ['백엔드', '프론트엔드', '디자이너'],
  tools: ['React', 'Figma', 'Spring'],
  creator: 'Hyun',
  createdAt: '2024.01.18',
  views: 1234,
};

export const algorithmStudyInfosDummy = [
  {
    studyId: 1,
    studyCategory: '코딩 테스트',
    recruitDeadLine: '24.03.01',
    studyName: 'Ludo Algorithm 1',
    studyPeriod: '3개월',
    activityType: '오프라인',
    positions: ['백엔드', '프론트엔드'],
    tools: ['Java', 'Javascript'],
    creator: 'BBack',
    createdAt: '2024.01.11',
    views: 1234,
  },
  {
    studyId: 2,
    studyCategory: '코딩 테스트',
    recruitDeadLine: '24.02.22',
    studyName: 'Ludo Algorithm 2',
    studyPeriod: '0.5개월',
    activityType: '온라인',
    positions: ['백엔드'],
    tools: ['Java'],
    creator: '휴',
    createdAt: '2024.01.12',
    views: 230,
  },
  {
    studyId: 3,
    studyCategory: '코딩 테스트',
    recruitDeadLine: '24.04.23',
    studyName: 'Ludo Algorithm 3',
    studyPeriod: '4개월',
    activityType: '오프라인',
    positions: ['프론트엔드'],
    tools: ['Javascript'],
    creator: 'Hyun',
    createdAt: '2024.01.15',
    views: 999999,
  },
];

export const interviewStudyInfosDummy = [
  {
    studyId: 4,
    studyCategory: '모의 면접',
    recruitDeadLine: '24.02.01',
    studyName: 'Ludo Interview 1',
    studyPeriod: '2개월',
    activityType: '오프라인',
    positions: ['백엔드', '프론트엔드', '디자이너'],
    tools: ['React', 'Spring', 'Figma'],
    creator: '휴',
    createdAt: '2024.01.16',
    views: 24,
  },
  {
    studyId: 5,
    studyCategory: '모의 면접',
    recruitDeadLine: '24.02.22',
    studyName: 'Ludo Interview 2',
    studyPeriod: '3개월',
    activityType: '오프라인',
    positions: ['디자이너', '데브옵스'],
    tools: ['Figma'],
    creator: 'BBak',
    createdAt: '2024.01.25',
    views: 1111,
  },
  {
    studyId: 6,
    studyCategory: '모의 면접',
    recruitDeadLine: '24.03.13',
    studyName: 'Ludo Interview 3',
    studyPeriod: '1개월',
    activityType: '온라인',
    positions: ['백엔드', '프론트엔드', '디자이너'],
    tools: ['React', 'Figma', 'Spring'],
    creator: 'Hyun',
    createdAt: '2024.01.31',
    views: 1234,
  },
];

export const projectStudyInfosDummy = [
  {
    studyId: 7,
    studyCategory: '프로젝트',
    recruitDeadLine: '24.03.12',
    studyName: 'Ludo Study Project 1',
    studyPeriod: '6개월',
    activityType: '오프라인',
    positions: ['백엔드', '디자이너', '프론트엔드'],
    tools: ['React', 'Figma', 'Spring'],
    creator: 'Ludo',
    createdAt: '2024.02.01',
    views: 3333,
  },
  {
    studyId: 8,
    studyCategory: '프로젝트',
    recruitDeadLine: '24.02.22',
    studyName: 'Ludo Study Project 2',
    studyPeriod: '3개월',
    activityType: '오프라인',
    positions: ['백엔드', '프론트엔드', '기획'],
    tools: ['React', 'Figma', 'Spring'],
    creator: 'Hyun',
    createdAt: '2024.01.31',
    views: 5555,
  },
  {
    studyId: 9,
    studyCategory: '프로젝트',
    recruitDeadLine: '24.03.01',
    studyName: 'Ludo Study Project 3',
    studyPeriod: '3개월',
    activityType: '오프라인',
    positions: ['백엔드', '프론트엔드'],
    tools: ['React', 'Spring'],
    creator: 'Poca',
    createdAt: '2024.2.18',
    views: 12346789,
  },
];

export const recruitmentDetailMockData = [
  {
    id: 1,
    title: '인기 코테 스터디 1',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 111,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 2,
    title: '인기 코테 스터디 2',
    stacks: ['Javascript'],
    positions: ['프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 222,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 3,
    title: '인기 코테 스터디 3',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 333,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 4,
    title: '인기 모의 면접 스터디 4',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 444,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 5,
    title: '인기 모의 면접 스터디 5',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 555,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 6,
    title: '인기 모의 면접 스터디 6',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 666,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 7,
    title: '인기 프로젝트 스터디 7',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 777,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 8,
    title: '인기 프로젝트 스터디 8',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 888,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 9,
    title: '인기 프로젝트 스터디 9',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 999,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 10,
    title: '인기 프로젝트 스터디 10',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 1010,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 11,
    title: '인기 코테 스터디 11',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 1111,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 12,
    title: '인기 코테 스터디 12',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 1222,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 13,
    title: '인기 코테 스터디 13',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 1333,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 14,
    title: '인기 모의 면접 스터디 14',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 1444,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 15,
    title: '인기 모의 면접 스터디 15',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 1555,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 16,
    title: '인기 모의 면접 스터디 16',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 1666,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 17,
    title: '인기 프로젝트 스터디 17',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 1777,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 18,
    title: '인기 프로젝트 스터디 18',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 1888,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 19,
    title: '인기 프로젝트 스터디 19',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 1999,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 20,
    title: '인기 프로젝트 스터디 20',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 11010,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 21,
    title: '인기 코테 스터디 21',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 2111,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 22,
    title: '인기 코테 스터디 22',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 2222,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 23,
    title: '인기 코테 스터디 23',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 2333,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 24,
    title: '인기 모의 면접 스터디 24',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 2444,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 25,
    title: '인기 모의 면접 스터디 25',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 2555,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 26,
    title: '인기 모의 면접 스터디 26',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 2666,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 27,
    title: '인기 프로젝트 스터디 27',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 2777,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 28,
    title: '인기 프로젝트 스터디 28',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 2888,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 29,
    title: '인기 프로젝트 스터디 29',
    stacks: ['Java'],
    positions: ['백엔드', '디자이너'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 2999,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 30,
    title: '인기 프로젝트 스터디 30',
    stacks: ['Java', 'React', 'Figma'],
    positions: ['백엔드', '디자이너'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 21010,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 31,
    title: '인기 코테 스터디 31',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 3111,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 32,
    title: '인기 코테 스터디 32',
    stacks: ['Javascript', 'Java'],
    positions: ['프론트엔드', '디자이너'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 3222,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 33,
    title: '인기 코테 스터디 33',
    stacks: ['Java', 'Javascript'],
    positions: ['프론트엔드', '디자이너', '백엔드'],
    ownerNickname: '아카',
    way: '미정',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 3333,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'coding test',
    category: '코딩 테스트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 34,
    title: '인기 모의 면접 스터디 34',
    stacks: ['Java', 'Spring'],
    positions: ['디자이너'],
    ownerNickname: '휴',
    way: '온라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 3444,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 35,
    title: '인기 모의 면접 스터디 35',
    stacks: ['Javascript', 'React', 'Java', 'Spring'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 3555,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 36,
    title: '인기 모의 면접 스터디 36',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 3666,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'interview',
    category: '모의 면접',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 37,
    title: '인기 프로젝트 스터디 37',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '휴',
    way: '오프라인',
    startDateTime: '2024-03-01',
    endDateTime: '2024-04-01',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 3777,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 38,
    title: '인기 프로젝트 스터디 38',
    stacks: ['Javascript'],
    positions: ['백엔드', '프론트엔드'],
    ownerNickname: 'Hyun',
    way: '온라인',
    startDateTime: '2024-02-03',
    endDateTime: '2024-02-29',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-14',
    hits: 3888,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 39,
    title: '인기 프로젝트 스터디 39',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 3999,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
  {
    id: 40,
    title: '인기 프로젝트 스터디 40',
    stacks: ['Java'],
    positions: ['백엔드'],
    ownerNickname: '아카',
    way: '온라인',
    startDateTime: '2024-03-03',
    endDateTime: '2024-04-03',
    recruitmentEndDateTime: '2024-02-01',
    createdDateTime: '2024-01-29',
    hits: 31010,
    applicantCount: 5,
    platformUrl: 'https://open.kakao.com/o/222222',
    content: 'project',
    category: '프로젝트',
    platform: '디스코드',
    memberCnt: 4,
    contact: '디스코드',
  },
];

export const recruitmentsMockData = [
  ...recruitmentDetailMockData.map((recruitmentDetail) => {
    const {
      id,
      title,
      stacks,
      positions,
      ownerNickname,
      way,
      startDateTime,
      endDateTime,
      recruitmentEndDateTime,
      createdDateTime,
      hits,
      category,
    } = recruitmentDetail;
    const recruitmentCardRawData = {
      id,
      title,
      stacks,
      positions,
      ownerNickname,
      way,
      startDateTime,
      endDateTime,
      recruitmentEndDateTime,
      createdDateTime,
      hits,
      category,
    };
    return recruitmentCardRawData;
    return recruitmentCardRawData;
  }),
];

export const recruitmentDetailMockDataById = (recruitmentId: number) =>
  recruitmentDetailMockData.filter((recruitmentDetail) => recruitmentDetail.id === recruitmentId)[0];
export const temporarySavedCardMockData: TemporarySavedCardProps[] = [
  { title: '모집공고 1', id: 1, card: 'RECRUITMENT' },
  { title: '모집공고 2', id: 2, card: 'RECRUITMENT' },
  { title: '모집공고 3', id: 3, card: 'RECRUITMENT' },
  { title: '모집공고 4', id: 4, card: 'RECRUITMENT' },
  { title: '스터디 1', card: 'STUDY' },
  { title: '스터디 2', card: 'STUDY' },
  { title: '스터디 3', card: 'STUDY' },
  { title: '스터디 4', card: 'STUDY' },
];
