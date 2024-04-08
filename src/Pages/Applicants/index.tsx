import styled from 'styled-components';
import { Loading, StudyInfo } from '@/Assets';
import { InfoField } from '@/Components/Common/InfoField';
import ApplicantCard from '@/Components/ApplicantCard';
import { Applicant } from '@/Types/study';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useUserStore } from '@/store/user';
import { useLocation, useParams } from 'react-router-dom';
import { useApplicantsDetail } from '@/Hooks/study/useApplicantsDetail';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { useEffect } from 'react';

const ApplicantsPage = () => {
  const studyId = Number(useParams().studyId);
  const { user } = useUserStore();
  const { data: ApplicantsDetail, isLoading } = useApplicantsDetail(studyId);
  const study = ApplicantsDetail?.study;
  const applicants: Applicant[] = ApplicantsDetail?.applicants;

  const { mutate: closeRecruitmentMutate } = useCloseRecruitmentMutation(studyId);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ApplicantsWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ApplicantsTitleWrapper>스터디 지원자를 확인해주세요!</ApplicantsTitleWrapper>
          <StudyDetailWrapper>
            <StudyTitleWrapper>
              <StudyInfo width="48" height="48" />
              <span className="title">{study.title}</span>
              <div className="study__tokens">
                {study?.status !== 'COMPLETED' && <StudyToken status={'PARTICIPATED'} />}
                <StudyToken status={study?.status} />
              </div>
            </StudyTitleWrapper>
            <StudyInfoWrapper>
              <InfoField title="현재 인원수" content={study.participantCount} />
              <InfoField title="목표 인원수" content={study.participantLimit} />
            </StudyInfoWrapper>
            <ApplicantsInfoWrapper>
              {applicants?.map((applicant: Applicant) => (
                <ApplicantCard
                  {...applicant}
                  title={study.title}
                  studyId={studyId}
                  key={applicant?.email}
                  isOwner={study.owner.id === user?.id}
                />
              ))}
            </ApplicantsInfoWrapper>
          </StudyDetailWrapper>
          {study.owner.id === user?.id && (
            <ApplicantButtonsWrapper>
              <Button onClick={() => closeRecruitmentMutate()} scheme="secondary" size="fullWidth">
                스터디원 모집 마감하기
              </Button>
            </ApplicantButtonsWrapper>
          )}
        </>
      )}
    </ApplicantsWrapper>
  );
};

const ApplicantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 40px auto 80px auto;
  gap: 40px;
`;

const ApplicantsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  align-self: stretch;
  color: ${({ theme }) => theme.color.black4};
  font-family: 'Pretendard800';
  font-size: ${({ theme }) => theme.font.xxxxlarge};
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
`;

const StudyDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const StudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${(props) => props.theme.color.black4};
  font-size: ${(props) => props.theme.font.xxxxlarge};
  font-weight: 800;
  .title {
    max-width: 800px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .study__tokens {
    display: flex;
    gap: 24px;
  }
`;

const StudyInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  grid-gap: 24px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const ApplicantsInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const ApplicantButtonsWrapper = styled.div``;

export default ApplicantsPage;
