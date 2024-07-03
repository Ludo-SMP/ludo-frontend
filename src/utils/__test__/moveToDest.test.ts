import { moveToDest } from '../moveToDest';
import { NotificationsType } from '@/Types/notifications';

describe('알림 종류에 따른 라우팅 경로 반환 테스트', () => {
  test('RECRUITMENT 타입', () => {
    const type: NotificationsType = 'RECRUITMENT';
    const params = { recruitmentId: 123 };

    const result = moveToDest(type, params);
    expect(result).toBe('/studies/123/recruitment');
  });

  test('REVIEW_RECEIVE 타입', () => {
    const type: NotificationsType = 'REVIEW_RECEIVE';
    const params = { studyId: 456, userId: 789 };

    const result = moveToDest(type, params);
    expect(result).toBe('/studies/456/789/review');
  });

  test('REVIEW_PEER_FINISH 타입', () => {
    const type: NotificationsType = 'REVIEW_PEER_FINISH';
    const params: any = { studyId: null, userId: null }; // params는 중요하지 않음

    const result = moveToDest(type, params);
    expect(result).toBe('/mypage/reviews');
  });

  test('STUDY_APPLICANT 타입', () => {
    const type: NotificationsType = 'STUDY_APPLICANT';
    const params = { studyId: 123 };

    const result = moveToDest(type, params);
    expect(result).toBe('/studies/123/applicants');
  });

  test('params 없는 경우 (STUDY_END_DATE 타입)', () => {
    const type: NotificationsType = 'STUDY_END_DATE';
    const params = { studyId: 456 };

    const result = moveToDest(type, params);
    expect(result).toBeUndefined();
  });

  test('기본 경로 (기타 타입)', () => {
    const type: NotificationsType = 'STUDY_PARTICIPANT_LEAVE_APPLY';
    const params = { studyId: 123 };

    const result = moveToDest(type, params);
    expect(result).toBe('/studies/123');
  });
});
