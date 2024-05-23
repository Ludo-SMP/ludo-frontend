import styled from 'styled-components';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { Left, Loading, Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import StudyInfoSection from './StudyInfoSection';
import MemberSection from './MemberSection';
import { useLeaveStudyMutation } from '@/Hooks/study/useLeaveStudyMutation ';
import { useDeleteStudyMutation } from '@/Hooks/study/useDeleteStudyMutation';
import { useStudyDetail } from '@/Hooks/study/useStudyDetail';
import { getDday, getPeriod } from '@/utils/date';
import { useUserStore } from '@/store/user';
import { useCloseRecruitmentMutation } from '@/Hooks/recruitments/useCloseRecruitmentMutation';
import { useQueryClient } from '@tanstack/react-query';
import { STUDY } from '@/Constants/queryString';
import { useModalStore } from '@/store/modal';
import Modal from '@/Components/Common/Modal';
import { DELETE, LEAVE } from '@/Constants/messages';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useApplicantsDetail } from '@/Hooks/study/useApplicantsDetail';
import Chip from '@/Components/Common/Chip';

export const StudyDetailPage = () => {
  const studyId = Number(useParams().studyId);
  const { user } = useUserStore();
  const { pathname } = useLocation();
  const { isModalOpen, openModal } = useModalStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isDeletedBtnClicked, setIsDeletedBtnClicked] = useState<boolean>(false);
  const [isLeftBtnClicked, setIsLeftBtnClicked] = useState<boolean>(false);

  const { data: studyDetail, isLoading } = useStudyDetail(studyId);
  const { data: applicantsDetail, isLoading: isLoaidngApplicantsDetail } = useApplicantsDetail(studyId);

  const study = studyDetail?.study;

  const { mutate: closeRecruitmentMutate } = useCloseRecruitmentMutation(studyId, () => {
    queryClient.invalidateQueries({ queryKey: [...STUDY.STUDY(studyId)] });
  });

  const { mutate: deleteStudyMutate } = useDeleteStudyMutation(studyId);
  const { mutate: leaveStudyMutate } = useLeaveStudyMutation(studyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isLoading) return <Loading />;

  return (
    <Grid>
      <StudyDetailLayout>
        <ParentNav studyTitle={study.title} />
        <Main>
          <Sidebar>
            <SidebarMenu>
              <SidebarMenuItem title="카테고리">{study.category.name}</SidebarMenuItem>
              <SidebarMenuItem title="진행 기간">진행 기간</SidebarMenuItem>
              <SidebarMenuItem title="남은 진행 기간">D-</SidebarMenuItem>
              <SidebarMenuItem title="진행 방식">{study.way}</SidebarMenuItem>
            </SidebarMenu>
            <Button scheme="secondary" size="fullWidth">
              스터디 수정하기
            </Button>
          </Sidebar>
          <MainSection></MainSection>
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
`;

const ParentNav = ({ studyTitle }: { studyTitle: string }) => (
  <ParentNavBox>
    <StudyTitleBox>
      <Left />
      <StudyTitle>
        <StudyInfo />
        <StudyTitleText>{studyTitle}</StudyTitleText>
        <StudyToken status="PARTICIPATED" />
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

const Sidebar = styled.div`
  display: flex;
  width: 288px;
  max-width: 912px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 16px;
  border: 1px solid #0000001a;
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
`;

const SidebarMenuItem = ({ title, children }: PropsWithChildren<{ title: string }>) => (
  <SidebarMenuItemBox>
    <SidebarMenuItemTitle>{title}</SidebarMenuItemTitle>
    <SidebarMenuItemText>{children}</SidebarMenuItemText>
  </SidebarMenuItemBox>
);

const SidebarMenuItemBox = styled.div`
  display: flex;
  min-width: 268px;
  max-width: 600px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const SidebarMenuItemTitle = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard500;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const SidebarMenuItemText = styled.span`
  color: ${({ theme }) => theme.color.black2};
  font-family: Pretendard500;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const MainSection = styled.div`
  display: flex;
  max-width: 912px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
`;

export default StudyDetailPage;
