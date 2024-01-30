import { HttpResponse, http } from 'msw';
import { StudyListMockData, CreateStudyData, ModifyStudyData, GatherStudyData } from '../data/mockData';

const getStudyListInfo = http.get('/studies', () => {
  return HttpResponse.json({
    studyList: [...StudyListMockData],
  });
});

// 스터디 생성
const CreateSubmit = http.post('/studies/create', () => {
  return HttpResponse.json({
    studyList: [...CreateStudyData],
  });
});

//  스터디 수정
const ModifySubmit = http.put('/studies/modify', () => {
  return HttpResponse.json({
    studyList: [...ModifyStudyData],
  });
});

// 팀원모집
const GatherSubmit = http.post('/studies/gather', () => {
  return HttpResponse.json({
    studyList: [...GatherStudyData],
  });
});

// // 스터디 삭제
// const DeleteSubmit = http.delete('/studies/${study-id}', () => {
//   return HttpResponse.json({
//     studyList: [...StudyListMockData],
//   });
// });

export default [getStudyListInfo, CreateSubmit, ModifySubmit, GatherSubmit];
