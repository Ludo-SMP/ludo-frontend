import {
  PopularRecruitmentsRawDataType,
  RecruitmentRawDataType,
  RecruitmentDetailRawDataType,
  RecruitmentDetailType,
} from '@/Types/study';
import { STUDY_STATUS } from '../Shared/study';

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
