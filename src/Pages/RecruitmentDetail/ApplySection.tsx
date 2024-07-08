import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudyProgressSection } from './StudyProgressSection';
import Button from '@/Components/Common/Button';
import Modal from '@/Components/Common/Modal';
import ApplyModal from '@/Components/Modal/ApplyModal';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';

import { APPLY, RECRUITMENT } from '@/Constants/messages';
import { ROUTES } from '@/Constants/route';
import { ApplyTryStatus, RecruitmentDetail } from '@/Types/study';
import { useLoginStore } from '@/store/auth';
import { useModalStore } from '@/store/modal';
import styled from 'styled-components';
import { getDayById, getPeriod } from '@/utils/date';
import { media } from '@/Styles/theme';

export interface ApplySectionProps {
  isMine: boolean;
  recruitment: RecruitmentDetail['recruitment'];
  study: RecruitmentDetail['study'];
}

/** 우측 스터디 지원하기 박스 */
const ApplySection = ({ isMine, recruitment, study }: ApplySectionProps) => {
  const { isModalOpen, openModal, closeModal } = useModalStore();
  const { isLoggedIn } = useLoginStore();
  const [applyTryStatus, setApplyTryStatus] = useState<ApplyTryStatus>('NOT APPLY');
  const [closeRecruitment, setCloseRecruitment] = useState<boolean>(false);

  const { mutate: closeRecruitmentMutate } = useCloseRecruitmentMutation(study?.id);

  const navigate = useNavigate();

  return (
    <ApplySectionBox>
      <StudyProgressSection
        method={study.way}
        platform={study.platform}
        period={getPeriod(study.startDateTime, study.endDateTime)}
        category={study.category?.name}
        day={getDayById(study.attendanceDay ?? [])}
      />
      {isMine ? (
        <ButtonBox>
          <Button
            scheme="secondary"
            onClick={() => {
              navigate(`/studies/${study.id}/recruitments/${recruitment.id}/edit`);
            }}
          >
            스터디 모집 공고 수정하기
          </Button>
          <Button
            scheme="normal"
            onClick={() => {
              setCloseRecruitment(true);
              openModal();
            }}
          >
            모집 마감하기
          </Button>
        </ButtonBox>
      ) : (
        <ButtonBox>
          {applyTryStatus === 'ALREADY_APPLY' ? (
            <AlertText>이미 지원한 스터디입니다.</AlertText>
          ) : (
            <Button scheme="secondary" onClick={openModal}>
              스터디 지원하기
            </Button>
          )}
        </ButtonBox>
      )}

      {/* 로그인 안내 모달 */}
      {!isLoggedIn && isModalOpen && !closeRecruitment && (
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
      {/* 지원하기 모달 */}
      {isLoggedIn && isModalOpen && !closeRecruitment && applyTryStatus === 'NOT APPLY' && (
        <ApplyModal
          handleApplyApprove={setApplyTryStatus}
          studyId={study.id}
          recruitmentId={recruitment.id}
          positions={recruitment.positions}
        />
      )}
      {/* 지원완료 모달 */}
      {isLoggedIn && isModalOpen && !closeRecruitment && applyTryStatus === 'SUCCESS' && (
        <Modal
          title={APPLY.SUCCESS.title}
          handleApprove={() => {
            setApplyTryStatus(() => 'NOT APPLY');
            closeModal();
          }}
          approveBtnText="확인"
          alignTitle="center"
        >
          {APPLY?.[applyTryStatus]?.content}
        </Modal>
      )}

      {/* 지원이 마감된 스터디입니다 모달 */}
      {isLoggedIn &&
        isModalOpen &&
        !closeRecruitment &&
        (applyTryStatus === 'CLOSED' ||
          applyTryStatus === 'ALREADY_APPLY' ||
          applyTryStatus === 'ALREADY_PARTICIPATED') && (
          <Modal
            title={APPLY?.[applyTryStatus]?.title}
            handleApprove={() => {
              setApplyTryStatus(() => 'ALREADY_APPLY');
              closeModal();
            }}
            approveBtnText="확인"
          >
            {APPLY?.[applyTryStatus]?.content}
          </Modal>
        )}
      {/* 스터디 모집을 마감하시겠습니까 모달 */}
      {isModalOpen && closeRecruitment && (
        <Modal
          isBtnWidthEqual={true}
          cancelBtnText={'취소하기'}
          approveBtnText={'네'}
          handleApprove={() => {
            setCloseRecruitment(false);
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

  ${media.custom(600)} {
    border: none;
    padding: 0;
    max-width: 100%;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }

  ${media.custom(500)} {
    flex-direction: row;
    gap: 0;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;

    button {
      border-radius: 0px;
      box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.black0};
    }
  }
`;

const AlertText = styled.div`
  font-family: 'Pretendard600';
  ${({ theme }) => theme.typo.buttonButton};
  color: ${({ theme }) => theme.color.black2};
`;
