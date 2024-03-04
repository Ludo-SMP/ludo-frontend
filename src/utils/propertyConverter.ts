import {
  PopularRecruitmentsRawDataType,
  RecruitmentRawDataType,
  RecruitmentDetailRawDataType,
  RecruitmentDetailType,
  StudyDetailResponseData,
  Participant,
  ApplicantType,
  ProgressMethod,
} from '@/Types/study';

export const status = {
  PROGRESS: '진행중',
  RECRUITING: '모집중',
  RECRUITED: '모집 완료',
  COMPLETED: '완료됨',
};

export const position = {
  1: '벡엔드',
  2: '프론트엔드',
  3: '디자이너',
  4: '데브옵스',
};

export const process = {
  ONLINE: '온라인',
  OFFLINE: '오프라인',
};

export const category = {
  1: '프로젝트',
  2: '코딩테스트',
  3: '모의면접',
};

export const convertRecruitmentRawDataToRecruitmentCardProps = (recruitmentRawData: RecruitmentRawDataType) => {
  const {
    id: recruitmentId,
    title: recruitmentTitle,
    positions,
    stacks,
    ownerNickname: creator,
    createdDateTime: createdAt,
    recruitmentEndDateTime: recruitmentEndDate,
    hits: views,
    category,
    startDateTime: startDate,
    endDateTime: endDate,
    way: progressMethod,
  } = recruitmentRawData;
  return {
    recruitmentId,
    recruitmentTitle,
    positions,
    stacks,
    creator,
    createdAt,
    recruitmentEndDate,
    views,
    category,
    startDate,
    endDate,
    progressMethod,
  };
};

export const convertRecruitmentsToRecruitmentCardProps = (recruitments: RecruitmentRawDataType[]) => {
  return recruitments.map((recruitment) => convertRecruitmentRawDataToRecruitmentCardProps(recruitment));
};

export const convertPopularRecruitmentsToRecruitmentCardProps = (
  popularRecruitments: PopularRecruitmentsRawDataType,
) => {
  const {
    popularCodingRecruitments: codingRecruitments,
    popularInterviewRecruitments: interviewRecruitments,
    popularProjectRecruitments: projectRecruitments,
  } = popularRecruitments;
  return {
    popularCodingRecruitments: convertRecruitmentsToRecruitmentCardProps(codingRecruitments),
    popularInterviewRecruitments: convertRecruitmentsToRecruitmentCardProps(interviewRecruitments),
    popularProjectRecruitments: convertRecruitmentsToRecruitmentCardProps(projectRecruitments),
  };
};

export const convertRecruitmentDetailRawDataToRecruitmentDetail = (
  recruitmentDetailRawData: RecruitmentDetailRawDataType,
): RecruitmentDetailType => {
  const {
    id: recruitmentId,
    title: recruitmentTitle,
    positions,
    stacks,
    ownerNickname: creator,
    createdDateTime: createdAt,
    recruitmentEndDateTime: recruitmentEndDate,
    hits: views,
    category,
    startDateTime: startDate,
    endDateTime: endDate,
    way: progressMethod,
    applicantCount: applicantCnt,
    platformUrl,
    content,
    platform,
    memberCnt,
    contact,
  } = recruitmentDetailRawData;
  const studyTitle = '[스터디 제목] ' + recruitmentTitle;
  return {
    recruitmentId,
    recruitmentTitle,
    positions,
    stacks,
    creator,
    createdAt,
    recruitmentEndDate,
    views,
    category,
    startDate,
    endDate,
    progressMethod,
    applicantCnt,
    platformUrl,
    content,
    platform,
    memberCnt,
    contact,
    studyTitle,
  };
};

export const convertStudyDetailRawDataToStudyDetail = (studyDetailRawData: StudyDetailResponseData) => {
  const {
    id,
    status,
    title,
    platform,
    way,
    participantsCount: memberCnt,
    participantsLimit: memberLimit,
    startDateTime: startDate,
    endDateTime: endDate,
    category,
    owner,
    participants,
  } = studyDetailRawData.study;

  const members = participants.map((participant: Participant) => {
    const { id, nickname, email, role: _role, position } = participant;
    const role = _role === 'OWNER' ? '팀장' : '팀원';
    return { id, nickname, role, email, position };
  });

  const progressMethod: ProgressMethod = way === 'OFFLINE' ? '오프라인' : way === 'ONLINE' ? '온라인' : '미정';
  return {
    id,
    status,
    title,
    owner,
    platform,
    progressMethod,
    category,
    startDate,
    endDate,
    members,
    memberCnt,
    memberLimit,
  };
};

export const convertApplicantsRawDataToApplicants = (applicantsRawData: { recruitmentUsers: ApplicantType[] }) => {
  const { recruitmentUsers } = applicantsRawData;
  return [...recruitmentUsers];
};
