import {
  PopularRecruitmentsRawDataType,
  RecruitmentRawDataType,
  RecruitmentDetailRawDataType,
  RecruitmentDetailType,
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