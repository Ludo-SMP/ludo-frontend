import { HttpResponse, http } from 'msw';
import { StudyListMockData } from '../data/mockData';

const getStudyListInfo = http.get('/studies', () => {
  return HttpResponse.json({
    studyList: [...StudyListMockData],
  });
});

// 스터디 생성
const CreateSubmit = http.post('/studies/create', () => {
  return HttpResponse.json({
    studyList: [...StudyListMockData],
  });
});

//  스터디 수정
const ModifySubmit = http.patch('/studies/modify', () => {
  return HttpResponse.json({
    studyList: [...StudyListMockData],
  });
});

// 팀원모집
const GatherSubmit = http.post('/studies/gather', () => {
  return HttpResponse.json({
    studyList: [...StudyListMockData],
  });
});

// 스터디 삭제
const DeleteSubmit = http.delete('/studies/${study-id}', () => {
  return HttpResponse.json({
    studyList: [...StudyListMockData],
  });
});

export default [getStudyListInfo, CreateSubmit, GatherSubmit, ModifySubmit, DeleteSubmit];
