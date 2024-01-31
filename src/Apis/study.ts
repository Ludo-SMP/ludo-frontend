import axios, { AxiosInstance } from 'axios';
import { SuccessResponse } from '@/Types/response';
import Tool from '@/Components/StudyCard/Tool';
import { PositionType } from '@/Components/StudyCard/Position';
import { ActivityType } from '@/Components/StudyCard';

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
  hits: number;
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
  apiRequester.get('/studies').then((res) => {
    return res.data;
  });
