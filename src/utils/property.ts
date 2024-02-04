import { PopularRecruitmentsRawDataType, RecruitmentRawDataType } from '@/Types/study';

export const convertRecruitementRawDataToStudyCardProps = (recruitementRawData: RecruitmentRawDataType) => {
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
  return recruitments.map((recruitment) => convertRecruitementRawDataToStudyCardProps(recruitment));
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
