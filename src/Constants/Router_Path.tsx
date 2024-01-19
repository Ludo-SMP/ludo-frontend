export const ROUTER_PATH = {
  main: '/', //메인페이지
  login: '/login', //로그인페이지
  signup: '/signup', //회원가입
  mypage: '/mypage', //마이페이지
  recruitmentsCreate: '/studies/{study-id}/recruitments/create', //모집공고 생성
  recruitments: '/studies/{study-id}/recruitments', //모집공고 상세 페이지
  study: '/studies/{study-id}', //스터디상세페이지
  CreateStudy: '/studies/create', //스터디생성페이지
  decativate: '/deactivate', //회원탈퇴 페이지
} as const;
