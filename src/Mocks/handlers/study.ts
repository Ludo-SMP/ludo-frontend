import { HttpResponse, http } from 'msw';
import { applicantsMockData, studyDetailMockData, myStudiesMockData } from '../data/mockStudies';
import { StudyDetailResponseData } from '@/Types/study';
import { HttpStatus } from '@/Constants/StatusCodes';
const baseURL = import.meta.env.VITE_MOCK_API_URL;

const getStudyDetail = http.get(`${baseURL}/api/studies/:studyId`, async ({ params }) => {
  const studyId: number = Number(params?.studyId);
  return new HttpResponse(
    JSON.stringify({
      data: studyDetailMockData.filter((studyDetail: StudyDetailResponseData) => studyDetail?.study.id === studyId)[0],
      message: 'Success',
    }),
    {
      status: HttpStatus.OK,
      statusText: 'OK',
    },
  );
});

const getApplicants = http.get(`${baseURL}/api/studies/:studyId/recruitments/users`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: { recruitmentUsers: applicantsMockData },
      message: 'Success',
    }),
    {
      status: HttpStatus.OK,
      statusText: 'OK',
    },
  );
});

const getMyStudies = http.get(`${baseURL}/api/users/mypage`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: { ...myStudiesMockData },
      message: 'Success',
    }),
    {
      status: HttpStatus.OK,
      statusText: '',
    },
  );
});

const applyStudy = http.post(`${baseURL}/api/studies/:studyId/recruitments/:recruitmentId/apply`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: { applicantId: 6 },
      message: '스터디 지원을 완료했습니다.',
    }),
    {
      status: HttpStatus.CREATED,
      statusText: 'Created',
    },
  );
});

const failApplyStudy = http.post(`${baseURL}/api/studies/:studyId/recruitments/:recruitmentId/apply`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: '지원이 마감된 스터디입니다.',
    }),
    {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusText: 'INTERNAL_SERVER_ERROR',
    },
  );
});

const refuseApply = http.post(
  `${baseURL}/api/studies/:studyId/recruitments/:recruitmentId/apply-refuse/:applicantId`,
  async () => {
    return new HttpResponse(
      JSON.stringify({
        message: '지원자의 스터디 지원을 거절하였습니다.',
        data: null,
      }),
      {
        status: HttpStatus.OK,
        statusText: 'OK',
      },
    );
  },
);

const failRefuseApply = http.post(
  `${baseURL}/api/studies/:studyId/recruitments/:recruitmentId/apply-refuse/:applicantId`,
  async () => {
    return new HttpResponse(
      JSON.stringify({
        message: '지원자의 스터디 지원을 거절하였습니다.',
        data: null,
      }),
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        statusText: 'INTERNAL_SERVER_ERROR',
      },
    );
  },
);

export default [getStudyDetail, getApplicants, getMyStudies, applyStudy, failRefuseApply];
