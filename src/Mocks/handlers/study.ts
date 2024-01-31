import { HttpResponse, http } from 'msw';
import { StudyListMockData } from '../data/mockData';
import { popularRecruitmentsMockData } from '../data/mockData';

const getStudyListInfo = http.get('/studies', () => {
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

export default [getStudyListInfo, getPopularRecruitments];
