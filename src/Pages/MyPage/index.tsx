import { Loading, MemberImage, Study, StudyInfo } from '@/Assets';
import UserCard from '@/Components/UserCard';
import MyStudyCard from '@/Components/MyStudyCard';
import styled from 'styled-components';
import TemporarySavedCard, { TemporarySavedCardProps } from '@/Components/TemporarySavedCard';
import Button from '@/Components/Common/Button';
import { useMyPageInfo } from '@/Hooks/study/useMyPageInfo';
import { getPeriod } from '@/utils/date';
import ChipMenu from '@/Components/Common/ChipMenu';
import { User, ParticipateStudy, ApplicantRecruitment, CompletedStudy } from '@/Types/study';
import { useSelectedCardStore, useSelectedMyStudyStore } from '@/store/study';
import { temporarySavedCardMockData } from '@/Shared/dummy';
import { useLogOutMutation } from '@/Hooks/auth/useLogOutMutation';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StackModal from '@/Components/Modal/StackModal';

const MyPage = () => {
  const { data: myPageInfo, isLoading } = useMyPageInfo();
  const user: User = myPageInfo?.user;
  const participateStudies: ParticipateStudy[] = myPageInfo?.participateStudies;
  const applicantRecruitments: ApplicantRecruitment[] = myPageInfo?.applicantRecruitments;
  const completedStudies: CompletedStudy[] = myPageInfo?.completedStudies;
  const { pathname } = useLocation();

  const { selectedMyStudyStatus, setSelectedMyStudyStatus } = useSelectedMyStudyStore();
  const { selectedCard, setSelectedCard } = useSelectedCardStore();

  const { mutate: logoutMutate } = useLogOutMutation();
  const [isStackModalOpen, setIsStackModalOpen] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MyPageWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
              <ChipMenu
                checked={selectedMyStudyStatus === 'PARTICIPATED'}
                onClick={() => setSelectedMyStudyStatus('PARTICIPATED')}
              >
                참여중인 스터디
              </ChipMenu>
              <ChipMenu
                checked={selectedMyStudyStatus === 'APPLIED'}
                onClick={() => setSelectedMyStudyStatus('APPLIED')}
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
            {selectedMyStudyStatus === 'PARTICIPATED'
              ? participateStudies?.map((participateStudy: ParticipateStudy) => (
                  <MyStudyCard
                    id={participateStudy?.studyId}
                    title={participateStudy?.title}
                    status={participateStudy.status}
                    position={participateStudy?.position}
                    period={getPeriod(participateStudy?.startDateTime, participateStudy?.endDateTime)}
                    participantCount={participateStudy?.participantCount}
                    isOwner={participateStudy?.isOwner}
                    hasRecruitment={participateStudy?.hasRecruitment}
                    key={participateStudy?.studyId}
                  />
                ))
              : selectedMyStudyStatus === 'APPLIED'
                ? applicantRecruitments.map((applicantRecruitment: ApplicantRecruitment) => (
                    <MyStudyCard
                      id={applicantRecruitment?.recruitmentId}
                      title={applicantRecruitment?.title}
                      status={applicantRecruitment?.applicantStatus}
                      position={applicantRecruitment?.position}
                      key={applicantRecruitment?.recruitmentId}
                    />
                  ))
                : completedStudies.map((completedStudy: CompletedStudy) => (
                    <MyStudyCard
                      id={completedStudy?.studyId}
                      title={completedStudy?.title}
                      status={completedStudy?.status}
                      position={completedStudy?.position}
                      period={getPeriod(completedStudy?.startDateTime, completedStudy?.endDateTime)}
                      participantCount={completedStudy?.participantCount}
                      isOwner={completedStudy?.isOwner}
                      hasRecruitment={completedStudy?.hasRecruitment}
                      key={completedStudy?.studyId}
                    />
                  ))}
          </CardsWrapper>

          <CardsWrapper>
            <div className="title">
              <Study width="40" height="40" />
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
                  .map((recruitmentSavedCard: TemporarySavedCardProps) => (
                    <TemporarySavedCard {...recruitmentSavedCard} />
                  ))}
          </CardsWrapper>
          <Button onClick={() => setIsStackModalOpen((prev: boolean) => !prev)}>스택 모달 열기</Button>
          {isStackModalOpen && <StackModal handleModal={setIsStackModalOpen} />}

          <MypageButtonsWrapper>
            <Button onClick={() => logoutMutate()} size="fullWidth">
              로그아웃
            </Button>
          </MypageButtonsWrapper>
        </>
      )}
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
