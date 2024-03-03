import { MessageType } from '@/Types/message';

export const APPLY = Object.freeze({
  LOGIN: {
    title: '로그인이 필요한 서비스입니다.',
    content: `스터디에 지원하기 위해서 로그인이 필요합니다.\n가입을 통해 루도의 더 많은 서비스를 즐길 수 있습니다.\n  로그인을 진행하시겠습니까?`,
  } as MessageType,
  CHOSSE_POSITION: {
    title: '지원하려는 스터디의 포지션을 골라주세요',
  },
  APPROVE: {
    title: '스터디 지원을 완료했습니다!',
  },
  FAIL: {
    title: '앗, 지원이 마감된 스터디입니다ㅠㅠ',
    content: `방금 전 스터디 모집이 마감되었습니다.\n 해당 스터디에 관심 가져주셔서 감사합니다.`,
  },
});

export const SEARCH = Object.freeze({
  NOT_FONND: {
    content: `찾는 태그에 대한 검색 결과가 없습니다.\n스터디를 직접 생성하시겠습니까?`,
  },
});

export const CREATE_STUDY = Object.freeze({
  LOGIN: {
    title: '로그인이 필요한 서비스입니다.',
    content: `스터디를 생성하기 위해서 로그인이 필요합니다.\n가입을 통해 루도의 더 많은 서비스를 즐길 수 있습니다.\n  로그인을 진행하시겠습니까?`,
  } as MessageType,
});
