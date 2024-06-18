import styled from 'styled-components';
import { Left, Loading, Logo, StudyInfo } from '@/Assets';
import { InfoField } from '@/Components/Common/InfoField';
import ApplicantCard from '@/Components/ApplicantCard';
import { Applicant } from '@/Types/study';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useUserStore } from '@/store/user';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useApplicantsDetail } from '@/Hooks/study/useApplicantsDetail';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { useEffect } from 'react';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';

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
      <CloseSection>
        <CloseSectionInner>
          <Button scheme="secondary">모집 마감하기</Button>
        </CloseSectionInner>
      </CloseSection>
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
