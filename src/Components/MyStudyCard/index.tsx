import styled from 'styled-components';
import { StudyThumbnail } from '@/Assets';
import StudyToken from '../Common/StudyToken';
import { InfoField } from '../Common/InfoField';
import Button from '../Common/Button';
import { ApplyStatus, StudyStatus, Position } from '@/Types/study';
import { useNavigate } from 'react-router-dom';
import { useCancelAppyMutation } from '@/Hooks/study/useCancelAppyMutation';
import { useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';

interface MyStudyCardProps {
  id: number;

  /** 스터디 제목 */
  title: string;

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
const MyStudyCard = ({
  id,
  title,
  status,
  position,
  period,
  participantCount,
  isOwner,
  hasRecruitment,
}: MyStudyCardProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const cancelApplySuccessHandler = () => {
    queryClient.invalidateQueries({ queryKey: [...STUDY.MYPAGE_INFO()] });
  };
  const { mutate: cancelMutate } = useCancelAppyMutation(1, id, cancelApplySuccessHandler);

  return (
    <MyStudyCardWrapper
      onClick={() => {
        navigate(
          `/studies/${id}${
            status === 'UNCHECKED' || status === 'REFUSED' || status === 'ACCEPTED' ? '/recruitment' : ''
          }`,
        );
      }}
    >
      <StudyThumbnail width="244px" height="244px" />
      <StudyInfoWrapper status={status}>
        <div className="study__status">
          <span className="title">{title}</span>
          <div className="studyTokens">
            <StudyToken status={status} />
          </div>
        </div>
        <div className="detail__info">
          <InfoField title="나의 포지션" content={position?.name || '나의 포지션'} disabled={status === 'COMPLETED'} />
          {period && <InfoField title="진행 기간" content={period || '진행 기간'} disabled={status === 'COMPLETED'} />}
          {participantCount && (
            <InfoField title="팀원 수" content={participantCount || '팀원 수'} disabled={status === 'COMPLETED'} />
          )}
        </div>
      </StudyInfoWrapper>
      <MyStudyCardButtonsWrapper>
        {(status === 'PROGRESS' || status === 'RECRUITING') && !hasRecruitment && isOwner && (
          <Button
            scheme="primary"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/studies/${id}/recruitments/create`);
            }}
          >
            스터디원 모집 공고 작성하기
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
    </MyStudyCardWrapper>
  );
};

const MyStudyCardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: flex-start;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.color.black0};

  & > div:first-child {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: ${({ theme }) => theme.color.gray5};
  }

  &:hover {
    cursor: pointer;
  }
`;

const StudyInfoWrapper = styled.div<{ status: StudyStatus | ApplyStatus }>`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  .study__status {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;

    .title {
      color: ${({ theme }) => theme.color.black5};
      font-family: 'Pretendard800';
      font-size: ${({ theme }) => theme.font.large};
      font-style: normal;
      font-weight: 800;
      line-height: 32px;
    }

    .studyTokens {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

const MyStudyCardButtonsWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  right: 40px;

  button {
    padding: 8px 24px;
  }
`;

export default MyStudyCard;
