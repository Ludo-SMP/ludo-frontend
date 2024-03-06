import { MemberImage, StudyInfo } from '@/Assets';
import UserCard from '@/Components/UserCard';
import MyStudyCard from '@/Components/MyStudyCard';
import styled from 'styled-components';
import StudyToken from '@/Components/Common/StudyToken';
import { BlankSquare } from '@/Components/Common/BlankSquare';
import TemporarySavedStudyCard from '@/Components/TemporarySavedStudyCard';
import Button from '@/Components/Common/Button';
import { useMyPageInfo } from '@/Apis/study';
import { getPeriod } from '@/Utils/date';
import ChipButton from '@/Components/Button/ChipButton';
import { User, ParticipateStudy, ApplicantRecruitment, CompletedStudy } from '@/Types/study';
import { useSelectedMyStudyStore } from '@/Store/study';

const MyPage = () => {
  const { data: myPageInfo, isLoading } = useMyPageInfo();
  const user: User = myPageInfo?.user;
  const participateStudies: ParticipateStudy[] = myPageInfo?.participateStudies;
  const applicantRecruitments: ApplicantRecruitment[] = myPageInfo?.applicantRecruitments;
  const completedStudies: CompletedStudy[] = myPageInfo?.completedStudies;
  const { selectedMyStudyStatus, setSelectedMyStudyStatus } = useSelectedMyStudyStore();
  console.log(user, participateStudies, applicantRecruitments, completedStudies);

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <MyPageWrapper>
      <UserInfoWrapper>
        <div className="title">
          <MemberImage />
          <span>회원정보</span>
        </div>
        <UserCard nickname={user?.nickname || '닉네임'} email={user?.email || '이메일'} />
      </UserInfoWrapper>
      <MyStudyWrapper>
        <MyStudyTitleWrapper>
          <StudyInfo width={40} height={40} />
          <span className="title">스따-디</span>
        </MyStudyTitleWrapper>
        <StudyStateButtonsWrapper>
          <ChipButton
            checked={selectedMyStudyStatus === 'PROGRESS'}
            onClick={() => setSelectedMyStudyStatus('PROGRESS')}
          >
            참여중인 스터디
          </ChipButton>
          <ChipButton
            checked={selectedMyStudyStatus === 'UNCHECKED'}
            onClick={() => setSelectedMyStudyStatus('UNCHECKED')}
          >
            내가 지원한 스터디
          </ChipButton>
          <ChipButton
            checked={selectedMyStudyStatus === 'COMPLETED'}
            onClick={() => setSelectedMyStudyStatus('COMPLETED')}
          >
            진행 완료된 스터디
          </ChipButton>
        </StudyStateButtonsWrapper>
        {selectedMyStudyStatus === 'PROGRESS'
          ? participateStudies.map((participateStudy: ParticipateStudy) => (
              <MyStudyCard
                id={participateStudy.studyId}
                title={participateStudy.title}
                status={'PROGRESS'}
                position={participateStudy.position}
                period={getPeriod(participateStudy.startDateTime, participateStudy.endDateTime)}
                participantCount={participateStudy.participantCount}
                key={participateStudy.studyId}
              />
            ))
          : selectedMyStudyStatus === 'UNCHECKED'
          ? applicantRecruitments.map((applicantRecruitment: ApplicantRecruitment) => (
              <MyStudyCard
                id={applicantRecruitment.recruitmentId}
                title={applicantRecruitment.title}
                status={'UNCHECKED'}
                position={applicantRecruitment.position}
                key={applicantRecruitment.recruitmentId}
              />
            ))
          : completedStudies.map((completedStudy: CompletedStudy) => (
              <MyStudyCard
                id={completedStudy.studyId}
                title={completedStudy.title}
                status={'COMPLETED'}
                position={completedStudy.position}
                period={getPeriod(completedStudy.startDateTime, completedStudy.endDateTime)}
                participantCount={completedStudy.participantCount}
                key={completedStudy.studyId}
              />
            ))}
      </MyStudyWrapper>

      <TemporarySavedStudyWrapper>
        <div className="title">
          <BlankSquare width="40px" height="40px" />
          <span>임시 저장된 글</span>
        </div>
        <StudyTokensWrapper>
          <StudyToken tokenState="Apply">스터디 생성</StudyToken>
          <StudyToken tokenState="Completed">스터디 모집공고</StudyToken>
        </StudyTokensWrapper>
        <TemporarySavedStudyCard studyId={1} title={'모집공고 1'} />
        <TemporarySavedStudyCard title={'스터디 이름'} />
      </TemporarySavedStudyWrapper>

      <MypageButtonsWrapper>
        <Button onClick={() => {}} size="fullWidth">
          로그아웃
        </Button>
      </MypageButtonsWrapper>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 40px auto 80px auto;
  gap: 32px;

  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    color: ${({ theme }) => theme.color.black5};
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.xxlarge};
    font-style: normal;
    font-weight: 800;
    line-height: 48px;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const MyStudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const MyStudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

const StudyStateButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const StudyTokensWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  span {
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    border: 1px solid ${({ theme }) => theme.color.black1};
    background: ${({ theme }) => theme.color.white};
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
  }
`;

const TemporarySavedStudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const MypageButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

export default MyPage;
