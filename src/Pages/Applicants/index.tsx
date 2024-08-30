import { useEffect } from 'react';
import styled from 'styled-components';
import { Left, Loading, Logo, StudyInfo } from '@/Assets';
import { InfoField } from '@/Components/Common/InfoField';
import { ApplicantCard } from '@/Components/ApplicantCard';
import Button from '@/Components/Common/Button';
import { useUserStore } from '@/store/user';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useApplicantsDetail } from '@/Hooks/study/useApplicantsDetail';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import Footer from '@/Components/Footer';
import { P, match } from 'ts-pattern';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';
import { Applicant } from '@/Types/study';
import { media } from '@/Styles/theme';

const ApplicantsPage = () => {
  const studyId = Number(useParams().studyId);
  const { user } = useUserStore();
  const { data: ApplicantsDetail, status } = useApplicantsDetail(studyId);
  const { data: studyDetail, isSuccess } = useStudyDetail(studyId);

  const study = ApplicantsDetail?.study;
  const applicants: Applicant[] = ApplicantsDetail?.applicants;
  const navigate = useNavigate();

  const { mutate: closeRecruitmentMutate } = useCloseRecruitmentMutation(studyId);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Page>
      <Header>
        <HeaderInner>
          <TitleBox>
            <Link to="/">
              <ResponsiveLogo src={Logo} alt="Ludo" />
            </Link>
            <Title>스터디 지원자를 확인해주세요!</Title>
          </TitleBox>
        </HeaderInner>
      </Header>
      <RowDivider />
      <Main>
        {match([status, isSuccess])
          .with(['pending', P._], () => <Loading />)
          .with(['success', P._], () => (
            <MainInner>
              <ParentNav studyTitle={study.title} />
              <InfoSection>
                <InfoFields>
                  <InfoField title="현재 인원수" content={study.participantCount} flexDirection="column" />
                  <InfoField title="목표 인원수" content={study.participantLimit} flexDirection="column" />
                </InfoFields>
                <Applicants>
                  {applicants.map((applicant) => (
                    <ApplicantLi key={applicant.id}>
                      <ApplicantCard
                        studyId={studyId}
                        id={applicant.id}
                        title={study.title}
                        nickname={applicant.nickname}
                        email={applicant.email}
                        position={applicant.position}
                        isOwner={user?.id === study.owner.id}
                        reviewStatistics={applicant.reviewStatistics}
                      />
                    </ApplicantLi>
                  ))}
                </Applicants>
              </InfoSection>
            </MainInner>
          ))
          .with(['error', true], () => (
            <MainInner>
              <ParentNav studyTitle={studyDetail.study.title} />
              <InfoSection>
                <InfoFields>
                  <InfoField title="현재 인원수" content={studyDetail.study.participantCount} flexDirection="column" />
                </InfoFields>
                <PlaceHolder>
                  <PlaceHolderTitle>아직 스터디 모집 공고를 작성하지 않았어요!</PlaceHolderTitle>
                  <Button scheme="primary">
                    <Link to={`/studies/${studyDetail.study.id}/recruitments/create`}>모집공고 작성하기</Link>
                  </Button>
                </PlaceHolder>
              </InfoSection>
            </MainInner>
          ))
          .run()}
      </Main>
      {user?.id === study?.owner.id && (
        <CloseSection>
          <CloseSectionInner>
            <Button scheme="secondary" onClick={() => (closeRecruitmentMutate(), navigate('./..'))}>
              모집 마감하기
            </Button>
          </CloseSectionInner>
        </CloseSection>
      )}
      <FooterSection>
        <Footer />
      </FooterSection>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.white2};
  min-height: 100vh;

  & > *:last-child {
    margin-top: auto;
  }
`;

const Header = styled.header`
  display: flex;
  padding: 0px 24px;
  justify-content: center;
`;

const HeaderInner = styled.div`
  display: flex;
  height: 92px;
  width: 100%;
  max-width: 1224px;
  padding: 22px 0px;
  align-items: center;

  ${({ theme }) => theme.media.mobile} {
    justify-content: center;
    height: 56px;
    padding: 16px 0px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  ${({ theme }) => theme.media.mobile} {
    gap: 12px;
  }
`;

const ResponsiveLogo = styled.img`
  width: 112px;

  ${({ theme }) => theme.media.mobile} {
    width: 56px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard800;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 48px;

  ${({ theme }) => theme.media.mobile} {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Main = styled.main`
  display: flex;
  padding: 24px;
  justify-content: center;

  ${({ theme }) => theme.media.mobile} {
    padding: 0px 24px;
  }
`;

const MainInner = styled.main`
  display: flex;
  max-width: 1224px;
  width: 100%;
  padding: 40px 0px;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.media.mobile} {
    padding: 24px 0px;
  }
`;

const ParentNav = ({ studyTitle }: { studyTitle: string }) => (
  <Link to="./..">
    <ParentNavBox>
      <StudyTitleBox>
        <Left />
        <StudyTitle>
          <StudyInfo />
          <StudyTitleText>{studyTitle}</StudyTitleText>
        </StudyTitle>
      </StudyTitleBox>
    </ParentNavBox>
  </Link>
);

const ParentNavBox = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 1224px;
  padding-right: 933px;
  align-items: center;
  align-self: stretch;

  ${({ theme }) => theme.media.mobile} {
    padding: 4px 141px 4px 0px;
  }
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

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.media.mobile} {
    max-width: 808px;
  }
`;

const InfoFields = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  max-width: 808px;

  & > * {
    flex: 1;
  }

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

const Applicants = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(248px, 392px));
  min-width: 300px;
  min-height: 444px;
  max-width: 1224px;
  gap: 24px;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.mobile} {
    gap: 12px;
  }

  ${media.custom(500)} {
    min-height: 364px;
  }
`;

// <li> 요소를 넣기 위해 추가적으로 만든 레이어
const ApplicantLi = styled.li`
  display: flex;

  & > * {
    flex: 1;
  }
`;

const CloseSection = styled.div`
  display: flex;
  padding: 0px 24px;
  justify-content: center;
`;

const CloseSectionInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1224px;
  padding-bottom: 72px;

  ${({ theme }) => theme.media.mobile} {
    padding-bottom: 40px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  padding: 0px 24px;
  justify-content: center;
  background: ${({ theme }) => theme.color.gray1};
`;

const PlaceHolder = styled.div`
  padding: 72px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const PlaceHolderTitle = styled.span`
  color: ${({ theme }) => theme.color.black4};
  ${({ theme }) => theme.typo.ListLabel};
`;

export default ApplicantsPage;
