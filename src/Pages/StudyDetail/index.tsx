import styled from 'styled-components';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { Right, StudyInfo } from '@/Assets';
import Button from '@/Components/Common/Button';
import StudyToken from '@/Components/Common/StudyToken';
import { useNavigate, useParams } from 'react-router-dom';
import StudyInfoSection from './StudyInfoSection';
import MemberSection from './MemberSection';
import { useStudyDetail } from '@/Apis/study';
import { dateFormatter, getDday } from '@/Utils/date';
import { useUserStore } from '@/Store/user';

export const StudyDetail = () => {
  const { user } = useUserStore();
  const studyId = Number(useParams().studyId);
  const navigate = useNavigate();
  const { data: studyDetail, isLoading } = useStudyDetail(studyId);
  console.log(studyDetail?.applicants);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <StudyDetailWrapper>
      <StudyDetailTitleWrapper>
        <StudyTitleWrapper>
          <StudyInfo width="48" height="48" />
          <span className="title">{studyDetail?.title}</span>
          <div className="study__tokens">
            {studyDetail?.status !== '완료됨' && (
              <StudyToken status={studyDetail?.status} tokenType={'MEMBER'}>
                참여중인 스터디
              </StudyToken>
            )}
            <StudyToken status={studyDetail?.status} tokenType={'STUDY'}>
              {studyDetail?.status}
            </StudyToken>
          </div>
        </StudyTitleWrapper>

        <Button
          onClick={() =>
            navigate(`/studies/${studyId}/applicants`, {
              state: {
                title: studyDetail?.title,
                status: studyDetail?.status,
                memberCnt: studyDetail?.memberCnt,
                memberLimit: studyDetail?.memberLimit,
                ownerId: studyDetail?.owner.id,
                applicants: studyDetail?.applicants,
              },
            })
          }
        >
          <span>스터디 지원자가 있어요!</span>
          <Right />
        </Button>
      </StudyDetailTitleWrapper>
      <StudyInfoSection
        category={studyDetail?.category.name || '카테고리'}
        progressMethod={studyDetail?.progressMethod || '미정'}
        platform={studyDetail?.progressMethod || '진행 플랫폼'}
        period={
          studyDetail ? `${dateFormatter(studyDetail?.startDate)} ~ ${dateFormatter(studyDetail?.endDate)}` : '진행기간'
        }
        dDay={getDday(studyDetail?.startDate, studyDetail.endDate) || 9999}
      />
      <RowDivider rowHeight={16} />
      <MemberSection memberLimit={studyDetail?.memberLimit} members={studyDetail?.members} />
      <StudyButtonsWrapper>
        {user?.id === studyDetail?.owner.id && studyDetail.members.length === 0 && (
          <Button size="fullWidth" onClick={() => {}}>
            스터디 삭제하기
          </Button>
        )}
        {studyDetail.members.length && (
          <Button size="fullWidth" onClick={() => {}}>
            스터디 탈퇴하기
          </Button>
        )}
        {user?.id === studyDetail?.owner.id && studyDetail.members.length && studyDetail.status === '모집 중' && (
          <Button scheme="secondary" size="fullWidth" onClick={() => {}}>
            스터디원 모집 마감하기
          </Button>
        )}
        {user?.id === studyDetail?.owner.id && studyDetail.members.length && studyDetail.status === '진행 중' && (
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
