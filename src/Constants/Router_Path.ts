export const ROUTER_PATH = {
  main: '/', //메인페이지
  login: '/login', //로그인페이지
  signup: '/signup', //회원가입
  mypage: '/mypage', //마이페이지
  recruitmentsCreate: '/studies/:studyId/recruitments/create', //모집공고 생성
  recruitmentDetail: '/studies/:studyId/recruitment', //모집공고 상세 페이지
  study: '/studies/:studyId', //스터디상세페이지
  studyList: '/studies', //스터디 모아보기 페이지
  recruitments: '/studies', //스터디 모아보기 페이지
  createStudy: '/studies/create', //스터디생성페이지
  modifyStudy: 'studies/modify',
  gatherStudy: 'studies/gather',
  decativate: '/deactivate', //회원탈퇴 페이지
  test: '/test',
  save: '/mypage/save',
  applicants: '/studies/:studyId/applicants', //지원자 확인 페이지
} as const;
