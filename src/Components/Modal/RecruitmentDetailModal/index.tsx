import { Close, Loading, MemberImage } from '@/Assets';
import { ColumnDivider } from '@/Components/Common/Divider/ColumnDivider';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import { InfoField } from '@/Components/Common/InfoField';
import { useRecruitmentDetail } from '@/Hooks/recruitments/useRecruitmentDetail';
import { useOutSideClick } from '@/Hooks/useOutsideClick';
import { Position, Stack } from '@/Types/study';
import { dateFormatter, getDayById, getPeriod, isEdited } from '@/utils/date';
import { SetStateAction, useRef } from 'react';
import styled from 'styled-components';

export interface RecruitmentDetailModlProps {
  recruitmentId: number;
  handleModal: React.Dispatch<SetStateAction<boolean>>;
}

export const RecruitmentDetailModal = ({ recruitmentId, handleModal }: RecruitmentDetailModlProps) => {
  const { data: recruitmentDetail, isLoading } = useRecruitmentDetail(recruitmentId);
  const studyInfo = recruitmentDetail?.study;
  const recruitmentInfo = recruitmentDetail?.recruitment;
  const modalRef = useRef<HTMLDivElement>(null);
  useOutSideClick(modalRef, () => handleModal(false));

  return (
    <ModalLayout ref={modalRef}>
      {isLoading ? (
        <Loading />
      ) : (
        <ModalInner>
          <ModalHeader>
            <HeaderContentBox>
              <Title>{recruitmentInfo?.title}</Title>
              <CreationInfoRows>
                <CreationInfoRow>{studyInfo?.owner?.nickname}</CreationInfoRow>
                <ColumnDivider />
                <CreationInfoRow>{dateFormatter(recruitmentInfo?.createdDateTime)}</CreationInfoRow>
                <CreationInfoRow>
                  {isEdited(recruitmentInfo?.createdDateTime, recruitmentInfo?.updatedDateTime) ? '수정됨' : '생성'}
                </CreationInfoRow>
              </CreationInfoRows>
            </HeaderContentBox>
            <CloseIcon onClick={() => {}}>
              <Close width={24} height={24} />
            </CloseIcon>
          </ModalHeader>
          <ModalBody>
            <StudyInfoBox>
              <InfoField
                title="카테고리"
                content={studyInfo.category.name || '카테고리'}
                fontSize={16}
                flexDirection="column"
              />
              <RowDivider />
              <StudyInfoLayout>
                <InfoField
                  title="진행 방식"
                  content={studyInfo.way || '진행 방식'}
                  fontSize={16}
                  flexDirection="column"
                />
                <InfoField
                  title="진행 플랫폼"
                  content={studyInfo.platform || '진행 플랫폼'}
                  fontSize={16}
                  flexDirection="column"
                />
                <InfoField
                  title="진행 기간"
                  content={getPeriod(studyInfo.startDateTime, studyInfo.endDateTime) || '진행 기간'}
                  fontSize={16}
                  flexDirection="column"
                />

                <InfoField
                  title="진행 요일"
                  content={getDayById(studyInfo.attendanceDay) || '진행 요일'}
                  fontSize={16}
                  flexDirection="column"
                />
              </StudyInfoLayout>
            </StudyInfoBox>
            <RecruitmentInfoBox>
              <SectionTitleBox>
                <MemberImage />
                <SectionTitle>모집안내</SectionTitle>
              </SectionTitleBox>
              <RecruitmentInfoLayout>
                <InfoField
                  title="모집 인원"
                  content={recruitmentInfo?.applicantCount || '모집 인원'}
                  fontSize={16}
                  flexDirection="column"
                />
                <InfoField
                  title="모집 마감일"
                  content={recruitmentInfo?.endDateTime || '모집 마감일'}
                  fontSize={16}
                  flexDirection="column"
                />

                <InfoField
                  title="포지션"
                  content={
                    recruitmentInfo?.positions?.map((position: Position) => position.name).join(', ') || '포지션'
                  }
                  fontSize={18}
                  flexDirection="column"
                />
                <InfoField
                  title="기술 스택"
                  content={recruitmentInfo?.stacks?.map((stack: Stack) => stack.name).join(', ') || '기술 스택'}
                  fontSize={18}
                  flexDirection="column"
                />
                <InfoField
                  title="연락 방법"
                  content={recruitmentInfo?.contact || '연락 방법'}
                  fontSize={18}
                  flexDirection="column"
                />
                <InfoField
                  title="연결 url"
                  content={recruitmentInfo?.callUrl || '연결 url'}
                  fontSize={18}
                  flexDirection="column"
                />
              </RecruitmentInfoLayout>
            </RecruitmentInfoBox>
          </ModalBody>
        </ModalInner>
      )}
      {/* <ModalBtns></ModalBtns> */}
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 40px;
  width: 90%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.color.white2};
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  width: 100%;
`;

const HeaderContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  flex: 1 0 0;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard800';
  font-size: ${({ theme }) => theme.font.xxlarge};
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
`;

const CreationInfoRows = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
  align-self: stretch;

  & > span:first-child {
    color: ${({ theme }) => theme.color.black4};
  }
`;

const CreationInfoRow = styled.span`
  color: ${({ theme }) => theme.color.black2};
  font-family: 'Pretendard500';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

const CloseIcon = styled.div`
  padding: 8px;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  align-self: stretch;
`;

const RecruitmentInfoBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

const SectionTitleBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const SectionTitle = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard800';
  font-size: ${({ theme }) => theme.font.medium};
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
  width: 100%;
`;

const RecruitmentInfoLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  grid-gap: 24px;
  width: 100%;
`;

const StudyInfoBox = styled.section`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  width: 100%;
`;

const StudyInfoLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  grid-gap: 24px;
  width: 100%;
`;
