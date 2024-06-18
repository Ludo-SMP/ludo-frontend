import { ToggleSwitchList } from '@/Components/ToggleSwitchList';
import styled from 'styled-components';
import { BoldDivider } from '@/Components/Common/Divider/BoldDivider';
import { useNotificationsSetting } from '@/Hooks/notifications/useNotificationsSetting';
import { Loading } from '@/Assets';
import { KeywordsSettingForm } from './KeywordsSettingForm';
import { NOTIFICATIONS_SETTINGS_CONTENTS } from '@/Constants/messages';

export const NotificationsSettings = () => {
  const { data: notificationsSetting, isLoading } = useNotificationsSetting();

  return (
    <NotificationsSettingsLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AllOnOffSettingSection>
            <ToggleSwitchList
              label={NOTIFICATIONS_SETTINGS_CONTENTS.ALL_CONFIG.title}
              description={NOTIFICATIONS_SETTINGS_CONTENTS.ALL_CONFIG.description}
              checked={notificationsSetting?.allConfig.on}
              type="ALL_CONFIG"
            />
          </AllOnOffSettingSection>
          <BoldDivider $rowHeight={2} />
          <RecruitmentSettingsSection>
            <SettingTitleBox>모집 공고</SettingTitleBox>
            <ToggleSwitchList
              label={NOTIFICATIONS_SETTINGS_CONTENTS.RECRUITMENT_CONFIG.title}
              description={NOTIFICATIONS_SETTINGS_CONTENTS.RECRUITMENT_CONFIG.description}
              checked={notificationsSetting?.recruitmentConfig.on}
              type="RECRUITMENT_CONFIG"
              disabled={!notificationsSetting?.allConfig.on}
            />
            <KeywordsSettingForm
              values={{
                stackIds: notificationsSetting?.recruitmentConfig?.stackKeywords?.map(
                  (stackKeyword: { stackId: number; name: string }) => stackKeyword.stackId,
                ),
                positionIds: notificationsSetting?.recruitmentConfig?.positionKeywords?.map(
                  (positionKeyword: { positionId: number; name: string }) => positionKeyword.positionId,
                ),
                categoryIds: notificationsSetting?.recruitmentConfig?.categoryKeywords?.map(
                  (categoryKeyword: { categoryId: number; name: string }) => categoryKeyword.categoryId,
                ),
              }}
              disabled={!notificationsSetting?.recruitmentConfig.on}
            />
          </RecruitmentSettingsSection>
          <StudySettingSection>
            <SettingTitleBox>스터디</SettingTitleBox>
            <ToggleSwitches>
              <ToggleSwitchList
                label={NOTIFICATIONS_SETTINGS_CONTENTS.STUDY_APPLICANT_CONFIG.title}
                description={NOTIFICATIONS_SETTINGS_CONTENTS.STUDY_APPLICANT_CONFIG.description}
                checked={notificationsSetting?.studyApplicantConfig.on}
                type="STUDY_APPLICANT_CONFIG"
                disabled={!notificationsSetting?.allConfig.on}
              />
              <ToggleSwitchList
                label={NOTIFICATIONS_SETTINGS_CONTENTS.STUDY_APPLICANT_RESULT_CONFIG.title}
                description={NOTIFICATIONS_SETTINGS_CONTENTS.STUDY_APPLICANT_RESULT_CONFIG.description}
                checked={notificationsSetting?.studyApplicantResultConfig.on}
                type="STUDY_APPLICANT_RESULT_CONFIG"
                disabled={!notificationsSetting?.allConfig.on}
              />
              <ToggleSwitchList
                label={NOTIFICATIONS_SETTINGS_CONTENTS.STUDY_END_DATE_CONFIG.title}
                description={NOTIFICATIONS_SETTINGS_CONTENTS.STUDY_END_DATE_CONFIG.description}
                checked={notificationsSetting?.studyEndDateConfig.on}
                type="STUDY_END_DATE_CONFIG"
                disabled={!notificationsSetting?.allConfig.on}
              />
              <ToggleSwitchList
                label={NOTIFICATIONS_SETTINGS_CONTENTS.STUDY_PARTICIPANT_LEAVE_CONFIG.title}
                description={NOTIFICATIONS_SETTINGS_CONTENTS.STUDY_PARTICIPANT_LEAVE_CONFIG.description}
                checked={notificationsSetting?.studyParticipantLeaveConfig.on}
                type="STUDY_PARTICIPANT_LEAVE_CONFIG"
                disabled={!notificationsSetting?.allConfig.on}
              />
              <ToggleSwitchList
                label={NOTIFICATIONS_SETTINGS_CONTENTS.REVIEW_CONFIG.title}
                description={NOTIFICATIONS_SETTINGS_CONTENTS.REVIEW_CONFIG.description}
                checked={notificationsSetting?.reviewConfig.on}
                type="REVIEW_CONFIG"
                disabled={!notificationsSetting?.allConfig.on}
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

const SettingTitleBox = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
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
