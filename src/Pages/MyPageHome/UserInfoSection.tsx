import { ProfileSection } from '@/Components/ProfileSection/ProfileSection';
import { StudyProgress } from '@/Components/StudyProgress/StudyProgress';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import { CircularRate } from '@/Components/CircularRate';
import { MyPageInfo, Trust, User } from '@/Types/study';
import styled from 'styled-components';
import { RightArrow } from '@/Assets/RightArrow';
import { MemberImage } from '@/Assets';
import { media } from '@/Styles/theme';
import Button from '@/Components/Common/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/Constants/route';

interface UserInfoSectionProps {
  myPageInfo: MyPageInfo;
}

const UserInfoSection = ({ myPageInfo }: UserInfoSectionProps) => {
  const user: User = myPageInfo?.user;
  const trust: Trust = myPageInfo?.trust;
  const navigate = useNavigate();

  return (
    <UserInfoSectionBox>
      <div className="title">
        <MemberImage width={32} height={32} />
        <h5>회원정보</h5>
      </div>
      <UserInfoBox>
        <ProfileSection nickname={user?.nickname || '닉네임'} email={user?.email || '이메일'} />
        <UserInfoRows>
          <UserInfoRow>
            <InfoItem>
              지금까지 이만큼
              <br /> 달려왔어요!
            </InfoItem>
            <InfoItem>
              {/* 전체 스터디 = 진행한 스터디 + 탈퇴한 스터디 */}
              <StudyProgress
                totalStudy={(trust?.finishStudy ?? 0) + (trust?.leftStudyCount ?? 0)}
                completedStudy={trust?.perfectStudy}
              />
              <InfoText>
                <span className="info__label">누적 팀원 수</span>
                <span className="info__description">{trust?.accumulatedTeamMembers || 0}명</span>
              </InfoText>
              <InfoText>
                <span className="info__label">평균 출석률</span>
                <span className="info__description">{trust?.averageAttendanceRate.toFixed(2) || 0}%</span>
              </InfoText>
            </InfoItem>
          </UserInfoRow>
          <RowDivider margin={24} />
          <UserInfoRow>
            <InfoItem>
              함께했던 팀원들이
              <br />
              이렇게 얘기했어요 :)
              <Button scheme="text" onClick={() => navigate(ROUTES.MYPAGE.REVIEWS)}>
                <RightArrow />
              </Button>
            </InfoItem>
            <InfoItem>
              <InfoItemBox>
                <CircularRate percentage={trust?.activeness || 0} label="적극성" />
                <CircularRate percentage={trust?.professionalism || 0} label="전문성" />
                <CircularRate percentage={trust?.communication || 0} label="소통력" />
                <Button scheme="text" onClick={() => navigate(ROUTES.MYPAGE.REVIEWS)}>
                  <RightArrow />
                </Button>
              </InfoItemBox>
              {trust?.together >= 80 && (
                <InfoDesc>
                  다시 <em>함께 하고 싶어하는</em> 사용자예요!
                </InfoDesc>
              )}
              {trust?.recommend >= 80 && (
                <InfoDesc>
                  주변 사람에게 <em>추천하고 싶은</em> 사용자예요!
                </InfoDesc>
              )}
            </InfoItem>
          </UserInfoRow>
        </UserInfoRows>
      </UserInfoBox>
    </UserInfoSectionBox>
  );
};

export { UserInfoSection };

const UserInfoSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  ${media.custom(1100)} {
    width: calc(100vw - 196px);
  }

  ${media.custom(800)} {
    width: 100%;
  }
`;

const UserInfoBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 32px 40px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;

  ${media.custom(1100)} {
    flex-wrap: wrap;
  }
`;

const UserInfoRows = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserInfoRow = styled.div`
  display: flex;
  height: 100%;
  gap: 24px;

  & > div:first-child {
    display: flex;
    width: 160px;
    font-family: 'Pretendard600';
    font-weight: 600;
    line-height: 32px;
  }

  & > div:nth-child(2) {
    width: 60%;
  }

  ${media.custom(1100)} {
    width: 100%;
    justify-content: flex-start;
  }

  ${media.custom(800)} {
    flex-direction: column;

    & > div:first-child {
      width: 270px;
      justify-content: space-between;
      font-family: 'Pretendard600';
      font-weight: 600;
      line-height: 32px;
    }

    & > div:nth-child(2) {
      width: 100%;
    }
  }

  ${media.custom(500)} {
    & > div:first-child {
      width: 100%;
    }
  }
`;

const InfoItemBox = styled.div`
  display: flex;
  gap: 12px;

  ${media.custom(800)} {
    & > button {
      display: none;
    }
  }
`;

const InfoItem = styled.div`
  & > div:first-child {
    margin-bottom: 16px;
  }

  button {
    width: 40px;
    height: 40px;
    padding: 8px;
  }

  & > button {
    display: none;
    ${media.custom(800)} {
      display: flex;
    }
  }
`;

const InfoDesc = styled.p`
  ${({ theme }) => theme.typo.InputField};
  color: ${({ theme }) => theme.color.black2};
  font-family: 'Pretendard400';

  em {
    color: ${({ theme }) => theme.color.black4};
  }
  & + p {
    margin-top: 4px;
  }
`;

const InfoText = styled.div`
  font-family: 'Pretendard500';
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  .info__label {
    color: ${({ theme }) => theme.color.black5};
    margin-right: 20px;
  }
  .info__description {
    color: ${({ theme }) => theme.color.black2};
  }

  & + div {
    margin-top: 8px;
  }
`;
