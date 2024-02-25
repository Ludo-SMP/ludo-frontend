import styled from 'styled-components';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { MemberProfileProps } from '../../Components/MemberProfile';
import { Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import Chip from '@/Components/Common/Chip';
import { useNavigate, useParams } from 'react-router-dom';
import StudyInfoSection from './StudyInfoSection';
import MemberSection from './MemberSection';

export const StudyDetail = () => {
  const studyId = Number(useParams().studyId);
  const navigate = useNavigate();
  const memberProfileMocks: MemberProfileProps[] = [
    { nickName: 'Hyun', email: 'ksci195@hanmail.net', teamPosition: '팀장', skillPosition: '디자이너' },
    { nickName: 'Hyun', email: 'ksci195@hanmail.net', teamPosition: '팀원', skillPosition: 'FE' },
    { nickName: 'Hyun', email: 'ksci195@hanmail.net', teamPosition: '팀원', skillPosition: 'BE' },
    { nickName: 'Hyun', email: 'ksci195@hanmail.net', teamPosition: '팀원', skillPosition: 'FE' },
    { nickName: 'Hyun', email: 'ksci195@hanmail.net', teamPosition: '팀원', skillPosition: 'FE' },
  ];

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
      <RowDivider rowHeight={16} />
      <MemberSection goalMemberCnt={7} memberProfiles={[...memberProfileMocks]} />
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
<<<<<<< HEAD
  width: 1920px;
  padding: 40px 348px 80px 348px;
  align-items: flex-start;
  gap: 40px;
`;

=======
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
  color: ${({ theme }) => theme.color.black3};
  button {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: calc((${({ theme }) => theme.font.small} + ${({ theme }) => theme.font.medium}) / 2);
  }
`;

>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
const StudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
<<<<<<< HEAD
  align-self: stretch;

  & > div:first-child {
    display: flex;
    width: 200px;
    height: 60px;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => props.theme.color.black4};
    font-size: ${(props) => props.theme.font.xxxxlarge};
    font-weight: 800;
    line-height: 60px;
  }

  & > div:last-child {
    display: flex;
    gap: 24px;
  }

  .chip {
    display: flex;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 24px;
    background: ${(props) => props.theme.color.gray1};
    background-blend-mode: multiply;
    font-size: ${(props) => props.theme.font.small};
    font-weight: 500;
    line-height: 30px;
    color: ${(props) => props.theme.color.black2};
  }
`;

const StudyRecruitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 20px;

  & > div:first-child {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.color.black4};
    font-size: ${(props) => props.theme.font.xlarge};
    font-weight: 800;
    line-height: 50px;
  }

  & > :last-child {
    display: flex;
    width: 288px;
    padding: 0 12px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: ${(props) => props.theme.color.gray1};
    border-radius: 8px;

    .button__text {
      color: ${(props) => props.theme.color.black3};
      text-align: center;
      font-size: ${(props) => props.theme.font.xsmall};
      font-weight: 600;
      line-height: 44px;
    }
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
=======
  color: ${(props) => props.theme.color.black4};
  font-size: ${(props) => props.theme.font.xxxxlarge};
  font-weight: 800;

  .chips {
    display: flex;
    gap: 24px;
  }
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
