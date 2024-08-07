/** 스따-디 섹션 */

import { StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import ChipMenu from '@/Components/Common/ChipMenu';
import { MyStudyCard } from '@/Components/MyStudyCard';
import { useMyPageInfo } from '@/Hooks/study/useMyPageInfo';
import { ApplicantRecruitment, CompletedStudy, ParticipateStudy } from '@/Types/study';
import { SelectedMyStudyStatus, useSelectedMyStudyStore } from '@/store/study';
import { getPeriod } from '@/utils/date';
import { Children, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { match } from 'ts-pattern';
import { LoginFail, SignUpFail } from '@/Assets';
import { Link } from 'react-router-dom';
import { media } from '@/Styles/theme';

const StudiesSection = () => {
  const { data: myPageInfo } = useMyPageInfo();

  const participateStudies: ParticipateStudy[] = myPageInfo?.participateStudies;
  const applicantRecruitments: ApplicantRecruitment[] = myPageInfo?.applicantRecruitments;
  const completedStudies: CompletedStudy[] = myPageInfo?.completedStudies;

  const { selectedMyStudyStatus, setSelectedMyStudyStatus } = useSelectedMyStudyStore();

  return (
    <StudiesSectionBox>
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
      <StudyList placeholder={<PlaceHolder tab={selectedMyStudyStatus} />}>
        {match(selectedMyStudyStatus)
          .with('PARTICIPATED', () =>
            participateStudies.map(
              ({
                studyId,
                title,
                status,
                position,
                startDateTime,
                endDateTime,
                participantCount,
                isOwner,
                hasRecruitment,
              }) => (
                <li key={studyId}>
                  <MyStudyCard
                    id={studyId}
                    title={title}
                    status={status}
                    position={position}
                    period={getPeriod(startDateTime, endDateTime)}
                    participantCount={participantCount}
                    isOwner={isOwner}
                    hasRecruitment={hasRecruitment}
                  />
                </li>
              ),
            ),
          )
          .with('APPLIED', () =>
            applicantRecruitments.map(({ recruitmentId, title, applicantStatus, position }) => (
              <li key={recruitmentId}>
                <MyStudyCard id={recruitmentId} title={title} status={applicantStatus} position={position} />
              </li>
            )),
          )
          .with('COMPLETED', () =>
            completedStudies.map(
              ({
                studyId,
                title,
                status,
                position,
                startDateTime,
                endDateTime,
                participantCount,
                isOwner,
                hasRecruitment,
              }) => (
                <li key={studyId}>
                  <MyStudyCard
                    id={studyId}
                    title={title}
                    status={status}
                    position={position}
                    period={getPeriod(startDateTime, endDateTime)}
                    participantCount={participantCount}
                    isOwner={isOwner}
                    hasRecruitment={hasRecruitment}
                  />
                </li>
              ),
            ),
          )
          .exhaustive()}
      </StudyList>
    </StudiesSectionBox>
  );
};

export { StudiesSection };

const StudiesSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 368px;
  gap: 24px;

  ${media.custom(1100)} {
    width: calc(100vw - 192px);
  }

  ${media.custom(800)} {
    width: 100%;
  }
`;

const MyStudyTitleWrapper = styled.div`
  display: flex;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.color.black5};
    font-family: 'Pretendard700';
    font-size: ${({ theme }) => theme.font.medium};
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
`;

const StudyList = ({
  placeholder,
  children,
}: PropsWithChildren<{
  placeholder: ReactNode;
}>) => (Children.toArray(children).length !== 0 ? <StudyListInner>{children}</StudyListInner> : placeholder);
const StudyListInner = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HidableButton = styled(Button)<{
  $hide?: boolean;
}>`
  visibility: ${({ $hide }) => ($hide ? 'hidden' : 'visible')};
`;

const PlaceHolder = ({ tab }: { tab: SelectedMyStudyStatus['selectedMyStudyStatus'] }) => (
  <PlaceHolderBox>
    <PlaceHolderInner>
      <PlaceHolderTitle>
        {match(tab)
          .with('PARTICIPATED', () => '아직 참여 중인 스터디가 없습니다.')
          .with('APPLIED', () => '지원한 스터디가 없습니다.')
          .with('COMPLETED', () => '진행 완료된 스터디가 아직 없습니다.')
          .exhaustive()}
      </PlaceHolderTitle>
      <img src={tab === 'COMPLETED' ? SignUpFail : LoginFail} width={294} height={180} alt="no study" />
    </PlaceHolderInner>
    {
      <HidableButton scheme="primary" $hide={tab === 'COMPLETED'}>
        <Link to="/studies">참여할만한 스터디 찾아보기</Link>
      </HidableButton>
    }
  </PlaceHolderBox>
);

const PlaceHolderBox = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const PlaceHolderInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const PlaceHolderTitle = styled.span`
  color: ${({ theme }) => theme.color.black4};
  ${({ theme }) => theme.typo.ListLabel};
`;

const ChipMenusWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  overflow-x: hidden;
`;
