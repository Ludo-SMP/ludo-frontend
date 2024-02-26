import styled from 'styled-components';
import { StudyInfo } from '@/Assets';
import Chip from '@/Components/Common/Chip';
import { InfoField } from '@/Components/Common/InfoField';
import ApplicantCard from '@/Components/ApplicantCard';
import { MemberType } from '@/Types/study';
import Button from '@/Components/Common/Button';

const Applicants = () => {
  const studyTitle = '스터디 제목';

  const recruitmentUsersData: MemberType[] = [
    { nickname: '포키', email: 'aaa1@bb.net', teamPosition: '팀장', skillPosition: '디자이너' },
    { nickname: '휴', email: 'aaa2@bb.net', teamPosition: '팀원', skillPosition: '백엔드' },
    { nickname: '아카', email: 'aaa3@bb.net', teamPosition: '팀원', skillPosition: '백엔드' },
    { nickname: '빽', email: 'aaa4@bb.net', teamPosition: '팀원', skillPosition: '백엔드' },
    { nickname: '타로', email: 'aaa5@bb.net', teamPosition: '팀원', skillPosition: '프론트엔드' },
    { nickname: 'Hyun', email: 'aaa6@bb.net', teamPosition: '팀원', skillPosition: '프론트엔드' },
  ];

  return (
    <ApplicantsWrapper>
      <ApplicantsTitleWrapper>스터디 지원자를 확인해주세요!</ApplicantsTitleWrapper>
      <StudyDetailWrapper>
        <StudyTitleWrapper>
          <StudyInfo width="48" height="48" />
          <span className="title">{studyTitle}</span>
          <div className="chips">
            <Chip chipState="InProgress">참여 중인 스터디</Chip>
            <Chip chipState="InProgress">모집중</Chip>
          </div>
        </StudyTitleWrapper>
        <StudyInfoWrapper>
          <InfoField title="현재 인원수" content={6} />
          <InfoField title="목표 인원수" content={7} />
        </StudyInfoWrapper>
        <ApplicantsInfoWrapper>
          {recruitmentUsersData.map((recruitmentUser) => (
            <ApplicantCard {...recruitmentUser} title={studyTitle} key={recruitmentUser?.email} />
          ))}
        </ApplicantsInfoWrapper>
      </StudyDetailWrapper>
      <ApplicantButtonsWrapper>
        <Button>모집 마감하기</Button>
      </ApplicantButtonsWrapper>
    </ApplicantsWrapper>
  );
};

const ApplicantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 40px auto 80px auto;
  gap: 40px;
`;

const ApplicantsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  align-self: stretch;
  color: ${({ theme }) => theme.color.black4};
  font-family: Pretendard;
  font-size: ${({ theme }) => theme.font.xxxxlarge};
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
`;

const StudyDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const StudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: ${(props) => props.theme.color.black4};
  font-size: ${(props) => props.theme.font.xxxxlarge};
  font-weight: 800;

  .chips {
    display: flex;
    gap: 24px;
  }
`;

const StudyInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  grid-gap: 24px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const ApplicantsInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const ApplicantButtonsWrapper = styled.div`
  button {
    display: flex;
    width: 100%;
    height: 48px;
    padding: var(--Padding-btn-lg-vertical, 0px) var(--Spacing-16, 16px);
    justify-content: center;
    align-items: center;
    gap: var(--Spacing-8, 8px);
    align-self: stretch;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 1px solid ${({ theme }) => theme.color.purple2};
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  }
`;

export default Applicants;
