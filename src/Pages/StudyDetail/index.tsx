import styled from 'styled-components';
import { BlankSquare } from '../../Components/Common/BlankSquare';
import { InfoField } from '../../Components/Common/InfoField';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import MemberProfile from '../../Components/MemberProfile';
import { Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import Chip from '@/Components/Common/Chip';
import { useNavigate, useParams } from 'react-router-dom';
import StudyInfoSection from './StudyInfoSection';

export const StudyDetail = () => {
  const studyId = Number(useParams().studyId);
  const navigate = useNavigate();

  return (
    <StudyDetailWrapper>
      <StudyDetailTitleWrapper>
        <StudyTitleWrapper>
          <StudyInfo width="48" height="48" />
          <span className="title">스터디 제목</span>
          <div className="chips">
            <Chip chipState="InProgress">참여 중인 스터디</Chip>
            <Chip chipState="InProgress">모집중</Chip>
          </div>
        </StudyTitleWrapper>
        <Button primary="default" onClick={() => navigate(`/studies/${studyId}/applicants`)}>
          <span>스터디 지원자가 있어요!</span>
          <Right />
        </Button>
      </StudyDetailTitleWrapper>
      <StudyInfoSection
        category={'코딩 테스트'}
        activity={'오프라인'}
        platform={'게더'}
        period={'03.03~04.04'}
        remainingPeriod={30}
      />
      <RowDivider />
      <div className="study__member__info">
        <div className="title__section">
          <BlankSquare width="50px" height="50px" />
          <div className="title">구성원</div>
        </div>
        <div className="member__info">
          <div className="member__headcount">
            <InfoField title="현재 인원수" content="5명" />
            <InfoField title="목표 인원수" content="7명" />
          </div>
          <div className="member__profiles">
            <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="FE" />
            <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀장" skillPosition="BE" />
            <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
            <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
            <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
            <MemberProfile nickName="Hyun" email="ksci195@hanmail.net" teamPosition="팀원" skillPosition="디자이너" />
          </div>
        </div>
      </div>

      <StudyButtonsWrapper>
        <Button>스터디 탈퇴하기</Button>
        <Button>모집 마감하기</Button>
      </StudyButtonsWrapper>
    </StudyDetailWrapper>
  );
};

const StudyDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  gap: 40px;
`;

const StudyDetailTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: calc((${({ theme }) => theme.font.small} + ${({ theme }) => theme.font.medium}) / 2);
  }
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  margin-bottom: 20px;

  .title__section {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;

    .title {
      color: ${(props) => props.theme.color.black4};
      font-size: ${(props) => props.theme.font.xlarge};
      font-weight: 800;
      line-height: 50px;
    }
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;

    .detail__info {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      gap: 20px;
      align-self: stretch;
      flex-wrap: wrap;
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;

    .member__info {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      gap: 20px;
      align-self: stretch;
      flex-wrap: wrap;
    }

    .member__headcount {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      align-self: stretch;
      flex-wrap: wrap;
    }

    .member__profiles {
      display: flex;
      align-items: flex-start;
      gap: 24px;
    }
  }
`;

const StudyButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  & > button {
    display: flex;
    padding: 0 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 8px;
    background: ${(props) => props.theme.color.gray1};
    color: var(--Palette-base-black-alpha-65, rgba(0, 0, 0, 0.65));
    text-align: center;
    font-size: ${(props) => props.theme.font.xsmall};
    font-weight: 600;
    line-height: 44px;
  }
`;
