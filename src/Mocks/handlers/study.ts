import { HttpResponse, http } from 'msw';
import { applicantsDetailMockData, studyDetailMockData } from '../data/mockStudies';
const baseURL = import.meta.env.VITE_BASE_API_URL;

const createStudy = http.post(`${baseURL}/api/studies`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: studyDetailMockData[0],
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const getStudyDetail = http.get(`${baseURL}/api/studies/:studyId`, async ({ params }) => {
  const studyId: number = Number(params?.studyId);
  return new HttpResponse(
    JSON.stringify({
      data: studyDetailMockData.filter((studyDetail) => studyDetail?.study.id === studyId)[0],
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const applyStudy = http.post(`${baseURL}/api/recruitments/:recruitmentId/apply`, async () => {
  return new HttpResponse(
    JSON.stringify({
      data: { applicantId: 6 },
      message: '스터디 지원을 완료했습니다.',
    }),
    {
      status: 201,
      statusText: 'Created',
    },
  );
});

const failApplyStudy = http.post(`${baseURL}/api/recruitments/:recruitmentId/apply`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: '지원이 마감된 스터디입니다.',
    }),
    {
      status: 500,
      statusText: 'INTERNAL_SERVER_ERROR',
    },
  );
});

const refuseApply = http.post(`${baseURL}/api/studies/:studyId/apply-refuse/:applicantId`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: '지원자의 스터디 지원을 거절하였습니다.',
      data: null,
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const failRefuseApply = http.post(`${baseURL}/api/studies/:studyId/apply-refuse/:applicantId`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: '스터디 지원 거절 실패',
      data: null,
    }),
    {
      status: 500,
      statusText: 'INTERNAL_SERVER_ERROR',
    },
  );
});

const acceptApply = http.post(`${baseURL}/api/studies/:studyId/apply-accept/:applicantId`, async ({ params }) => {
  const applicantId: number = Number(params?.applicantId);
  return new HttpResponse(
    JSON.stringify({
      message: '지원자의 스터디 지원을 수락하였습니다.',
      data: {
        participant: applicantId,
        nickname: 'hyun',
        email: 'aa@bb.cc',
        role: 'MEMBER',
        position: {
          id: 1,
          name: '백엔드',
        },
      },
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const failAcceptApply = http.post(`${baseURL}/api/studies/:studyId/apply-accept/:applicantId`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: '스터디 지원 수락 실패',
      data: null,
    }),
    {
      status: 500,
      statusText: 'INTERNAL_SERVER_ERROR',
    },
  );
});

const cancelApply = http.post(`${baseURL}/api/recruitments/:recruitmentId/cancel`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: '스터디 지원 취소 성공',
      data: null,
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});
const getApplicantsDetail = http.get(`${baseURL}/api/studies/:studyId/applicants`, async ({ params }) => {
  const studyId: number = Number(params?.studyId);
  return new HttpResponse(
    JSON.stringify({
      data: applicantsDetailMockData(studyId),
      message: 'Success',
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const deleteStudy = http.delete(`${baseURL}/api/studies/:studyId`, async ({ params }) => {
  const studyId: number = Number(params?.studyId);
  return new HttpResponse(
    JSON.stringify({
      data: {
        deletedId: studyId,
        message: 'Success',
      },
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

const failDeleteStudy = http.delete(`${baseURL}/api/studies/:studyId`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: '스터디 삭제에 실패하였습니다.',
    }),
    {
      status: 500,
      statusText: 'INTERNAL_SERVER_ERROR',
    },
  );
});

const leaveStudy = http.delete(`${baseURL}/api/studies/:studyId/participants`, async () => {
  return new HttpResponse(JSON.stringify({ message: '스터디 탈퇴에 성공하였습니다.' }), {
    status: 200,
    statusText: 'OK',
  });
});

const failLeaveStudy = http.delete(`${baseURL}/api/studies/:studyId/participants`, async () => {
  return new HttpResponse(JSON.stringify({ message: '스터디 탈퇴에 실패하였습니다.' }), {
    status: 500,
    statusText: 'INTERNAL_SERVER_ERROR',
  });
});

const attendStudy = http.post(`${baseURL}/api/studies/:studyId/attendance`, async () => {
  return new HttpResponse(
    JSON.stringify({
      message: 'success',
      data: null,
    }),
    {
      status: 200,
      statusText: 'OK',
    },
  );
});

export default [
  createStudy,
  getStudyDetail,
  getApplicantsDetail,
  applyStudy,
  refuseApply,
  failRefuseApply,
  acceptApply,
  failAcceptApply,
  failApplyStudy,
  cancelApply,
  deleteStudy,
  failDeleteStudy,
  failLeaveStudy,
  leaveStudy,
  attendStudy,
];
