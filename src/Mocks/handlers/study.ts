import { HttpResponse, http } from 'msw';
import { applicantsMockData, studyDetailMockData } from '../data/mockStudies';
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

export default [getStudyDetail, getApplicants];
