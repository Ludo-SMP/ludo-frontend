import { HttpResponse, http } from 'msw';
import { applicantsMockData, studyDetailMockData, myStudiesMockData } from '../data/mockStudies';
import { StudyDetailRawType } from '@/Types/study';
const baseURL = import.meta.env.VITE_MOCK_API_URL;

const getStudyDetail = http.get(`${baseURL}/studies/:studyId`, async ({ params }) => {
  const studyId: number = Number(params?.studyId);
  return new HttpResponse(
    JSON.stringify({
      data: studyDetailMockData.filter((studyDetail: StudyDetailRawType) => studyDetail?.study.id === studyId)[0],
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const getApplicants = http.get(`${baseURL}/studies/:studyId/recruitments/users`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: { recruitmentUsers: applicantsMockData },
      message: 'Success',
    }),
    {
      status: 200,
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
      status: 200,
      statusText: 'OK',
    },
  );
});

const applyStudy = http.post(`${baseURL}/api/studies/:studyId/recruitments/:recruitmentId/apply`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: { applicantId: 6 },
      message: 'Success',
    }),
    {
      status: 201,
      statusText: 'OK',
    },
  );
});

const failApplyStudy = http.post(`${baseURL}/api/studies/:studyId/recruitments/:recruitmentId/apply`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: '',
    }),
    {
      status: 500,
      statusText: 'OK',
    },
  );
});

export default [getStudyDetail, getApplicants, getMyStudies, failApplyStudy];
