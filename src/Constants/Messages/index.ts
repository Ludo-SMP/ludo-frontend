import { MessageType } from '@/Types/message';

export const APPLY = Object.freeze({
  LOGIN: {
    title: '로그인이 필요한 서비스입니다.',
    content: `스터디에 지원하기 위해서 로그인이 필요합니다.
    가입을 통해 루도의 더 많은 서비스를 즐길 수 있습니다.
    로그인을 진행하시겠습니까?`,
  } as MessageType,
});
