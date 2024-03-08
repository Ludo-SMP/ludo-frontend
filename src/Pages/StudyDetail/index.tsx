import styled from 'styled-components';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useNavigate, useParams } from 'react-router-dom';
import StudyInfoSection from './StudyInfoSection';
import MemberSection from './MemberSection';
import { useStudyDetail } from '@/Apis/study';
import { getDday, getPeriod } from '@/Utils/date';
import { useUserStore } from '@/Store/user';

export const StudyDetailPage = () => {
  const { user } = useUserStore();
  const studyId = Number(useParams().studyId);
  const { data: studyDetail, isLoading } = useStudyDetail(studyId);
  const navigate = useNavigate();
  const study = studyDetail?.study;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <StudyDetailWrapper>
      <StudyDetailTitleWrapper>
        <StudyTitleWrapper>
          <StudyInfo width="48" height="48" />
          <span className="title">{study?.title}</span>
          <div className="study__tokens">
            {study?.status !== 'COMPLETED' && <StudyToken status={'PARTICIPATED'} />}
            <StudyToken status={study?.status} />
          </div>
        </StudyTitleWrapper>

        <Button onClick={() => navigate(`/studies/${studyId}/applicants`)}>
          <span>스터디 지원자가 있어요!</span>
          <Right />
        </Button>
      </StudyDetailTitleWrapper>
      <StudyInfoSection
        category={study?.category.name}
        progressMethod={study?.way}
        platform={study?.platform}
        period={getPeriod(study?.startDateTime, study?.endDateTime)}
        dDay={getDday(study?.startDateTime, study?.endDateTime)}
      />
      <RowDivider rowHeight={16} />
      <MemberSection memberLimit={study?.participantsLimit} members={study?.participants} />
      <StudyButtonsWrapper>
        {user?.id === study?.owner.id && study?.participants.length === 0 && (
          <Button size="fullWidth" onClick={() => {}}>
            스터디 삭제하기
          </Button>
        )}
        {study.participants.length && (
          <Button size="fullWidth" onClick={() => {}}>
            스터디 탈퇴하기
          </Button>
        )}
        {user?.id === study.owner.id && study.participants.length && status === 'RECRUITED' && (
          <Button scheme="secondary" size="fullWidth" onClick={() => {}}>
            스터디원 모집 마감하기
          </Button>
        )}
        {user?.id === study.owner.id && study.participants.length && status === 'PROGRESS' && (
          <Button scheme="secondary" size="fullWidth" onClick={() => {}}>
            스터디 수정하기
          </Button>
        )}
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
  margin-bottom: 80px;
  gap: 40px;
`;

const StudyDetailTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.black3};
  button {
    border: none;
    &:hover {
      border: none;
    }
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
    gap: 8px;
  }
`;

const StudyButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

export default StudyDetailPage;
