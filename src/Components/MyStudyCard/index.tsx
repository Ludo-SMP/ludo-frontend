import styled from 'styled-components';
import { Clip, StudyThumbnail } from '@/Assets';
import StudyToken from '../Common/StudyToken';
import { InfoField } from '../Common/InfoField';
import Button from '../Common/Button';
import { ApplyStatus, StudyStatus, Position } from '@/Types/study';
import { useNavigate } from 'react-router-dom';
import { useCancelAppyMutation } from '@/Hooks/study/useCancelAppyMutation';
import { useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { media, textEllipsis } from '@/Styles/theme';
import { RecruitmentDetailModal } from '../Modal/RecruitmentDetailModal';
import { useState } from 'react';

interface MyStudyCardProps {
  id: number;

  /** 스터디 제목 */
  title: string;

  /** 모집공고 Id */
  recruitmnetId?: number;

  /** 현재 상태 */
  status: StudyStatus | ApplyStatus;

  /** 자신의 포지션 */
  position: Position;

  /** 진행 기간 */
  period?: string;

  /** 자신이 스터디장인지 여부 */
  isOwner?: boolean;

  /** 모집 공고 여부 */
  hasRecruitment?: boolean;

  /** 팀원 수 */
  participantCount?: number;
}

/** 자신이 현재 참여하고 있는/참여 신청을 넣은 스터디를 나타냅니다. */
export const MyStudyCard = ({
  id,
  title,
  status,
  position,
  period,
  participantCount,
  isOwner,
  hasRecruitment,
  recruitmnetId,
}: MyStudyCardProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const cancelApplySuccessHandler = () => {
    queryClient.invalidateQueries({ queryKey: [...STUDY.MYPAGE_INFO()] });
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { mutate: cancelMutate } = useCancelAppyMutation(1, id, cancelApplySuccessHandler);
  const isApplyStatus = status === 'UNCHECKED' || status === 'REFUSED' || status === 'ACCEPTED';

  return (
    <MyStudyCardWrapper
      onClick={() => {
        navigate(`/studies/${id}${isApplyStatus ? '/recruitment' : ''}`);
      }}
      isApplyStatus={isApplyStatus}
    >
      {!isApplyStatus && <StudyThumbnail width={244} height={244} />}

      <StudyInfoWrapper status={status} hasRecruitment={hasRecruitment} isOwner={isOwner} isApplyStatus={isApplyStatus}>
        <StudyDetailWrapper status={status}>
          <div className="study__status">
            <span className="title">{title}</span>
            <div className="studyTokens">
              <StudyToken status={status} />
            </div>
          </div>
          <div className="detail__info">
            <InfoField
              title="나의 포지션"
              content={position?.name || '나의 포지션'}
              disabled={status === 'COMPLETED'}
              fontSize={16}
              titleWidth={120}
            />
            {period && (
              <InfoField
                title="진행 기간"
                content={period || '진행 기간'}
                disabled={status === 'COMPLETED'}
                fontSize={16}
                titleWidth={120}
              />
            )}
            {participantCount && (
              <InfoField
                title="팀원 수"
                content={participantCount || '팀원 수'}
                disabled={status === 'COMPLETED'}
                fontSize={16}
                titleWidth={120}
              />
            )}
          </div>
        </StudyDetailWrapper>
        <MyStudyCardButtonsWrapper isApplyStatus={isApplyStatus}>
          {(status === 'PROGRESS' || status === 'RECRUITING') && !hasRecruitment && isOwner && (
            <Button
              scheme="secondary"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/studies/${id}/recruitments/create`);
              }}
            >
              스터디원 모집 공고 작성하기
            </Button>
          )}
          {(status === 'PROGRESS' || status === 'RECRUITING') && hasRecruitment && isOwner && (
            <Button
              scheme="normal"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
            >
              <Clip width="18" height="100%" />
              작성된 스터디원 모집 공고
            </Button>
          )}
          {status === 'UNCHECKED' && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                cancelMutate();
              }}
            >
              지원 취소하기
            </Button>
          )}
          {(status === 'REFUSED' || status === 'ACCEPTED') && <Button onClick={() => {}}>지원 기록 삭제하기</Button>}
        </MyStudyCardButtonsWrapper>
      </StudyInfoWrapper>
      {isOpen && <RecruitmentDetailModal recruitmentId={recruitmnetId} handleModal={setIsOpen} />}
    </MyStudyCardWrapper>
  );
};

const MyStudyCardWrapper = styled.div<{
  isApplyStatus: boolean;
}>`
  display: flex;
  width: 100%;
  height: ${(props) => (props.isApplyStatus ? '158px' : '246px')};
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.color.black0};

  &:hover {
    cursor: pointer;
  }

  & > svg:first-child {
    border-radius: 16px 0 0 16px;
  }

  ${media.custom(600)} {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    width: 302px;
    height: auto;

    & > svg:first-child {
      width: 300px;
      height: 300px;
      border-radius: 16px 16px 0 0;
    }
  }
`;

const StudyInfoWrapper = styled.div<{
  status: StudyStatus | ApplyStatus;
  hasRecruitment: boolean;
  isOwner: boolean;
  isApplyStatus: boolean;
}>`
  display: flex;
  height: 100%;
  width: calc(100% - 244px);
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;

  ${media.custom(600)} {
    display: flex;
    width: 100%;
    padding: 16px 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    align-self: stretch;
  }
`;

const StudyDetailWrapper = styled.div<{ status: StudyStatus | ApplyStatus }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  flex: 1 0 0;

  .study__status {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;

    .title {
      max-width: 500px;
      color: ${({ theme }) => theme.color.black5};
      font-family: 'Pretendard700';
      font-size: ${({ theme }) => theme.font.medium};
      font-style: normal;
      font-weight: 700;
      line-height: 32px;

      ${textEllipsis}
    }

    .studyTokens {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .detail__info {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  ${media.custom(600)} {
    .study__status {
      display: flex;
      align-items: center;
      align-content: center;
      gap: 16px;
      align-self: stretch;
      flex-wrap: wrap;
    }

    .detail__info {
      display: flex;
      gap: 12px;

      & > div {
        width: 252px;
        gap: 0;

        & > div {
          width: 120px;
        }
      }
      gap: 4px;
    }
  }

  .detail__info {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const MyStudyCardButtonsWrapper = styled.div<{ isApplyStatus: boolean }>`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  ${media.custom(600)} {
    justify-content: center;
    gap: 24px;
  }
`;
