import { Member, StudyInfo } from '@/Assets';
import MemberCard from '@/Components/MemberCard';
import MyStudyCard from '@/Components/MyStudyCard';
import styled from 'styled-components';
import StudyToken from '@/Components/Common/StudyToken';
import { BlankSquare } from '@/Components/Common/BlankSquare';
import TemporarySavedStudyCard from '@/Components/TemporarySavedStudyCard';
import Button from '@/Components/Common/Button';
import { useMyStudies } from '@/Apis/study';
import { useSelectedMyStudyStore } from '@/Store/study';
import { StudyProgressStatus, StudyApplyStatus, ApplicantStudyType, ParticiPantStudyType } from '@/Types/study';
import { dateFormatter } from '@/Utils/date';
import ChipButton from '@/Components/Button/ChipButton';

const MyPage = () => {
  const { data: myStudies, isLoading } = useMyStudies();
  const { selectedMyStudyStatus, setSelectedMyStudyStatus } = useSelectedMyStudyStore();

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <MyPageWrapper>
      <UserInfoWrapper>
        <div className="title">
          <Member />
          <span>회원정보</span>
        </div>
        <MemberCard nickname={myStudies?.user.nickname || '닉네임'} email={myStudies?.user.email || '이메일'} />
      </UserInfoWrapper>
      <MyStudyWrapper>
        <MyStudyTitleWrapper>
          <StudyInfo width={40} height={40} />
          <span className="title">스따-디</span>
        </MyStudyTitleWrapper>
        <StudyStateButtonsWrapper>
          <ChipButton checked={selectedMyStudyStatus === '진행 중'} onClick={() => setSelectedMyStudyStatus('진행 중')}>
            참여 중인 스터디
          </ChipButton>
          <ChipButton
            checked={selectedMyStudyStatus === '지원 완료'}
            onClick={() => setSelectedMyStudyStatus('지원 완료')}
          >
            내가 지원한 스터디
          </ChipButton>
          <ChipButton checked={selectedMyStudyStatus === '완료됨'} onClick={() => setSelectedMyStudyStatus('완료됨')}>
            진행 완료된 스터디
          </ChipButton>
        </StudyStateButtonsWrapper>
        {selectedMyStudyStatus === '지원 완료'
          ? myStudies?.applicantStudies.map((applicantStudy: ApplicantStudyType) => (
              <MyStudyCard
                id={applicantStudy.id}
                title={applicantStudy.title}
                status={[...applicantStudy.status]}
                key={applicantStudy.id}
              />
            ))
          : selectedMyStudyStatus === '진행 중'
          ? myStudies?.participantStudies
              .filter((participantStudy: ParticiPantStudyType) => participantStudy.status.includes('진행 중'))
              .map((filteredStudy: ParticiPantStudyType) => (
                <MyStudyCard
                  id={filteredStudy.id}
                  title={filteredStudy.title}
                  status={[...filteredStudy.status]}
                  key={filteredStudy.id}
                  period={`${dateFormatter(filteredStudy.startDateTime)}~${dateFormatter(filteredStudy.endDateTime)}`}
                />
              ))
          : myStudies?.participantStudies
              .filter((participantStudy: ParticiPantStudyType) => participantStudy.status.includes('완료됨'))
              .map((filteredStudy: ParticiPantStudyType) => (
                <MyStudyCard
                  id={filteredStudy.id}
                  title={filteredStudy.title}
                  status={[...filteredStudy.status]}
                  key={filteredStudy.id}
                  period={`${dateFormatter(filteredStudy.startDateTime)}~${dateFormatter(filteredStudy.endDateTime)}`}
                />
              ))}
      </MyStudyWrapper>

      <TemporarySavedStudyWrapper>
        <div className="title">
          <BlankSquare width="40px" height="40px" />
          <span>임시 저장된 글</span>
        </div>
        <StudyTokensWrapper>
          <StudyToken tokenState="Apply">스터디 생성</StudyToken>
          <StudyToken tokenState="Completed">스터디 모집공고</StudyToken>
        </StudyTokensWrapper>
        <TemporarySavedStudyCard studyId={1} title={'모집공고 1'} />
        <TemporarySavedStudyCard title={'스터디 이름'} />
      </TemporarySavedStudyWrapper>

      <MypageButtonsWrapper>
        <Button>로그아웃</Button>
      </MypageButtonsWrapper>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 40px auto 80px auto;
  gap: 32px;

  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    color: ${({ theme }) => theme.color.black5};
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.xxlarge};
    font-style: normal;
    font-weight: 800;
    line-height: 48px;
  }
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const MyStudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const MyStudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

const StudyStateButtonsWrapper = styled.div<{ selectedMyStudyState: StudyProgressStatus | StudyApplyStatus }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const StudyTokensWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  span {
    border-radius: ${({ theme }) => theme.borderRadius.xlarge};
    border: 1px solid ${({ theme }) => theme.color.black1};
    background: ${({ theme }) => theme.color.white};
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
  }
`;

const TemporarySavedStudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const MypageButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

export default MyPage;
