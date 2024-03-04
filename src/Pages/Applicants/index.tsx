import styled from 'styled-components';
import { StudyInfo } from '@/Assets';
import { InfoField } from '@/Components/Common/InfoField';
import ApplicantCard from '@/Components/ApplicantCard';
import { Applicant } from '@/Types/study';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useLocation } from 'react-router-dom';
import { useUserStore } from '@/Store/user';

const Applicants = () => {
  const { title, memberCnt, memberLimit, ownerId, applicants, status } = useLocation().state;
  const { user } = useUserStore();
  console.log(applicants);
  return (
    <ApplicantsWrapper>
      <ApplicantsTitleWrapper>스터디 지원자를 확인해주세요!</ApplicantsTitleWrapper>
      <StudyDetailWrapper>
        <StudyTitleWrapper>
          <StudyInfo width="48" height="48" />
          <span className="title">{title}</span>
          <div className="study__tokens">
            {status !== '완료됨' && (
              <StudyToken status={status} tokenType={'MEMBER'}>
                참여중인 스터디
              </StudyToken>
            )}
            <StudyToken status={status} tokenType={'STUDY'}>
              {status}
            </StudyToken>
          </div>
        </StudyTitleWrapper>
        <StudyInfoWrapper>
          <InfoField title="현재 인원수" content={memberCnt} />
          <InfoField title="목표 인원수" content={memberLimit} />
        </StudyInfoWrapper>
        <ApplicantsInfoWrapper>
          {applicants?.map((applicant: Applicant) => (
            <ApplicantCard {...applicant} title={title} key={applicant?.email} isOwner={ownerId === user?.id} />
          ))}
        </ApplicantsInfoWrapper>
      </StudyDetailWrapper>
      {ownerId === user?.id && (
        <ApplicantButtonsWrapper>
          <Button>스터디원 모집 마감하기</Button>
        </ApplicantButtonsWrapper>
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
  font-family: Pretendard;
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

const ApplicantButtonsWrapper = styled.div`
  button {
    display: flex;
    width: 100%;
    height: 48px;
    padding: var(--Padding-btn-lg-vertical, 0px) var(--Spacing-16, 16px);
    justify-content: center;
    align-items: center;
    gap: var(--Spacing-8, 8px);
    align-self: stretch;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 1px solid ${({ theme }) => theme.color.purple2};
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  }
`;

export default Applicants;
