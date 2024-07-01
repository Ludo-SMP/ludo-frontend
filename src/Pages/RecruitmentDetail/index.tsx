import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { ColumnDivider } from '../../Components/Common/Divider/ColumnDivider';
import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { Stack } from '@/Components/Common/Stack';
import { ApplySection } from './ApplySection';
import { RecruitInfoSection } from './RecruitInfoSection';
import { StudyBasicInfoSection } from './StudyBasicInfoSection';
import { dateFormatter, isEdited } from '@/utils/date';
import styled from 'styled-components';
import { useModalStore } from '@/store/modal';
import { useUserStore } from '@/store/user';
import { Loading } from '@/Assets';
import { LeftArrow } from '@/Assets/LeftArrow';
import Button from '@/Components/Common/Button';

const RecruitmentDetailPage = () => {
  const recruitmentId = Number(useParams().recruitmentId);
  const navigate = useNavigate();

  const { closeModal } = useModalStore();
  const { user } = useUserStore();

  const { data: recruitmentDetail, isLoading } = useRecruitmentDetail(recruitmentId);
  const { pathname } = useLocation();
  const recruitment = recruitmentDetail?.recruitment;
  const study = recruitmentDetail?.study;
  const isMine = user?.id === study?.owner?.id;

  useEffect(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <RecruitmentDetailLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <RecruitmentTitleBox>
            <Button scheme="text" onClick={() => navigate(-1)}>
              <LeftArrow />
            </Button>
            <TitleRows>
              <TitleRow>
                <Title>{recruitment.title}</Title>
              </TitleRow>
              <TitleRow>
                <Nickname>{study?.owner?.nickname}</Nickname>
                <ColumnDivider />
                <GreyText>{dateFormatter(recruitment.createdDateTime)}</GreyText>
                <GreyText>
                  {isEdited(recruitment.createdDateTime, recruitment.updatedDateTime) ? '수정됨' : '생성'}
                </GreyText>
              </TitleRow>
            </TitleRows>
          </RecruitmentTitleBox>
          <RecruitmentInfoBox>
            <StudyInfoSection>
              <Stack divider={<RowDivider rowHeight={12} margin={24} />}>
                <RecruitInfoSection
                  applicantCnt={recruitment.applicantCount}
                  endDate={dateFormatter(recruitment.endDateTime)}
                  positions={recruitment.positions}
                  stacks={recruitment.stacks}
                  contact={recruitment.contact}
                  platformUrl={recruitment.callUrl}
                />
                <StudyBasicInfoSection
                  studyTitle={study.title}
                  participantLimit={study.participantLimit}
                  content={recruitment.content}
                />
              </Stack>
            </StudyInfoSection>
            <ApplySection isMine={isMine} recruitment={recruitment} study={study} />
          </RecruitmentInfoBox>
        </>
      )}
    </RecruitmentDetailLayout>
  );
};

const RecruitmentDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  padding: 24px 0 40px;
  gap: 24px;
`;

const TitleRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleRow = styled.div`
  display: flex;
  gap: 12px;
  font-family: 'Pretendard500';
  ${({ theme }) => theme.typo.InputTitle};
`;

const Nickname = styled.span`
  display: flex;
`;

const GreyText = styled.span`
  display: flex;
  color: ${({ theme }) => theme.color.black2};
`;

const Title = styled.h1`
  font-family: 'Pretendard800';
  ${({ theme }) => theme.typo.PageHeadWeb};
`;

const StudyInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 912px;
  width: 100%;
`;

const RecruitmentTitleBox = styled.div`
  display: flex;
  gap: 12px;

  button {
    width: 40px;
    height: 40px;
    padding: 8px;
  }
`;

const RecruitmentInfoBox = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 20px;
`;

export default RecruitmentDetailPage;
