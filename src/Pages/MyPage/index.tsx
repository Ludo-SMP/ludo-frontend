import { MemberImage, StudyInfo } from '@/Assets';
import UserCard from '@/Components/UserCard';
import MyStudyCard from '@/Components/MyStudyCard';
import styled from 'styled-components';
import { BlankSquare } from '@/Components/Common/BlankSquare';
import TemporarySavedCard, { TemporarySavedCardProps } from '@/Components/TemporarySavedCard';
import Button from '@/Components/Common/Button';
import { useMyPageInfo } from '@/Apis/study';
import { getPeriod } from '@/Utils/date';
import ChipMenu from '@/Components/Common/ChipMenu';
import { User, ParticipateStudy, ApplicantRecruitment, CompletedStudy } from '@/Types/study';
import { useSelectedCardStore, useSelectedMyStudyStore } from '@/Store/study';
import { useLogOutMutation } from '@/Apis/auth';

const MyPage = () => {
  const { data: myPageInfo, isLoading } = useMyPageInfo();
  const user: User = myPageInfo?.user;
  const participateStudies: ParticipateStudy[] = myPageInfo?.participateStudies;
  const applicantRecruitments: ApplicantRecruitment[] = myPageInfo?.applicantRecruitments;
  const completedStudies: CompletedStudy[] = myPageInfo?.completedStudies;

  const { selectedMyStudyStatus, setSelectedMyStudyStatus } = useSelectedMyStudyStore();
  const { selectedCard, setSelectedCard } = useSelectedCardStore();

  const { mutate: logoutMutate } = useLogOutMutation();

  const temporarySavedCardMockData: TemporarySavedCardProps[] = [
    { title: '모집공고 1', id: 1, card: 'RECRUITMENT' },
    { title: '모집공고 2', id: 2, card: 'RECRUITMENT' },
    { title: '모집공고 3', id: 3, card: 'RECRUITMENT' },
    { title: '모집공고 4', id: 4, card: 'RECRUITMENT' },
    { title: '스터디 1', card: 'STUDY' },
    { title: '스터디 2', card: 'STUDY' },
    { title: '스터디 3', card: 'STUDY' },
    { title: '스터디 4', card: 'STUDY' },
  ];

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
      <CardsWrapper>
        <MyStudyTitleWrapper>
          <StudyInfo width={40} height={40} />
          <span className="title">스따-디</span>
        </MyStudyTitleWrapper>
        <ChipMenusWrapper>
          <ChipMenu checked={selectedMyStudyStatus === 'PROGRESS'} onClick={() => setSelectedMyStudyStatus('PROGRESS')}>
            참여중인 스터디
          </ChipMenu>
          <ChipMenu
            checked={selectedMyStudyStatus === 'UNCHECKED'}
            onClick={() => setSelectedMyStudyStatus('UNCHECKED')}
          >
            내가 지원한 스터디
          </ChipMenu>
          <ChipMenu
            checked={selectedMyStudyStatus === 'COMPLETED'}
            onClick={() => setSelectedMyStudyStatus('COMPLETED')}
          >
            진행 완료된 스터디
          </ChipMenu>
        </ChipMenusWrapper>
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
      </CardsWrapper>

      <CardsWrapper>
        <div className="title">
          <BlankSquare width="40px" height="40px" />
          <span>임시 저장된 글</span>
        </div>
        <ChipMenusWrapper>
          <ChipMenu checked={selectedCard === 'STUDY'} onClick={() => setSelectedCard('STUDY')}>
            스터디 생성
          </ChipMenu>
          <ChipMenu checked={selectedCard === 'RECRUITMENT'} onClick={() => setSelectedCard('RECRUITMENT')}>
            스터디 모집공고
          </ChipMenu>
        </ChipMenusWrapper>
        {selectedCard === 'STUDY'
          ? temporarySavedCardMockData
              .filter((temporarySavedCard: TemporarySavedCardProps) => temporarySavedCard.card === 'STUDY')
              .map((studySavedCard: TemporarySavedCardProps) => <TemporarySavedCard {...studySavedCard} />)
          : temporarySavedCardMockData
              .filter((temporarySavedCard: TemporarySavedCardProps) => temporarySavedCard.card === 'RECRUITMENT')
              .map((recruitmentSavedCard: TemporarySavedCardProps) => <TemporarySavedCard {...recruitmentSavedCard} />)}
      </CardsWrapper>

      <MypageButtonsWrapper>
        <Button onClick={() => logoutMutate()} size="fullWidth">
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

const CardsWrapper = styled.div`
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

const ChipMenusWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
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
