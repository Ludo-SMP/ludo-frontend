import styled from 'styled-components';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useNavigate, useParams } from 'react-router-dom';
import StudyInfoSection from './StudyInfoSection';
import MemberSection from './MemberSection';
import { useStudyDetail } from '@/Apis/study';
import { dateFormatter } from '@/Utils/date';
import { useUserStore } from '@/Store/user';

export const StudyDetail = () => {
  const { user } = useUserStore();
  const studyId = Number(useParams().studyId);
  const navigate = useNavigate();
  const { data: studyDetail, isLoading } = useStudyDetail(studyId);
  const ownerId = studyDetail?.members.filter((member) => member.role === '팀장')[0].id;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <StudyDetailWrapper>
      <StudyDetailTitleWrapper>
        <StudyTitleWrapper>
          <StudyInfo width="48" height="48" />
          <span className="title">{studyDetail?.studyInfo.title}</span>
          <div className="study__tokens">
            <StudyToken tokenState="InProgress">참여 중인 스터디</StudyToken>
            <StudyToken tokenState="InProgress">모집중</StudyToken>
          </div>
        </StudyTitleWrapper>

        <Button
          primary="default"
          onClick={() =>
            navigate(`/studies/${studyId}/applicants`, {
              state: {
                title: studyDetail?.studyInfo.title,
                memberCnt: studyDetail?.memberCnt,
                memberLimit: studyDetail?.memberLimit,
              },
            })
          }
        >
          <span>스터디 지원자가 있어요!</span>
          <Right />
        </Button>
      </StudyDetailTitleWrapper>
      <StudyInfoSection
        category={studyDetail?.studyInfo.category || '코딩 테스트'}
        progressMethod={studyDetail?.studyInfo.progressMethod || '진행방식'}
        platform={'진행 플랫폼'}
        period={
          studyDetail?.studyInfo
            ? `${dateFormatter(studyDetail?.studyInfo.startDate)} ~ ${dateFormatter(studyDetail?.studyInfo.endDate)}`
            : '진행기간'
        }
        dDay={studyDetail?.studyInfo.dDay || 9999}
      />
      <RowDivider rowHeight={16} />
      <MemberSection memberLimit={studyDetail?.memberLimit} members={studyDetail?.members} />
      <StudyButtonsWrapper>
        {user?.id === ownerId && <Button>모집 마감하기</Button>}
        <Button>스터디 탈퇴하기</Button>
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

  .study__tokens {
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
