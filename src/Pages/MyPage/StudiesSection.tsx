/** 스따-디 섹션 */

import { StudyInfo } from '@/Assets';
import ChipMenu from '@/Components/Common/ChipMenu';
import { MyStudyCard } from '@/Components/MyStudyCard';
import { useMyPageInfo } from '@/Hooks/study/useMyPageInfo';
import { ApplicantRecruitment, CompletedStudy, ParticipateStudy } from '@/Types/study';
import { useSelectedMyStudyStore } from '@/store/study';
import { getPeriod } from '@/utils/date';
import styled from 'styled-components';

const StudiesSection = () => {
  const { data: myPageInfo } = useMyPageInfo();

  const participateStudies: ParticipateStudy[] = myPageInfo?.participateStudies;
  const applicantRecruitments: ApplicantRecruitment[] = myPageInfo?.applicantRecruitments;
  const completedStudies: CompletedStudy[] = myPageInfo?.completedStudies;

  const { selectedMyStudyStatus, setSelectedMyStudyStatus } = useSelectedMyStudyStore();

  return (
    <CardsWrapper>
      <MyStudyTitleWrapper>
        <StudyInfo width={32} height={32} />
        <span className="title">스따-디</span>
      </MyStudyTitleWrapper>
      <ChipMenusWrapper>
        <ChipMenu
          checked={selectedMyStudyStatus === 'PARTICIPATED'}
          onClick={() => setSelectedMyStudyStatus('PARTICIPATED')}
        >
          참여중인 스터디
        </ChipMenu>
        <ChipMenu checked={selectedMyStudyStatus === 'APPLIED'} onClick={() => setSelectedMyStudyStatus('APPLIED')}>
          내가 지원한 스터디
        </ChipMenu>
        <ChipMenu checked={selectedMyStudyStatus === 'COMPLETED'} onClick={() => setSelectedMyStudyStatus('COMPLETED')}>
          진행 완료된 스터디
        </ChipMenu>
      </ChipMenusWrapper>
      <CardListWrapper>
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
      </CardListWrapper>
    </CardsWrapper>
  );
};

export { StudiesSection };

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 368px;
  gap: 24px;
  align-self: stretch;
`;

const MyStudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  span {
    color: ${({ theme }) => theme.color.black5};
    font-family: 'Pretendard700';
    font-size: ${({ theme }) => theme.font.medium};
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
`;

const CardListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  gap: 12px;
  align-self: stretch;
`;

const ChipMenusWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  overflow-x: hidden;
`;
