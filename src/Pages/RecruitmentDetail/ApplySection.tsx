import Button from '@/Components/Common/Button';
import Modal from '@/Components/Common/Modal';
import ApplyModal from '@/Components/Modal/ApplyModal';
import { APPLY, RECRUITMENT } from '@/Constants/messages';
import { ROUTES } from '@/Constants/route';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { ApplyTryStatus, RecruitmentDetail } from '@/Types/study';
import { useLoginStore } from '@/store/auth';
import { useModalStore } from '@/store/modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StudyProgressSection } from './StudyProgressSection';
import { getPeriod } from '@/utils/date';

interface ApplySectionProps {
  isMine: boolean;
  recruitment: RecruitmentDetail['recruitment'];
  study: RecruitmentDetail['study'];
}

/** 우측 스터디 지원하기 박스 */
const ApplySection = ({ isMine, recruitment, study }: ApplySectionProps) => {
  const { isModalOpen, openModal, closeModal } = useModalStore();
  const { isLoggedIn } = useLoginStore();
  const [applyTryStatus, setApplyTryStatus] = useState<ApplyTryStatus>('NOT APPLY');
  const [isCloseRecruitmentBtnClicked, setIsCloseRecruitmentBtnClicked] = useState<boolean>(false);

  const { mutate: closeRecruitmentMutate } = useCloseRecruitmentMutation(study?.id);

  const navigate = useNavigate();

  return (
    <ApplySectionBox>
      <StudyProgressSection
        method={study.way}
        platform={study.platform}
        period={getPeriod(study.startDateTime, study.endDateTime)}
        category={study.category?.name}
        // TODO: 진행요일 추가
      />
      {/* TODO: 참여자, 비참여자, 이미 지원한 참여자 시점 UI 분기 로직 개선 */}
      <ButtonBox>
        {isMine ? (
          <>
            <Button
              scheme="normal"
              onClick={() => {
                setIsCloseRecruitmentBtnClicked(true);
                openModal();
              }}
            >
              모집 마감하기
            </Button>
            <Button
              scheme="secondary"
              onClick={() => {
                navigate(`/studies/${study.id}/recruitments/${recruitment.id}/edit`);
              }}
            >
              스터디 모집 공고 수정하기
            </Button>
          </>
        ) : (
          <>
            {applyTryStatus === 'ALREDAY_APPLY' ? (
              <div className="text__alert">이미 지원한 스터디입니다.</div>
            ) : (
              <Button scheme="secondary" onClick={openModal}>
                스터디 지원하기
              </Button>
            )}
          </>
        )}
      </ButtonBox>
      {!isLoggedIn && isModalOpen && !isCloseRecruitmentBtnClicked && (
        <Modal
          title={APPLY.LOGIN.title}
          handleApprove={() => navigate(ROUTES.AUTH.LOGIN)}
          approveBtnText="로그인하기"
          cancelBtnText="나중에 하기"
          isBtnWidthEqual={false}
        >
          {APPLY.LOGIN.content}
        </Modal>
      )}
      {isLoggedIn && isModalOpen && !isCloseRecruitmentBtnClicked && applyTryStatus === 'NOT APPLY' && (
        <ApplyModal
          handleApplyApprove={setApplyTryStatus}
          studyId={study.id}
          recruitmentId={recruitment.id}
          positions={recruitment.positions}
        />
      )}
      {isLoggedIn && isModalOpen && !isCloseRecruitmentBtnClicked && applyTryStatus === 'SUCCESS' && (
        <Modal
          title={APPLY.SUCCESS.title}
          handleApprove={() => {
            setApplyTryStatus(() => 'NOT APPLY');
            closeModal();
          }}
          approveBtnText="확인"
          alignTitle="center"
        >
          <div className="approve__image"></div>
        </Modal>
      )}
      {isLoggedIn &&
        isModalOpen &&
        !isCloseRecruitmentBtnClicked &&
        (applyTryStatus === 'CLOSED' ||
          applyTryStatus === 'ALREDAY_APPLY' ||
          applyTryStatus === 'ALREDY_PARTICIPATED') && (
          <Modal
            title={
              applyTryStatus === 'CLOSED'
                ? APPLY.CLOSED.title
                : applyTryStatus === 'ALREDAY_APPLY'
                  ? APPLY.ALREADY_APPLY.title
                  : APPLY.ALREADY_PARTICIPATED.title
            }
            handleApprove={() => {
              setApplyTryStatus(() => 'ALREDAY_APPLY');
              closeModal();
            }}
            approveBtnText="확인"
          >
            {applyTryStatus === 'CLOSED'
              ? APPLY.CLOSED.content
              : applyTryStatus === 'ALREDAY_APPLY'
                ? APPLY.ALREADY_APPLY.content
                : APPLY.ALREADY_PARTICIPATED.content}
          </Modal>
        )}
      {isModalOpen && isCloseRecruitmentBtnClicked && (
        <Modal
          isBtnWidthEqual={true}
          cancelBtnText={'취소하기'}
          approveBtnText={'네'}
          handleApprove={() => {
            setIsCloseRecruitmentBtnClicked(false);
            closeRecruitmentMutate();
          }}
          title={RECRUITMENT.CLOSE.title}
        >
          {RECRUITMENT.CLOSE.content}
        </Modal>
      )}
    </ApplySectionBox>
  );
};

export { ApplySection };

const ApplySectionBox = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 288px;
  width: 100%;
  padding: 16px;
  gap: 16px;

  height: 100%;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-self: stretch;
  margin-top: 32px;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }

  .text__alert {
    font-family: 'Pretendard600';
    font-size: 16px;
    font-style: normal;
    line-height: 40px; /* 250% */
    color: ${({ theme }) => theme.color.black2};
  }
`;
