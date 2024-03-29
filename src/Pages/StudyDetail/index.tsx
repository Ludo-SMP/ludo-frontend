import styled from 'styled-components';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { Loading, Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import StudyInfoSection from './StudyInfoSection';
import MemberSection from './MemberSection';
import { useLeaveStudyMutation } from '@/Hooks/study/useLeaveStudyMutation ';
import { useDeleteStudyMutation } from '@/Hooks/study/useDeleteStudyMutation';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';
import { getDday, getPeriod } from '@/utils/date';
import { useUserStore } from '@/store/user';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { useModalStore } from '@/store/modal';
import Modal from '@/Components/Common/Modal';
import { DELETE, LEAVE } from '@/Constants/messages';
import { useEffect, useState } from 'react';
import { useApplicantsDetail } from '@/Hooks/study/useApplicantsDetail';

export const StudyDetailPage = () => {
  const studyId = Number(useParams().studyId);
  const { user } = useUserStore();
  const { pathname } = useLocation();
  const { isModalOpen, openModal } = useModalStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isDeletedBtnClicked, setIsDeletedBtnClicked] = useState<boolean>(false);
  const [isLeftBtnClicked, setIsLeftBtnClicked] = useState<boolean>(false);

  const { data: studyDetail, isLoading } = useStudyDetail(studyId);
  const { data: applicantsDetail, isLoading: isLoaidngApplicantsDetail } = useApplicantsDetail(studyId);

  const study = studyDetail?.study;

  const { mutate: closeRecruitmentMutate } = useCloseRecruitmentMutation(studyId, () => {
    queryClient.invalidateQueries({ queryKey: [...STUDY.STUDY(studyId)] });
  });

  const { mutate: deleteStudyMutate } = useDeleteStudyMutation(studyId);
  const { mutate: leaveStudyMutate } = useLeaveStudyMutation(studyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StudyDetailWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StudyDetailTitleWrapper>
            <StudyTitleWrapper>
              <StudyInfo width="48" height="48" />
              <span className="title">{study?.title}</span>
              <div className="study__tokens">
                {study?.status !== 'COMPLETED' && <StudyToken status={'PARTICIPATED'} />}
                <StudyToken status={study?.status} />
              </div>
            </StudyTitleWrapper>

            {study.hasRecruitment && (
              <Button onClick={() => navigate(`/studies/${studyId}/applicants`)}>
                <span>
                  스터디 지원자 확인하기({isLoaidngApplicantsDetail ? 0 : applicantsDetail.applicants.length}명)
                </span>
                <Right />
              </Button>
            )}
          </StudyDetailTitleWrapper>
          <StudyInfoSection
            category={study?.category}
            progressMethod={study?.way}
            platform={study?.platform}
            period={getPeriod(study?.startDateTime, study?.endDateTime)}
            dDay={getDday(study?.endDateTime)}
          />
          <RowDivider rowHeight={16} />
          <MemberSection memberLimit={study?.participantsLimit} members={study?.participants} />
          <StudyButtonsWrapper>
            {study.participants.length && study.owner.id !== user?.id && (
              <Button
                size="fullWidth"
                onClick={() => {
                  openModal();
                  setIsLeftBtnClicked(true);
                }}
              >
                스터디 탈퇴하기
              </Button>
            )}
            {user?.id === study.owner.id &&
              study.participants.length &&
              (study.status === 'RECRUITED' || study.status === 'PROGRESS' || study.status === 'RECRUITING') && (
                <Button scheme="secondary" size="fullWidth" onClick={() => {}} disabled>
                  스터디 수정하기
                </Button>
              )}
            {user?.id === study.owner.id && study.participants.length && study.status === 'RECRUITING' && (
              <Button scheme="secondary" size="fullWidth" onClick={() => closeRecruitmentMutate()}>
                스터디원 모집 마감하기
              </Button>
            )}
          </StudyButtonsWrapper>
          {isModalOpen && isDeletedBtnClicked && (
            <Modal
              handleApprove={() => {
                deleteStudyMutate();
                setIsDeletedBtnClicked(false);
              }}
              handleCancel={() => setIsDeletedBtnClicked(false)}
              title={DELETE.STUDY.title}
              approveBtnText="삭제하기"
              cancelBtnText="아니요"
            >
              {DELETE.STUDY.content}
            </Modal>
          )}
          {isModalOpen && isLeftBtnClicked && (
            <Modal
              handleApprove={() => {
                leaveStudyMutate();
                setIsLeftBtnClicked(false);
              }}
              handleCancel={() => setIsLeftBtnClicked(false)}
              approveBtnText="탈퇴하기"
              cancelBtnText="아니요"
              title={user?.id === study.owner.id ? LEAVE.OWNER.title : LEAVE.MEMBER.title}
            >
              {user?.id === study.owner.id ? LEAVE.OWNER.content : LEAVE.MEMBER.content}
            </Modal>
          )}
        </>
      )}
    </StudyDetailWrapper>
  );
};

const StudyDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 80px;
  gap: 40px;
`;

const StudyDetailTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.black3};
  button {
    border: none;
    &:hover {
      border: none;
    }
  }
  .title {
    max-width: 600px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${(props) => props.theme.color.black4};
  font-size: ${(props) => props.theme.font.xxxxlarge};
  font-weight: 800;

  .study__tokens {
    display: flex;
    gap: 8px;
  }
`;

const StudyButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

export default StudyDetailPage;
