import styled from 'styled-components';
import { InfoField } from '../../Components/Common/InfoField';
import { RowDivider } from '../../Components/Common/Divider/RowDivider';
import { ColumnDivider } from '../../Components/Common/Divider/ColumnDivider';
import { useRecruitmentDetail } from '@/Apis/recruitment';
import { useNavigate, useParams } from 'react-router-dom';
import { dateFormatter } from '@/Utils/date';
// import { convertRecruitmentDetailRawDataToRecruitmentDetail } from '@/Utils/propertyConverter';
import RecruitmentInfoSection from './RecruitmentInfoSection';
import StudyProgressInfoSection from './StudyProgessInfoSection';
import StudyBasicInfoSection from './StudyBasicInfoSection';
import Button from '@/Components/Common/Button';
// import { recruitmentDetailMockDataById } from '@/Shared/dummy';
import Modal from '@/Components/Common/Modal';
import { APPLY } from '@/Constants/messages';
import { useLoginStore } from '@/Store/auth';
import { ROUTER_PATH } from '@/Constants/Router_Path';
import ApplyModal from '@/Components/Modal/ApplyModal';
import { useModalStore } from '@/Store/modal';

const RecruitmentDetail = () => {
  const recruitmentId = Number(useParams().studyId);
  const { isModalOpen, openModal } = useModalStore();
  const { isLoggedIn } = useLoginStore();
  const navigate = useNavigate();
  const studyId = 1;
  const { data, isLoading } = useRecruitmentDetail(recruitmentId);
  const recruitmentDetail = isLoading ? null : data;
  // const recruitmentDetail = convertRecruitmentDetailRawDataToRecruitmentDetail(
  //   recruitmentDetailMockDataById(recruitmentId),
  // );

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
        <Button onClick={openModal}>스터디 지원하기</Button>
      </StudyButtonsWrapper>
      {!isLoggedIn && isModalOpen && (
        <Modal
          title={APPLY.LOGIN.title}
          handleApprove={() => navigate(ROUTER_PATH.login)}
          approveBtnText="로그인하기"
          cancelBtnText="나중에 하기"
          isBtnWidthEqual={false}
        >
          {APPLY.LOGIN.content}
        </Modal>
      )}
      {isLoggedIn && isModalOpen && (
        <ApplyModal positions={recruitmentDetail?.positions} recruitmentId={recruitmentId} studyId={studyId} />
      )}
    </RecruitmentDetailWrapper>
  );
};

const RecruitmentDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1224px;
  margin: 0 auto;
  margin-top: 40px;
  gap: 40px;
`;

const RecruitmentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  color: ${(props) => props.theme.color.black5};
  font-family: Pretendard;
  font-size: ${(props) => props.theme.font.xxxxlarge};
  font-style: normal;
  font-weight: 800;
  line-height: 48px;
`;

const RecruitmentInfoWrapper = styled.div`
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

  .recruitment__details {
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
`;
const StudyButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 8px;
    background: ${(props) => props.theme.color.gray1};
    color: ${(props) => props.theme.color.black3};
    text-align: center;
    font-size: ${(props) => props.theme.font.xsmall};
    font-weight: 600;
    line-height: 44px;
  }
`;

export default RecruitmentDetail;
