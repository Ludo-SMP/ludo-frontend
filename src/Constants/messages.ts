import { MessageType } from '@/Types/message';

export const APPLY = Object.freeze({
  LOGIN: {
    title: '로그인이 필요한 서비스입니다.',
    content: `스터디에 지원하기 위해서 로그인이 필요합니다.\n가입을 통해 루도의 더 많은 서비스를 즐길 수 있습니다.\n  로그인을 진행하시겠습니까?`,
  } as MessageType,
  CHOSSE_POSITION: {
    title: '지원하려는 스터디의 포지션을 골라주세요',
  },
  SUCCESS: {
    title: '스터디 지원을 완료했습니다!',
  },
  CLOSED: {
    title: '앗, 지원이 마감된 스터디입니다ㅠㅠ',
    content: `방금 전 스터디 모집이 마감되었습니다.\n 해당 스터디에 관심 가져주셔서 감사합니다.`,
  },
  ALREADY_APPLY: {
    title: '이미 지원한 스터디입니다.',
    content: '이미 지원한 스터디입니다. 다른 스터디를 지원해주세요',
  },
  ALREADY_PARTICIPATED: {
    title: '이미 참여중인 스터디입니다.',
    content: '이미 참여중인 스터디입니다. 다른 스터디를 지원해주세요',
  },
  ACCEPT: {
    title: '스터디 지원자를 수락했습니다!',
    content: `수락된 지원자는 \`스터디\`항목에 업로드 되었습니다.\n 확인 부탁드립니다.`,
  },
  REFUSE: {
    title: '스터디 지원자를 거절했습니다.',
    content: '스터디 지원자를 거절했습니다.\n 언젠가 또 인연이 닿으면 좋을 것 같아요!',
  },
});

export const RECRUITMENT = Object.freeze({
  CLOSE: {
    title: '스터디 모집을 마감하시겠습니까?',
    content:
      '스터디 모집을 마감하면\n메인페이지 상단의 ‘스터디 모아보기’ 목록에서 삭제됩니다.\n모집을 마감하시겠습니까?',
  },
});

export const SEARCH = Object.freeze({
  NOT_FONND_RESULT: {
    content: `찾는 태그에 대한 검색 결과가 없습니다.\n스터디를 직접 생성하시겠습니까?`,
  },
});

export const AUTH = Object.freeze({
  LOGIN: {
    title: '간편 로그인 후 이용이 가능합니다!',
    content: '소셜 로그인을 통해\n스터디 지원부터 진행까지 함께 해봐요 :)',
  },
  SIGNUP: {
    title: '루도에 오신것을 환영합니다!',
    content: '소셜 로그인을 통해\n스터디 지원부터 진행까지 함께 해봐요 :)',
  },
});

export const ERROR = Object.freeze({
  NOT_FOUND: { content: '잘못된 접근입니다.' },
});

export const CREATE_STUDY = Object.freeze({
  LOGIN: {
    title: '로그인이 필요한 서비스입니다.',
    content: `스터디를 생성하기 위해서 로그인이 필요합니다.\n가입을 통해 루도의 더 많은 서비스를 즐길 수 있습니다.\n  로그인을 진행하시겠습니까?`,
  } as MessageType,
});

export const DELETE = Object.freeze({
  STUDY: {
    title: '스터디를 삭제하시겠습니까?',
    content: '스터디를 삭제하면 관련한 정보는 모두 삭제되며 복구는 뷸가합니다.\n정말로 삭제하시겠습니까?',
  },
});

export const LEAVE = Object.freeze({
  MEMBER: {
    title: '스터디 탈퇴하기',
    content: `스터디를 탈퇴할 시, 해당 스터디에 접근이 불가합니다.\n 재입장을 원할 경우, 방장에게 연락을 취하거나\n방장이 모집 공고를 올릴 시에 지원해야합니다.\n탈퇴 하시겠습니까?`,
  },
  OWNER: {
    title: '방장으로 있는 스터디 탈퇴하기',
    content: `현재 이 스터디의 방장입니다.\n스터디를 탈퇴할 경우 다음 탐원에게 방장의 권한이 넘겨집니다.\n탈퇴하시겠습니까?`,
  },
});

export const PROFILE = Object.freeze({
  EDIT: {
    title: '닉네임 변경하기',
  },
  NICNAME_ERROR: {
    REQUIRED: '닉네임을 입력해주세요.',
    SAME: '기존 닉네임과 동일합니다',
    LEGNTH: '글자수는 1자 이상, 20자 이하이여야 합니다.',
    WHITE_SPACE: '닉네임의 앞뒤에는 공백이 올 수 없습니다.',
    DUPLICATED: { title: '닉네임 변경 실패', content: '이미 존재하는 닉네임입니다.' },
  },
});
