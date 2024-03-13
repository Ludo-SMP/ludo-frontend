import styled from 'styled-components';
import { BlankSquare } from '../Common/BlankSquare';
import StudyToken from '../Common/StudyToken';
import { InfoField } from '../Common/InfoField';
import Button from '../Common/Button';
import { ApplyStatus, StudyStatus, Position } from '@/Types/study';
import { useNavigate } from 'react-router-dom';
import { useCancelAppyMutation } from '@/Apis/study';
import { useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';

interface MyStudyCardProps {
  id: number;
  title: string;
  status: StudyStatus | ApplyStatus;
  position: Position;
  period?: string;
  isOwner?: boolean;
  hasRecruitment?: boolean;
  participantCount?: number;
}

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
  const { mutate: cancelMutate } = useCancelAppyMutation(id, cancelApplySuccessHandler);
  console.log(title, isOwner, hasRecruitment);

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
      <BlankSquare width="180px" height="180px" />
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
        {(status === 'PROGRESS' || status === 'RECRUITED') && !hasRecruitment && isOwner && (
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
  padding: 32px 40px;
  align-items: flex-start;
  gap: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};
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
  width: (100%-180px);
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  .study__status {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;

    .title {
      color: ${({ theme }) => theme.color.black5};
      font-family: Pretendard;
      font-size: ${({ theme }) => theme.font.xxlarge};
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
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
`;

export default MyStudyCard;
