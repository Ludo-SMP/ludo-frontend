import { ToggleSwitchList } from '@/Components/ToggleSwitchList';
import styled from 'styled-components';
import { BoldDivider } from '@/Components/Common/Divider/BoldDivider';
import ChipMenu from '@/Components/Common/ChipMenu';
import Button from '@/Components/Common/Button';
import { useNotificationsSetting } from '@/Hooks/notifications/useNotificationsSetting';

const RecruitmentKeywordsDummy: { name: string; value: string[] }[] = [
  { name: '기술 스택', value: ['기술 스택'] },
  { name: '포지션', value: ['프론트엔드', '백엔드', '디자인', '데브옵스'] },
  { name: '카테고리', value: ['모의 면접', '개발 프로젝트', '코딩 테스트'] },
];

export const NotificationsSettings = () => {
  const { data: notificationsSetting } = useNotificationsSetting();

  return (
    <NotificationsSettingsLayout>
      <AllOnOffSettingSection>
        <ToggleSwitchList label="전체 알림" description="제목" defaultChecked={notificationsSetting?.settings.all} />
      </AllOnOffSettingSection>
      <BoldDivider $rowHeight={2} />
      <RecruitmentSettingsSection>
        <SettingTitleBox>모집 공고</SettingTitleBox>
        <ToggleSwitchList
          label="모집 공고 알림"
          description="권한 허용 후, 선호하는 항목을 고르면, 해당 모집 공고가 업로드 됐을 시 알림이 갑니다."
          defaultChecked={notificationsSetting?.settings.recruitment.notification}
        />
        <RecruitmentKeywordsBox>
          <div className="select__keywords">
            {RecruitmentKeywordsDummy.map((recruitmentKeyword: { name: string; value: string[] }) => (
              <KeywordBox key={recruitmentKeyword.name}>
                <KeywordTitleBox>{recruitmentKeyword.name}</KeywordTitleBox>
                <ChipsBox>
                  {recruitmentKeyword.value.map((chipValue: string) => (
                    <ChipMenu key={chipValue} checked={false} onClick={() => {}}>
                      {chipValue}
                    </ChipMenu>
                  ))}
                </ChipsBox>
              </KeywordBox>
            ))}
          </div>
          <div className="btns">
            <Button size="fullWidth" onClick={() => {}}>
              취소
            </Button>
            <Button size="fullWidth" scheme="secondary" onClick={() => {}}>
              저장
            </Button>
          </div>
        </RecruitmentKeywordsBox>
        <ApplicantSettingsBox>
          <ToggleSwitchList
            label="스터디 지원 여부 알림"
            description="제목"
            defaultChecked={notificationsSetting?.settings.study.applicantNotification}
          />
          <ToggleSwitchList
            label="스터디 지원 결과 알림"
            description="제목"
            defaultChecked={notificationsSetting?.settings.study.applicantResultNotification}
          />
        </ApplicantSettingsBox>
      </RecruitmentSettingsSection>
      <StudySettingSection>
        <SettingTitleBox>스터디</SettingTitleBox>
        <>
          <ToggleSwitchList
            label="스터디 종료 기간 알림"
            description="제목"
            defaultChecked={notificationsSetting?.settings.study.endDateNotification}
          />
          <ToggleSwitchList
            label="스터디 탈퇴자 알림"
            description="제목"
            defaultChecked={notificationsSetting?.settings.study.participantLeaveNotification}
          />
          <ToggleSwitchList
            label="스터디 리뷰 평가 알림"
            description="제목"
            defaultChecked={notificationsSetting.settings.review.notification}
          />
        </>
      </StudySettingSection>
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

  .select__keywords {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
`;

const SettingTitleBox = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: 'Pretendard600';
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const KeywordTitleBox = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: 'Pretendard400';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

const RecruitmentKeywordsBox = styled.div`
  display: flex;
  padding: 0 0 20px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  .btns {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
  }
`;

const KeywordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const ChipsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ApplicantSettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StudySettingSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
