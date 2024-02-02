import axios, { AxiosInstance } from 'axios';
import { SuccessResponse } from '@/Types/response';
import Tool from '@/Components/StudyCard/Tool';
import { PositionType } from '@/Components/StudyCard/Position';
import { ActivityType, StudyCategory } from '@/Components/StudyCard';

import { useQuery } from '@tanstack/react-query';
const apiRequester: AxiosInstance = axios.create({ baseURL: import.meta.env.API_URL });

export interface PopularRecruitment {
  id: number;
  title: string;
  stacks: Tool[];
  positions: PositionType[];
  ownerNickname: string;
  way: ActivityType;
  startDateTime: string;
  endDateTime: string;
  recruitmentEndDateTime: string;
  createdDateTime: string;
  hits?: number;
}

export interface RecruitmentDetailType extends PopularRecruitment {
  category: StudyCategory;
  applicantCount: number;
  platformUrl: string;
  content: string;
}

export interface PopularRecruitments {
  popularCodingRecruitments: PopularRecruitment[];
  popularInterviewRecruitments: PopularRecruitment[];
  popularProjectRecruitments: PopularRecruitment[];
}

export type GetPopularRecruitmentsResponse = SuccessResponse<PopularRecruitments>;

export const getPopularRecruitments = () =>
  apiRequester.get('/').then((res) => {
    return res.data;
  });

export const fetchStudyListInfo = () =>
  apiRequester.get('/recruitments').then((res) => {
    return res.data;
  });

export const getRecruitmentDetail = (studyId: number) =>
  apiRequester.get(`/recruitments/${studyId}`).then((res) => {
    return res.data;
  });

export const useRecruitmentDetail = (studyId: number) => {
  console.log('userRecruitmentDetail', studyId);
  return useQuery({
    queryKey: ['recruitmentDetail'],
    queryFn: () => getRecruitmentDetail(studyId),
  });
};
