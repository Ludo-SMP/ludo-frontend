import styled from 'styled-components';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { MemberType } from '@/Types/study';
import { Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import Chip from '@/Components/Common/Chip';
import { useNavigate, useParams } from 'react-router-dom';
import StudyInfoSection from './StudyInfoSection';
import MemberSection from './MemberSection';

export const StudyDetail = () => {
  const studyId = Number(useParams().studyId);
  const navigate = useNavigate();

  const memberProfileMocks: MemberType[] = [
    { nickname: '포키', email: 'aaa@bb.net', teamPosition: '팀장', skillPosition: '디자이너' },
    { nickname: '휴', email: 'aaa@bb.net', teamPosition: '팀원', skillPosition: 'BE' },
    { nickname: '아카', email: 'aaa@bb.net', teamPosition: '팀원', skillPosition: 'BE' },
    { nickname: '빽', email: 'aaa@bb.net', teamPosition: '팀원', skillPosition: 'BE' },
    { nickname: '타로', email: 'aaa@bb.net', teamPosition: '팀원', skillPosition: 'FE' },
    { nickname: 'Hyun', email: 'aaa@bb.net', teamPosition: '팀원', skillPosition: 'FE' },
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
