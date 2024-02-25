import styled from 'styled-components';
import { InfoField } from '../../Components/Common/InfoField';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { ColumnDivider } from '../../Components/Common/Divider/ColumnDivider';
<<<<<<< HEAD
import { BlankSquare } from '../../Components/Common/BlankSquare';
import ApplyButton from '../../Components/Button/ApplyButton';

export const RecruitmentDetail = () => {
  return (
    <RecruitmentDetailWrapper>
      <StudyTitleWrapper>
        <div className="title">스터디 제목</div>
      </StudyTitleWrapper>
      <StudyInfoWrapper>
        <div className="recruitment__status">
          <div className="creator">닉네임</div>
          <ColumnDivider />
          <div className="edit__info">
            <div className="createdAt">작성 날짜</div>
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
              <InfoField title="모집 인원" content="모집 인원" flexDirection="column" gap="4px" width="392px" />
              <InfoField title="모집 마감일" content="모집 마감일" flexDirection="column" gap="4px" width="392px" />
              <InfoField title="포지션" content="포지션" flexDirection="column" gap="4px" width="392px" />
              <InfoField title="기술 스택" content="기술 스택" flexDirection="column" gap="4px" width="392px" />
              <InfoField title="연락 방법" content="연락 방법" flexDirection="column" gap="4px" width="392px" />
              <InfoField title="연결 url" content="연결 url" flexDirection="column" gap="4px" width="392px" />
            </div>
          </div>
          <RowDivider />
          <div className="study__detail">
            <div className="title__section">
              <BlankSquare width="50px" height="50px" />
              <div className="title">스터디 진행 안내</div>
            </div>
            <div className="detail__info">
              <InfoField title="진행 방식" content="진행 방식" flexDirection="column" gap="4px" width="392px" />
              <InfoField title="진행 플랫폼" content="진행 플랫폼" flexDirection="column" gap="4px" width="392px" />
              <InfoField title="진행 기간" content="진행 기간" flexDirection="column" gap="4px" width="392px" />
            </div>
          </div>
          <RowDivider />
          <div className="study__detail">
            <div className="title__section">
              <BlankSquare width="50px" height="50px" />
              <div className="title">스터디 기본 구성 안내</div>
            </div>
            <div className="detail__info">
              <InfoField title="스터디 제목" content="스터디 제목" flexDirection="column" gap="4px" width="100%" />
              <InfoField title="카테고리" content="카테고리" flexDirection="column" gap="4px" width="600px" />
              <InfoField
                title="스터디 최대 인원"
                content="스터디 최대 인원"
                flexDirection="column"
                gap="4px"
                width="600px"
              />
            </div>
          </div>
          <RowDivider />
          <div className="study__detail">
            <div className="detail__info">
              <InfoField title="상세내용" content="상세내용" flexDirection="column" gap="4px" width="100%" />
            </div>
          </div>
        </div>
      </StudyInfoWrapper>
      <StudyButtonsWrapper>
        <ApplyButton>스터디 탈퇴하기</ApplyButton>
        <ApplyButton>모집 마감하기</ApplyButton>
=======
// import { useRecruitmentDetail } from '@/Apis/recruitment';
import { useParams } from 'react-router-dom';
import { dateFormatter } from '@/Utils/date';
import { convertRecruitmentDetailRawDataToRecruitmentDetail } from '@/Utils/propertyConverter';

import RecruitmentInfoSection from './RecruitmentInfoSection';
import StudyProgressInfoSection from './StudyProgessInfoSection';
import StudyBasicInfoSection from './StudyBasicInfoSection';
import Button from '@/Components/Common/Button';
import { applyStudy } from '@/Apis/study';
import { recruitmentDetailMockDataById } from '@/Shared/dummy';

const RecruitmentDetail = () => {
  const studyId = Number(useParams().studyId);
  const isLoading = false;
  // const { data, isLoading } = useRecruitmentDetail(studyId);
  // const recruitmentDetail = isLoading ? null : convertRecruitmentDetailRawDataToRecruitmentDetail(data.data);
  const recruitmentDetail = convertRecruitmentDetailRawDataToRecruitmentDetail(recruitmentDetailMockDataById(studyId));

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <RecruitmentDetailWrapper>
      <RecruitmentTitleWrapper>
        <div className="title">{recruitmentDetail?.recruitmentTitle}</div>
      </RecruitmentTitleWrapper>
      <RecruitmentInfoWrapper>
        <div className="recruitment__status">
          <div className="creator">{recruitmentDetail?.creator}</div>
          <ColumnDivider />
          <div className="edit__info">
            <div className="createdAt">{recruitmentDetail?.createdAt}</div>
            <div className="edit__status">수정됨</div>
          </div>
        </div>
        <div className="recruitment__details">
          <RecruitmentInfoSection
            applicantCnt={recruitmentDetail?.applicantCnt}
            endDate={recruitmentDetail?.recruitmentEndDate}
            positions={recruitmentDetail?.positions.join(', ')}
            stacks={recruitmentDetail?.stacks.join(', ')}
            contact={recruitmentDetail?.contact}
            platformUrl={recruitmentDetail?.platformUrl}
          />
          <RowDivider rowHeight={16} />
          <StudyProgressInfoSection
            method={recruitmentDetail?.progressMethod}
            platform={recruitmentDetail?.platform}
            period={dateFormatter(recruitmentDetail?.startDate) + ' ~ ' + dateFormatter(recruitmentDetail?.endDate)}
          />
          <RowDivider rowHeight={16} />
          <StudyBasicInfoSection
            studyTitle={recruitmentDetail?.studyTitle}
            category={recruitmentDetail?.category}
            memberCnt={recruitmentDetail?.memberCnt}
          />
          <RowDivider />
          <div className="study__detail">
            <InfoField
              title="상세내용"
              content={recruitmentDetail?.content || '상세내용'}
              flexDirection="column"
              width="100%"
            />
          </div>
        </div>
      </RecruitmentInfoWrapper>
      <StudyButtonsWrapper>
        <Button onClick={() => applyStudy(studyId, 1)}>스터디 지원하기</Button>
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
      </StudyButtonsWrapper>
    </RecruitmentDetailWrapper>
  );
};

const RecruitmentDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  width: 1920px;
  padding: 40px 348px 80px 348px;
  align-items: flex-start;
  gap: 40px;
`;

const StudyTitleWrapper = styled.div`
=======
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  gap: 40px;
`;

const RecruitmentTitleWrapper = styled.div`
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
<<<<<<< HEAD

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
=======
  color: ${(props) => props.theme.color.black5};
  font-family: Pretendard;
  font-size: ${(props) => props.theme.font.xxxxlarge};
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
`;

const RecruitmentInfoWrapper = styled.div`
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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

<<<<<<< HEAD
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
=======
  .recruitment__details {
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
<<<<<<< HEAD

  .detail__info {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    align-self: stretch;
    flex-wrap: wrap;
  }
=======
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
`;
const StudyButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  & > button {
    display: flex;
<<<<<<< HEAD
    padding: 0 12px;
=======
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
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
<<<<<<< HEAD
=======

export default RecruitmentDetail;
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
