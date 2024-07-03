export const mockMypage = {
  user: {
    id: 1,
    nickname: 'cdnnl',
    email: 'cdnl@gmail.com',
  },
  trust: {
    finishStudy: 3, // 진행한 스터디
    perfectStudy: 1, // 완주한 스터디
    accumulatedTeamMembers: 10, // 누적 팀원 수
    averageAttendanceRate: 60, // 평균 출석률
    activeness: 90,
    professionalism: 95,
    communication: 100,
    together: 80,
    recommend: 90,
  },
  participateStudies: [
    {
      studyId: 1,
      title: 'string',
      position: {
        id: 0,
        name: 'string',
      },
      status: 'RECRUITING',
      startDateTime: '2024-03-06T01:19:09.182Z',
      endDateTime: '2024-03-06T01:19:09.182Z',
      participantCount: 0,
      isOwner: true,
      hasRecruitment: false,
    },
  ],
  applicantRecruitments: [
    {
      recruitmentId: 0,
      title: 'string',
      position: {
        id: 0,
        name: 'string',
      },
      applicantStatus: 'UNCHECKED',
    },
  ],
  completedStudies: [
    {
      studyId: 0,
      title: 'string',
      position: {
        id: 0,
        name: 'string',
      },
      status: 'COMPLETED',
      startDateTime: '2024-03-06T01:19:09.182Z',
      endDateTime: '2024-03-06T01:19:09.182Z',
      participantCount: 0,
      isOwner: true,
      hasRecruitment: false,
    },
  ],
};
