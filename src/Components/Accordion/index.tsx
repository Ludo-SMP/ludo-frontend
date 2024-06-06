import { SelectArrow } from '@/Assets/SelectArrow';
import { textEllipsis } from '@/Styles/theme';
import { StudyNotification } from '@/Types/notifications';
import { getElapsedTime } from '@/utils/date';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MouseEvent } from 'react';
import { useReadNotification } from '@/Hooks/notifications/useReadNotification';
import { NOTIFICATIONS } from '@/Constants/queryString';
import { NotificationResponse } from '@/Hooks/notifications/useNotifications';

export interface AccordionProps<T extends StudyNotification> {
  /** 알림 타입 */
  type: T['type'];

  /** 알림 id */
  notificationId: number;

  /** 알림 Title */
  title: string;

  /** 알림 상세 내용 */
  content?: string;

  /** 읽은 기록  */
  read: boolean;

  /** 페이지 이동에 필요한 params */
  params: T['params'];

  /** 알림 생성 시간 */
  createdAt: string;

  /** 아코디언을 펼쳤을 때 나타날 내용 */
  children?: React.ReactNode;
}

/** 마이페이지 아코디언 */
const Accordion = <T extends StudyNotification>(props: AccordionProps<T>) => {
  const { title, type, params, notificationId, createdAt, read, children } = props;

  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [contentHeight, setContentHeight] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const { mutate: readMutate } = useReadNotification(notificationId);

  useEffect(() => {
    setContentHeight(contentRef?.current?.clientHeight ?? 0);
    setIsOpen(null);
  }, []);

  const moveToDestPage = (
    { type, params }: { type: StudyNotification['type']; params: StudyNotification['params'] },
    navigate: NavigateFunction,
  ) => {
    let destPagePath = null;
    // 스터디 종료 임박 OR 스터디 지원 탈락인 경우 이동 X
    if (type === 'STUDY_END_DATE' || type === 'STUDY_APPLICANT_REJECT') return;

    switch (type) {
      /** 스터디 지원자 발생 => 스터디 지원자 확인 페이지 */
      case 'STUDY_APPLICANT':
        destPagePath = `/studies/${params.studyId}/applicants`;
        break;
      /** 스터디 지원 승인, 스터디 탈퇴 신청, 스터디원 탈퇴원 발생 => 스터디 상테 페이지 */
      default:
        destPagePath = `/studies/${params.studyId}`;
    }
    navigate(destPagePath);
  };

  const readNotification = (e: MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();

    // 관련 페이지로 이동
    moveToDestPage({ type: type, params: params }, navigate);

    /** 이미 읽은 경우, 읽음 처리 X */
    if (read) return;

    readMutate(notificationId);

    // 얼람 앍움 처리 캐시 반영
    queryClient.setQueryData(NOTIFICATIONS.NOTIFICATIONS, (prev: { data: { data: NotificationResponse } }) => {
      const newData = JSON.parse(JSON.stringify(prev));

      const alarmArrIdx = prev?.data?.data?.notification.findIndex(
        (notification) => notification.notificationId === notificationId,
      );

      if (alarmArrIdx !== -1) {
        newData.data.data.notification[alarmArrIdx].read = true;
      }
      return newData;
    });
  };

  return (
    <AccordionBox $isOpen={isOpen}>
      <AccordionInnerBox onClick={() => setIsOpen((prev) => !prev)} $read={props.read}>
        <Item>
          <Title>{title}</Title>
          <ElapsedTimeText>{getElapsedTime(createdAt)}</ElapsedTimeText>
        </Item>
        <SelectArrow isOpen={isOpen} />
      </AccordionInnerBox>
      <AccordionDetailText ref={contentRef} $isOpen={isOpen} $contentHeight={contentHeight} onClick={readNotification}>
        {children}
      </AccordionDetailText>
    </AccordionBox>
  );
};

export const AccordionBox = styled.li<{ $isOpen?: null | boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  padding: 16px 0px;
  gap: ${({ $isOpen }) => ($isOpen ? '16px' : '0px')};
`;

export const AccordionInnerBox = styled.div<{ $read: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  min-width: 300px;
  background-color: ${({ theme }) => theme.color.white};
  min-height: 56px;
  /** opacitiy 추후 수정 반영 */
  opacity: ${({ $read }) => ($read ? 0.5 : 1)};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: calc(100% - 24px);
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.black5};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* Page/Sub Title-Medium */
  font-family: 'Pretendard500';
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;

  ${textEllipsis}
`;

export const ElapsedTimeText = styled.p`
  color: ${({ theme }) => theme.color.black2};

  /* TODO: 타이포 브랜치 머지 후, typo 적용 */
  /* List,Alert/Lable-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  line-height: 24px;

  ${textEllipsis}
`;

const AccordionDetailText = styled.p<{ $isOpen?: null | boolean; $contentHeight: number }>`
  display: flex;
  min-width: 300px;
  max-width: 912px;
  padding: 8px 64px 32px 0px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  color: ${({ theme }) => theme.color.black4};

  &:hover {
    cursor: pointer;
  }

  /* Page/Body-Medium */
  font-family: 'Pretendard400';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: 0;

  margin-top: -${({ $contentHeight }) => $contentHeight}px;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          opacity: 1;
          margin-top: 0;
          transition:
            margin-top 0.2s ease-in-out,
            opacity 0.7s ease-in-out,
            visibility 0.4s ease-in-out;
        `
      : typeof $isOpen === 'boolean' &&
        css`
          transition:
            margin-top 0.2s ease-in-out,
            opacity 0.3s ease-in-out;
        `}
`;

export { Accordion };
