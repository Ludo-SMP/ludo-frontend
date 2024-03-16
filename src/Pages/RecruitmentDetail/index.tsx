import styled from 'styled-components';
import { InfoField } from '../../Components/Common/InfoField';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { ColumnDivider } from '../../Components/Common/Divider/ColumnDivider';
import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { useNavigate, useParams } from 'react-router-dom';
import { dateFormatter, getPeriod, isEdited } from '@/utils/date';
import RecruitmentInfoSection from './RecruitmentInfoSection';
import StudyProgressInfoSection from './StudyProgessInfoSection';
import StudyBasicInfoSection from './StudyBasicInfoSection';
import Button from '@/Components/Common/Button';
import Modal from '@/Components/Common/Modal';
import { APPLY } from '@/Constants/messages';
import { useLoginStore } from '@/store/auth';
import { ROUTES } from '@/Constants/route';
import { useModalStore } from '@/store/modal';
import { useUserStore } from '@/store/user';
import { useEffect, useState } from 'react';
import ApplyModal from '@/Components/Modal/ApplyModal';
import { ApplyTryStatus } from '@/Types/study';

const RecruitmentDetailPage = () => {
  const recruitmentId = Number(useParams().recruitmentId);
  const { isModalOpen, openModal, closeModal } = useModalStore();
  const { isLoggedIn } = useLoginStore();
  const { user } = useUserStore();
  const [applyTryStatus, setApplyTryStatus] = useState<ApplyTryStatus>('NOT APPLY');

  const navigate = useNavigate();
  const { data: recruitmentDetail, isLoading } = useRecruitmentDetail(recruitmentId);

  const recruitment = recruitmentDetail?.recruitment;
  const study = recruitmentDetail?.study;

  const { mutate: closeRecruitmentMutate } = useCloseRecruitmentMutation(study?.id);

  useEffect(() => {
    closeModal();
  }, [closeModal]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <RecruitmentDetailWrapper>
      <RecruitmentTitleWrapper>
        <div className="title">{recruitment.title}</div>
      </RecruitmentTitleWrapper>
      <RecruitmentInfoWrapper>
        <div className="recruitment__status">
          <div className="creator">{study.owner.nickname}</div>
          <ColumnDivider />
          <div className="edit__info">
            <div className="createdAt">{dateFormatter(recruitment.createdDateTime)}</div>
            <div className="edit__status">
              {isEdited(recruitment.createdDateTime, recruitment.updatedDateTime) ? '수정됨' : '생성'}
            </div>
          </div>
        </div>
        <div className="recruitment__details">
          <RecruitmentInfoSection
            applicantCnt={recruitment.applicantCount}
            endDate={dateFormatter(recruitment.endDateTime)}
            positions={recruitment.positions}
            stacks={recruitment.stacks}
            contact={recruitment.contact}
            platformUrl={recruitment.callUrl}
          />
          <RowDivider rowHeight={16} />
          <StudyProgressInfoSection
            method={study.way}
            platform={study.platform}
            period={getPeriod(study.startDateTime, study.endDateTime)}
          />
          <RowDivider rowHeight={16} />
          <StudyBasicInfoSection
            studyTitle={study.title}
            category={study.category}
            participantLimit={study.participantLimit}
          />
          <RowDivider />
          <div className="study__detail">
            <InfoField
              title="상세내용"
              content={recruitment.content || '상세내용'}
              flexDirection="column"
              width="100%"
            />
          </div>
        </div>
      </RecruitmentInfoWrapper>
      <StudyButtonsWrapper>
        {user?.id === study.owner.id ? (
          <>
            <Button onClick={() => closeRecruitmentMutate()}>모집 마감하기</Button>
            <Button scheme="secondary" onClick={() => {}}>
              스터디 모집 공고 수정하기
            </Button>
          </>
        ) : (
          <Button scheme="secondary" onClick={openModal}>
            스터디 지원하기
          </Button>
        )}
      </StudyButtonsWrapper>
      {!isLoggedIn && isModalOpen && (
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
      {isLoggedIn && isModalOpen && applyTryStatus === 'NOT APPLY' && (
        <ApplyModal
          handleApplyApprove={setApplyTryStatus}
          studyId={study.id}
          recruitmentId={recruitment.id}
          positions={recruitment.positions}
        />
      )}
      {isLoggedIn && isModalOpen && applyTryStatus === 'SUCCESS' && (
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
      {isLoggedIn && isModalOpen && (applyTryStatus === 'CLOSED' || applyTryStatus === 'ALREDAY_APPLY') && (
        <Modal
          title={applyTryStatus === 'CLOSED' ? APPLY.CLOSED.title : APPLY.ALREADY_APPLY.title}
          handleApprove={() => {
            setApplyTryStatus(() => 'NOT APPLY');
            closeModal();
          }}
          approveBtnText="확인"
        >
          {applyTryStatus === 'CLOSED' ? APPLY.CLOSED.content : APPLY.ALREADY_APPLY.content}
        </Modal>
      )}
    </RecruitmentDetailWrapper>
  );
};

const RecruitmentDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 80px;
  gap: 40px;
`;

const RecruitmentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  color: ${(props) => props.theme.color.black5};
  font-family: Pretendard;
  font-size: ${(props) => props.theme.font.xxxxlarge};
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
`;

const RecruitmentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  padding-bottom: 20px;

  .recruitment__status {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    font-size: 18px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.2px;

    .creator {
      color: ${(props) => props.theme.color.black4};
    }

    .edit__info {
      display: flex;
      gap: 12px;
      color: ${(props) => props.theme.color.black2};
    }
  }

  .recruitment__details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .study__detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;
const StudyButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
`;

export default RecruitmentDetailPage;
