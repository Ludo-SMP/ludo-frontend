import styled from 'styled-components';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { Left, Loading, Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { MemberSection } from './MemberSection';
import { useLeaveStudyMutation } from '@/Hooks/study/useLeaveStudyMutation ';
import { useDeleteStudyMutation } from '@/Hooks/study/useDeleteStudyMutation';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';
import { useUserStore } from '@/store/user';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import Modal from '@/Components/Common/Modal';
import { DELETE, LEAVE } from '@/Constants/messages';
import { useEffect, useState } from 'react';
import { MemberImage } from '@/Assets';
import { ApplicationButton } from '@/Components/Common/Button/ApplicationButton/ApplicationButton';
import { StudyStatus } from '@/Types/study';
import { match, P } from 'ts-pattern';
import { Sidebar } from './Sidebar';
import { attendStudy } from '@/Apis/study';
import { useAttendStudyMutation } from '@/Hooks/study/useAttendStudyMutation';
import { isToday } from '@/utils/date';

export const StudyDetailPage = () => {
  const studyId = Number(useParams().studyId);
  const { user } = useUserStore();
  const { pathname } = useLocation();
  const queryClient = useQueryClient();

  const { data: studyDetail, isLoading } = useStudyDetail(studyId);

  const study = studyDetail?.study;
  const isOwner = user?.id === study?.owner.id;

  const { mutate: closeRecruitmentMutate } = useCloseRecruitmentMutation(studyId, () => {
    queryClient.invalidateQueries({ queryKey: [...STUDY.STUDY(studyId)] });
  });

  const { mutate: deleteStudyMutate } = useDeleteStudyMutation(studyId);
  const { mutate: leaveStudyMutate } = useLeaveStudyMutation(studyId);
  const { mutate: attendStudyMutate, isSuccess: isAttendStudyMutationSuccess } = useAttendStudyMutation(studyId);

  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) return <Loading />;

  const didIAttendToday = isToday(new Date(study.participants.find(({ id }) => id === user?.id)?.recentAttendanceDate));

  return (
    <Grid>
      <StudyDetailLayout>
        <ParentNav studyTitle={study.title} status={study.status} />
        <Main>
          <Sidebar
            id={study.id}
            category={study.category.name}
            startDateTime={study.startDateTime}
            endDateTime={study.endDateTime}
            way={study.way}
            isOwner={isOwner}
          />
          <MainSection>
            <AttendanceTopBar>
              <PlatformSection>
                <PlatformTitle>
                  <TopBarSectionTitle>진행 플랫폼</TopBarSectionTitle>
                  {didIAttendToday ? (
                    <Button disabled>출석 완료</Button>
                  ) : (
                    <Button
                      scheme="secondary"
                      onClick={async () => {
                        attendStudyMutate();

                        setIsAttendanceModalOpen(true);
                      }}
                    >
                      출석 체크
                    </Button>
                  )}
                  {isAttendanceModalOpen && (
                    <Modal
                      title="해당 스터디 출석이 체크되었습니다!"
                      approveBtnText="확인하기"
                      handleApprove={() => setIsAttendanceModalOpen(false)}
                    >
                      <p>
                        해당 스터디 출석이 완료되었습니다.
                        <br />
                        출석은 하루에 한번 가능합니다.
                        <br />
                        오늘도 열심히 스터디를 하는 회원님의 앞날을 응원합니다!
                      </p>
                    </Modal>
                  )}
                </PlatformTitle>
                <TopBarSectionText>
                  <a
                    href="#"
                    style={{
                      textDecoration: 'underline',
                    }}
                  >
                    {study.platform}
                  </a>
                </TopBarSectionText>
              </PlatformSection>
              <WeekdaySection>
                <TopBarSectionTitle>출석일</TopBarSectionTitle>
                <TopBarSectionText>출석일</TopBarSectionText>
              </WeekdaySection>
            </AttendanceTopBar>
            <RowDivider />
            <Members>
              <MembersCountBar>
                <MemberCounts count={study.participants.length} />
                {isOwner && (
                  <ApplicationButton>
                    <Link to={'#'}>스터디원 모집</Link>
                  </ApplicationButton>
                )}
              </MembersCountBar>
              <MemberList>
                <MemberSection members={study.participants} />
              </MemberList>
            </Members>
          </MainSection>
        </Main>
      </StudyDetailLayout>
    </Grid>
  );
};

const Grid = styled.div`
  display: flex;
  padding: 0px 24px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const StudyDetailLayout = styled.div`
  display: flex;
  max-width: 1224px;
  padding: 24px 0px 40px 0px;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  flex: 1 0 0;
  background: ${({ theme }) => theme.color.white2};
`;

const ParentNav = ({ studyTitle, status }: { studyTitle: string; status: StudyStatus }) => (
  <ParentNavBox>
    <StudyTitleBox>
      <Left />
      <StudyTitle>
        <StudyInfo />
        <StudyTitleText>{studyTitle}</StudyTitleText>
        {match(status)
          .with('COMPLETED', () => <StudyToken status="COMPLETED" />)
          .with(P._, () => <StudyToken status="PARTICIPATED" />)
          .exhaustive()}
      </StudyTitle>
    </StudyTitleBox>
  </ParentNavBox>
);

const ParentNavBox = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 1224px;
  padding-right: 933px;
  align-items: center;
  align-self: stretch;
`;

const StudyTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StudyTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StudyTitleText = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard600;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  white-space: nowrap;
`;

const Main = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const MainSection = styled.div`
  display: flex;
  max-width: 912px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
`;

const AttendanceTopBar = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px 24px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const PlatformSection = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 392px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  align-self: stretch;
`;

const PlatformTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

const WeekdaySection = styled.div`
  display: flex;
  min-width: 288px;
  max-width: 600px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const TopBarSectionTitle = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard500;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const TopBarSectionText = styled.span`
  color: ${({ theme }) => theme.color.black2};
  font-family: Pretendard500;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 999px;
`;

const MembersCountBar = styled.div`
  display: flex;
  align-items: center;
  gap: 632px;
  align-self: stretch;
`;

const MemberCounts = ({ count }: { count: number }) => (
  <MemberCountsBox>
    <MemberImage />
    <MemberCountsText>
      구성원 <MemberCountsTextCaption>({count})</MemberCountsTextCaption>
    </MemberCountsText>
  </MemberCountsBox>
);

const MemberCountsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const MemberCountsText = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard600;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const MemberCountsTextCaption = styled.span`
  color: #00000080;
  font-family: Pretendard600;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const MemberList = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 1224px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export default StudyDetailPage;
