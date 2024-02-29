import {
  PopularRecruitmentsRawDataType,
  RecruitmentRawDataType,
  RecruitmentDetailRawDataType,
  RecruitmentDetailType,
  StudyDetailRawType,
  Participant,
  ApplicantType,
} from '@/Types/study';

export const convertRecruitmentRawDataToStudyCardProps = (recruitementRawData: RecruitmentRawDataType) => {
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
  } = recruitementRawData;
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

export const convertRecruitmentsToStudyCardProps = (recruitments: RecruitmentRawDataType[]) => {
  return recruitments.map((recruitment) => convertRecruitmentRawDataToStudyCardProps(recruitment));
};

export const convertPopularRecruitmentsToStudyCardProps = (popularRecruitments: PopularRecruitmentsRawDataType) => {
  const {
    popularCodingRecruitments: codingRecruitments,
    popularInterviewRecruitments: interviewRecruitments,
    popularProjectRecruitments: projectRecruitments,
  } = popularRecruitments;
  return {
    popularCodingRecruitments: convertRecruitmentsToStudyCardProps(codingRecruitments),
    popularInterviewRecruitments: convertRecruitmentsToStudyCardProps(interviewRecruitments),
    popularProjectRecruitments: convertRecruitmentsToStudyCardProps(projectRecruitments),
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

export const convertStudyDetailRawDataToStudyDetail = (studyDetailRawData: StudyDetailRawType) => {
  const { study, participants, participantsCount: memberCnt, participantsLimit: memberLimit } = studyDetailRawData;
  const {
    id: studyId,
    title,
    way: progressMethod,
    category,
    startDateTime: startDate,
    endDateTime: endDate,
    dDay,
  } = study;
  const members = participants.map((participant: Participant) => {
    const { id, name: nickname, email, position, role: _role } = participant;
    const role = _role === 'Owner' ? '팀장' : '팀원';
    return { id, nickname, email, position, role };
  });
  return {
    studyInfo: { studyId, title, progressMethod, category, startDate, endDate, dDay },
    members,
    memberCnt,
    memberLimit,
  };
};

export const convertApplicantsRawDataToApplicants = (applicantsRawData: { recruitmentUsers: ApplicantType[] }) => {
  const { recruitmentUsers } = applicantsRawData;
  return [...recruitmentUsers];
};
