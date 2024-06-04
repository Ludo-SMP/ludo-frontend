import { ToggleSwitchList } from '@/Components/ToggleSwitchList';
import styled from 'styled-components';
import { BoldDivider } from '@/Components/Common/Divider/BoldDivider';
import ChipMenu from '@/Components/Common/ChipMenu';
import Button from '@/Components/Common/Button';
import { useNotificationsSetting } from '@/Hooks/notifications/useNotificationsSetting';
import { Loading } from '@/Assets';
import { KeywordForm } from '@/Components/Common/KeywordForm';
import { useForm } from 'react-hook-form';
import { RecruitmentKeywordsForm } from '@/Types/notifications';
import { CATEGORIES_OPTION, POSITIONS_OPTIONS } from '@/Shared/study';

const RecruitmentKeywordOptions = {
  POSITION: [...POSITIONS_OPTIONS],
  CATEGORY: [...CATEGORIES_OPTION],
};

export const NotificationsSettings = () => {
  const { data: notificationsSetting } = useNotificationsSetting();

  const { setValue, watch, handleSubmit } = useForm<RecruitmentKeywordsForm>({
    defaultValues: {
      stackIds: notificationsSetting?.stackKeyword.map(({ stackId }: { stackId: number }) => stackId),
      positionIds: notificationsSetting?.positionKeyword.map(({ positionId }: { positionId: number }) => positionId),
      categoryIds: notificationsSetting?.categoryKeyword.map(({ categoryId }: { categoryId: number }) => categoryId),
    },
  });

  return (
    <NotificationsSettingsLayout>
      {!notificationsSetting ? (
        <Loading />
      ) : (
        <>
          <AllOnOffSettingSection>
            <ToggleSwitchList
              label="전체 알림"
              description="제목"
              defaultChecked={notificationsSetting?.settings.all}
              type="ALL"
            />
          </AllOnOffSettingSection>
          <BoldDivider $rowHeight={2} />
          <RecruitmentSettingsSection>
            <SettingTitleBox>모집 공고</SettingTitleBox>
            <ToggleSwitchList
              label="모집 공고 알림"
              description="권한 허용 후, 선호하는 항목을 고르면, 해당 모집 공고가 업로드 됐을 시 알림이 갑니다."
              defaultChecked={notificationsSetting?.settings.recruitment.notification}
              type="RECRUITMENT"
              disabled={!notificationsSetting?.settings.all}
            />
            <KeywordsSettingForm>
              <KeywordsSettingBox>
                <KeywordForm label="기술 스택" type="stackIds">
                  <ChipMenu key={'기술 스택'} checked={watch('stackIds').length !== 0} onClick={() => {}}>
                    {'기술 스택'}
                  </ChipMenu>
                </KeywordForm>
                <KeywordForm label="포지션" type="positionIds">
                  {RecruitmentKeywordOptions['POSITION'].map(({ value: id, label }) => (
                    <ChipMenu key={label} checked={false} onClick={() => {}} id={id}>
                      {label}
                    </ChipMenu>
                  ))}
                </KeywordForm>
                <KeywordForm label="카테고리" type="categoryIds">
                  {RecruitmentKeywordOptions['CATEGORY'].map(({ value: id, label }) => (
                    <ChipMenu key={label} checked={false} onClick={() => {}} id={id}>
                      {label}
                    </ChipMenu>
                  ))}
                </KeywordForm>
              </KeywordsSettingBox>
              <BtnsBox>
                <Button size="fullWidth" onClick={() => {}}>
                  취소
                </Button>
                <Button size="fullWidth" scheme="secondary" onClick={() => {}}>
                  저장
                </Button>
              </BtnsBox>
            </KeywordsSettingForm>
          </RecruitmentSettingsSection>
          <StudySettingSection>
            <SettingTitleBox>스터디</SettingTitleBox>
            <ToggleSwitches>
              <ToggleSwitchList
                label="스터디 지원 여부 알림"
                description="제목"
                defaultChecked={notificationsSetting?.settings.study.applicantNotification}
                type="STUDY_APPLICANT"
                disabled={!notificationsSetting?.settings.all}
              />
              <ToggleSwitchList
                label="스터디 지원 결과 알림"
                description="제목"
                defaultChecked={notificationsSetting?.settings.study.applicantResultNotification}
                type="STUDY_APPLICANT_RESULT"
                disabled={!notificationsSetting?.settings.all}
              />
              <ToggleSwitchList
                label="스터디 종료 기간 알림"
                description="제목"
                defaultChecked={notificationsSetting?.settings.study.endDateNotification}
                type="STUDY_END_DATE"
                disabled={!notificationsSetting?.settings.all}
              />
              <ToggleSwitchList
                label="스터디 탈퇴자 알림"
                description="제목"
                defaultChecked={notificationsSetting?.settings.study.participantLeaveNotification}
                type="STUDY_PARTICIPANT_LEAVE"
                disabled={!notificationsSetting?.settings.all}
              />
              <ToggleSwitchList
                label="스터디 리뷰 평가 알림"
                description="제목"
                defaultChecked={notificationsSetting?.settings.review.notification}
                type="REVIEW"
                disabled={!notificationsSetting?.settings.all}
              />
            </ToggleSwitches>
          </StudySettingSection>
        </>
      )}
    </NotificationsSettingsLayout>
  );
};

const NotificationsSettingsLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

const AllOnOffSettingSection = styled.section`
  display: flex;
  width: 100%;
`;

const RecruitmentSettingsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
  width: 100%;
`;

const KeywordsSettingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const SettingTitleBox = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  align-self: stretch;
`;

const KeywordsSettingForm = styled.form`
  display: flex;
  padding: 0 0 32px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

const BtnsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const StudySettingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
  align-self: stretch;
`;

const ToggleSwitches = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
