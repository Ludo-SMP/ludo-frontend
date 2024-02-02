import { HttpResponse, http } from 'msw';
import { StudyListMockData } from '../data/mockData';
import { popularRecruitmentsMockData } from '../data/mockData';
import { recruitmentDetailMockData } from '../data/mockData';
import { RecruitmentDetailType } from '@/Apis/study';

const getStudyListInfo = http.get('/recruitments', () => {
  return HttpResponse.json({
    studyList: [...StudyListMockData],
  });
});

const getPopularRecruitments = http.get('/', () => {
  return new HttpResponse(JSON.stringify({ data: popularRecruitmentsMockData, message: 'Success' }), {
    status: 200,
    statusText: 'OK',
  });
});

const getRecruitmentDetail = http.get(`/recruitments/:recruitmentId`, ({ params }) => {
  console.log('handler', params);
  const recruitmentId: number = parseInt(params?.recruitmentId);

  return new HttpResponse(
    JSON.stringify({
      data: {
        ...recruitmentDetailMockData.filter(
          (recruitmentDetail: RecruitmentDetailType) => recruitmentDetail.id === recruitmentId,
        )[0],
      },
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

export default [getStudyListInfo, getPopularRecruitments, getRecruitmentDetail];
