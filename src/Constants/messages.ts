import { MessageType } from '@/Types/message';
import { RecruitmentForm } from '@/Types/study';
import { NotificationsSettingConfigType } from '@/Types/notifications';

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
    content: `지원 결과는 알림과 함께\n‘스따-디’ > ‘내가 지원한 스터디’ 에서 확인하실 수 있습니다.`,
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
    content: `수락된 지원자는 '스터디' 항목에 업로드 되었습니다.\n확인 부탁드립니다.`,
  },
  REFUSE: {
    title: '스터디 지원자를 거절했습니다!',
    content: '스터디 지원자를 거절했습니다.\n다음에 더 좋은 인연으로 만날 수 있길 바랍니다.',
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
  LOGIN_FAIL: {
    title: '가입되지 않은 계정입니다.',
    content:
      '현재 입력하신 소셜 계정은 가입되어있지 않습니다.\n가입을 통해 루도의 더 많은 서비스를 즐길 수 있습니다.\n회원 가입을 부탁드립니다 :)',
  },
  SIGNUP_FAIL: {
    title: '이미 가입된 계정입니다.',
    content: '이미 해당 이메일로 가입된 계정이 존재합니다.\n로그인하시거나, 다른 이메일로 가입해주세요.',
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

export const CREATE_RECRUITMENT: Omit<Record<keyof RecruitmentForm, string>, 'content'> = Object.freeze({
  applicantLimit: '모집 인원을 정해주세요.',
  recruitmentEndDateTime: '모집 마감일을 정해주세요.',
  positionIds: '포지션을 정해주세요.',
  stackIds: '기술 스택을 정해주세요.',
  title: '제목을 기입해주세요.',
  contact: '연락 방법을 정해주세요.',
  callUrl: '연결 url을 작성해주세요.',
});

export const DELETE = Object.freeze({
  STUDY: {
    title: '스터디를 삭제하시겠습니까?',
    content: '스터디를 삭제하면 관련한 정보는 모두 삭제되며 복구는 뷸가합니다.\n정말로 삭제하시겠습니까?',
  },
  TEMP_SAVED: {
    title: '작성 중인 스터디 생성 글을 삭제 하시겠습니까?',
    content: '삭제 된 글은 복구가 불가능합니다.\n그래도 삭제하시겠습니까?',
  },
});

export const LEAVE = Object.freeze({
  MEMBER: {
    WARN: {
      title: '스터디 탈퇴하기',
      content: `스터디를 탈퇴할 시, 해당 스터디에 접근이 불가합니다.\n재입장을 원할 경우, 방장에게 연락을 취하거나\n방장이 모집 공고를 올릴 시에 지원해야합니다.\n탈퇴 하시겠습니까?`,
    },
    SELECT: {
      title: '탈퇴 방식을 골라주시기 바랍니다.',
      request: {
        title: '팀장에게 승인 요청 받기',
        content: '팀장에게 탈퇴 승인을 요청 하고, 팀장이 이를 수락 할 시\n신뢰도에 영향이 가지 않습니다.',
      },
      force: {
        title: '무단 탈퇴 하기',
        content: '무단 탈퇴를 하게 되면 빠른 탈퇴가 가능하나, 신뢰도가 깎이게 됩니다.',
      },
    },
    SUCCESS: {
      request: {
        title: '스터디 팀장에게 탈퇴 승인을 요청했습니다.',
        content:
          '팀장에게 알림이 갔으며, 팀장이 이를 수락 혹은 거절할 시 회원님에게 알림을 제공할 예정입니다. 승인 결과를 기다려 주시면 감사하겠습니다.',
      },
      force: {
        title: '스터디에서 무단 탈퇴를 했습니다.',
        content:
          '남은 팀원에게 알림이 갔으며, 회원님의 신뢰도 하락이 추후 ‘마이 페이지 > 회원 정보’ 에 반영 될 예정입니다.',
      },
    },
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

export const NOTIFICATIONS_SETTINGS_CONTENTS: Record<
  NotificationsSettingConfigType,
  { title: string; description: string }
> = {
  ALL_CONFIG: {
    title: '전체 알림',
    description: '제목',
  },
  RECRUITMENT_CONFIG: {
    title: '모집 공고 알림',
    description: '선호하는 항목에 대한 모집 공고가 업로드 됐을 시 알림을 제공합니다.',
  },
  STUDY_APPLICANT_CONFIG: {
    title: '스터디 지원 여부 알림',
    description: '내가 속한 스터디에 지원자가 생겼을 시, 알림을 제공합니다.',
  },
  STUDY_APPLICANT_RESULT_CONFIG: {
    title: '스터디 지원 결과 알림',
    description: '지원한 스터디에서 합류 승인 혹은 거절되었을 시, 결과를 알려줍니다.',
  },
  STUDY_END_DATE_CONFIG: {
    title: '스터디 종료 기간 알림',
    description: '스터디 종료 5일 전에 알림이 가며, 필요시 스터디 기간을 늘릴 것을 안내해줍니다.',
  },
  STUDY_PARTICIPANT_LEAVE_CONFIG: {
    title: '스터디 탈퇴자 알림',
    description: '내가 속한 스터디에서 탈퇴자가 발생했을 시, 알림을 제공합니다.',
  },
  REVIEW_CONFIG: {
    title: '스터디원 리뷰 평가 알림',
    description:
      '스터디 진행 완료시, 팀원에 대해 리뷰합니다. 각자의 평가는 상호 완료 이후에 공개되며, 알림을 제공합니다.',
  },
};
