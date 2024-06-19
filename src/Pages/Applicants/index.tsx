import styled from 'styled-components';
import { Left, Loading, Logo, StudyInfo } from '@/Assets';
import { InfoField } from '@/Components/Common/InfoField';
import { ApplicantCard } from '@/Components/ApplicantCard';
import { Applicant } from '@/Types/study';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useUserStore } from '@/store/user';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useApplicantsDetail } from '@/Hooks/study/useApplicantsDetail';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { useEffect } from 'react';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import Footer from '@/Components/Footer';

export const ApplicantsPage = () => {
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

  if (isLoading) return <Loading />;

  const isOwner = user?.id === study.owner.id;

  return (
    <Page>
      <Header>
        <HeaderInner>
          <TitleBox>
            <Link to="/">
              <img width={112} src={Logo} alt="Ludo" />
            </Link>
            <Title>스터디 지원자를 확인해주세요!</Title>
          </TitleBox>
        </HeaderInner>
      </Header>
      <RowDivider />
      <Main>
        <MainInner>
          <ParentNav studyTitle={study.title} id={studyId} />
          <InfoSection>
            <InfoFields>
              <InfoField title="현재 인원수" content={study.participantCount} flexDirection="column" />
              <InfoField title="목표 인원수" content={study.participantLimit} flexDirection="column" />
            </InfoFields>
            <Applicants>
              {applicants.map((applicant) => (
                <li key={applicant.id}>
                  <ApplicantCard
                    studyId={studyId}
                    id={applicant.id}
                    title={study.title}
                    nickname={applicant.nickname}
                    email={applicant.email}
                    position={applicant.position}
                    isOwner={isOwner}
                  />
                </li>
              ))}
            </Applicants>
          </InfoSection>
        </MainInner>
      </Main>
      <CloseSection>
        <CloseSectionInner>
          <Button scheme="secondary">모집 마감하기</Button>
        </CloseSectionInner>
      </CloseSection>
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
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard800;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
`;

const Main = styled.main`
  display: flex;
  padding: 24px;
  justify-content: center;
`;

const MainInner = styled.main`
  display: flex;
  max-width: 1224px;
  width: 100%;
  padding: 40px 0px;
  flex-direction: column;
  gap: 24px;
`;

const ParentNav = ({ studyTitle, id }: { studyTitle: string; id: number }) => (
  <Link to={`/studies/${id}`}>
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
`;

const InfoFields = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  max-width: 808px;

  & > * {
    flex: 1;
  }
`;

const Applicants = styled.ul`
  display: flex;
  min-width: 300px;
  max-width: 1224px;
  gap: 24px;
  flex-wrap: wrap;
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
`;

const FooterSection = styled.div`
  display: flex;
  padding: 0px 24px;
  justify-content: center;
  background: ${({ theme }) => theme.color.gray1};
`;
