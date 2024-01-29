import { HttpResponse, http } from 'msw';
import { StudyListMockData } from '../data/mockData';

const getStudyListInfo = http.get('/studies', () => {
  return HttpResponse.json({
    studyList: [...StudyListMockData],
  });
});

export default [getStudyListInfo];
