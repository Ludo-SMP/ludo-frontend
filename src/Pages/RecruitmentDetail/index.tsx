import styled from 'styled-components';
import { InfoField } from '../../Components/Common/InfoField';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { ColumnDivider } from '../../Components/Common/Divider/ColumnDivider';
import { BlankSquare } from '../../Components/Common/BlankSquare';
import ApplyButton from '../../Components/Button/ApplyButton';
import { useRecruitmentDetail } from '@/Apis/study';
import { useParams } from 'react-router-dom';
import { dateFormatter } from '@/Utils/date';

const RecruitmentDetail = () => {
  const studyId = Number(useParams().studyId);
  const { data, isLoading } = useRecruitmentDetail(studyId);
  const recruitmentDetail = isLoading ? null : data.data;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <RecruitmentDetailWrapper>
      <StudyTitleWrapper>
        <div className="title">{recruitmentDetail.title}</div>
      </StudyTitleWrapper>
      <StudyInfoWrapper>
        <div className="recruitment__status">
          <div className="creator">{recruitmentDetail.ownerNickname}</div>
          <ColumnDivider />
          <div className="edit__info">
            <div className="createdAt">{recruitmentDetail.createdDateTime}</div>
            <div className="edit__status">수정됨</div>
          </div>
        </div>
        <RowDivider />
        <div className="study__details">
          <div className="study__detail">
            <div className="title__section">
              <BlankSquare width="50px" height="50px" />
              <div className="title">스터디 모집 안내</div>
            </div>
            <div className="detail__info">
              <InfoField
                title="모집 인원"
                content={recruitmentDetail.applicantCount}
                flexDirection="column"
                gap="4px"
                width="392px"
              />
              <InfoField
                title="모집 마감일"
                content={recruitmentDetail.recruitmentEndDateTime}
                flexDirection="column"
                gap="4px"
                width="392px"
              />
              <InfoField
                title="포지션"
                content={recruitmentDetail.positions}
                flexDirection="column"
                gap="4px"
                width="392px"
              />
              <InfoField
                title="기술 스택"
                content={recruitmentDetail.stacks}
                flexDirection="column"
                gap="4px"
                width="392px"
              />
              <InfoField
                title="연락 방법"
                content={recruitmentDetail.contact}
                flexDirection="column"
                gap="4px"
                width="392px"
              />
              <InfoField
                title="연결 url"
                content={recruitmentDetail.platformUrl}
                flexDirection="column"
                gap="4px"
                width="392px"
              />
            </div>
          </div>
          <RowDivider />
          <div className="study__detail">
            <div className="title__section">
              <BlankSquare width="50px" height="50px" />
              <div className="title">스터디 진행 안내</div>
            </div>
            <div className="detail__info">
              <InfoField
                title="진행 방식"
                content={recruitmentDetail.way}
                flexDirection="column"
                gap="4px"
                width="392px"
              />
              <InfoField
                title="진행 플랫폼"
                content={recruitmentDetail.platform}
                flexDirection="column"
                gap="4px"
                width="392px"
              />
              <InfoField
                title="진행 기간"
                content={
                  dateFormatter(recruitmentDetail.startDateTime) + ' ~ ' + dateFormatter(recruitmentDetail.endDateTime)
                }
                flexDirection="column"
                gap="4px"
                width="392px"
              />
            </div>
          </div>
          <RowDivider />
          <div className="study__detail">
            <div className="title__section">
              <BlankSquare width="50px" height="50px" />
              <div className="title">스터디 기본 구성 안내</div>
            </div>
            <div className="detail__info">
              <InfoField
                title="스터디 제목"
                content={recruitmentDetail.title}
                flexDirection="column"
                gap="4px"
                width="100%"
              />
              <InfoField
                title="카테고리"
                content={recruitmentDetail.category}
                flexDirection="column"
                gap="4px"
                width="600px"
              />
              <InfoField
                title="스터디 최대 인원"
                content={recruitmentDetail.maxMemberNum}
                flexDirection="column"
                gap="4px"
                width="600px"
              />
            </div>
          </div>
          <RowDivider />
          <div className="study__detail">
            <div className="detail__info">
              <InfoField
                title="상세내용"
                content={recruitmentDetail.content}
                flexDirection="column"
                gap="4px"
                width="100%"
              />
            </div>
          </div>
        </div>
      </StudyInfoWrapper>
      <StudyButtonsWrapper>
        <ApplyButton>스터디 탈퇴하기</ApplyButton>
        <ApplyButton>모집 마감하기</ApplyButton>
      </StudyButtonsWrapper>
    </RecruitmentDetailWrapper>
  );
};

const RecruitmentDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  padding: 40px 348px 80px 348px;
  align-items: flex-start;
  gap: 40px;
`;

const StudyTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
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
`;

const StudyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  padding-bottom: 20px;

  .recruitment__status {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    font-size: 18px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.2px;

    .creator {
      color: ${(props) => props.theme.color.black4};
    }

    .edit__info {
      display: flex;
      gap: 12px;
      color: ${(props) => props.theme.color.black2};
    }
  }

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

  .study__details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .study__detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .detail__info {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
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

export default RecruitmentDetail;
