import { Member, StudyInfo } from '@/Assets';
import MemberCard from '@/Components/MemberCard';
import MyStudyCard from '@/Components/MyStudyCard';
import { MemberType } from '@/Types/study';
import styled from 'styled-components';
import Chip from '@/Components/Common/Chip';
import { BlankSquare } from '@/Components/Common/BlankSquare';
import TemporarySavedStudyCard from '@/Components/TemporarySavedStudyCard';
import Button from '@/Components/Common/Button';

const MyPage = () => {
  const memberData: MemberType = {
    nickname: '포키',
    email: 'aaa1@bb.net',
    teamPosition: '팀장',
    skillPosition: '디자이너',
  };

  return (
    <MyPageWrapper>
      <UserInfoWrapper>
        <div className="title">
          <Member />
          <span>회원정보</span>
        </div>
        <MemberCard nickname={memberData?.nickname || '닉네임'} email={memberData?.email || '이메일'} />
      </UserInfoWrapper>
      <MyStudyWrapper>
        <MyStudyTitleWrapper>
          <StudyInfo width={40} height={40} />
          <span className="title">스따-디</span>
        </MyStudyTitleWrapper>
        <StudyChipsWrapper>
          <Chip chipState="Apply">참여 중인 스터디</Chip>
          <Chip chipState="Completed">내가 지원한 스터디</Chip>
          <Chip chipState="Completed">진행 완료된 스터디</Chip>
        </StudyChipsWrapper>

        <MyStudyCard title={'스터디 이름'} skillPosition="백엔드" period="03.03~04.04" memberCnt={6} isCreator />
        <MyStudyCard title={'스터디 이름'} />
        <MyStudyCard title={'스터디 이름'} />
        <MyStudyCard title={'스터디 이름'} />
      </MyStudyWrapper>

      <TemporarySavedStudyWrapper>
        <div className="title">
          <BlankSquare width="40px" height="40px" />
          <span>임시 저장된 글</span>
        </div>
        <StudyChipsWrapper>
          <Chip chipState="Apply">스터디 생성</Chip>
          <Chip chipState="Completed">스터디 모집공고</Chip>
        </StudyChipsWrapper>
        <TemporarySavedStudyCard studyId={1} title={'모집공고 1'} />
        <TemporarySavedStudyCard title={'스터디 이름'} />
      </TemporarySavedStudyWrapper>

      <MypageButtonsWrapper>
        <Button>회원 정보 수정</Button>
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

const StudyChipsWrapper = styled.div`
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
