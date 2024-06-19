import { Profile } from '@/Assets';
import { ApplyStatus, Applicant } from '@/Types/study';
import styled from 'styled-components';
import { InfoField } from '../Common/InfoField';
import Button from '../Common/Button';
import { useState } from 'react';
import { useAcceptApplyMutation } from '@/Hooks/study/useAcceptApplyMutation';
import { useRefuseApplyMutation } from '@/Hooks/study/useRefuseApplyMutation';
import Modal from '../Common/Modal';
import { APPLY } from '@/Constants/messages';
import { STUDY } from '@/Constants/queryString';
import { useModalStore } from '@/store/modal';
import { useQueryClient } from '@tanstack/react-query';
import { RowDivider } from '../Common/Divider/RowDivider';
import { CircularRate } from '../CircularRate';

interface ApplicantCardProps extends Applicant {
  /** 스터디 ID */
  studyId: number;

  /** 스터디명 */
  title: string;

  /** 스터디장 여부 */
  isOwner: boolean;
}

/** 지원자 카드 */
export const ApplicantCard = ({
  studyId,
  id: applicantId,
  title,
  nickname,
  email,
  position,
  isOwner,
  reviewStatistics,
}: ApplicantCardProps) => {
  const [applyStatus, setApplyStatus] = useState<ApplyStatus>('UNCHECKED');
  const { isModalOpen, closeModal } = useModalStore();
  const queryClient = useQueryClient();

  // 평가 항목이 전부 0인 경우 스터디 종료를 경험한 적 없는 신규 사용자로 판단
  const isNewbie = Object.values(reviewStatistics).every((v) => v === 0);

  const { mutate: acceptMutate } = useAcceptApplyMutation(studyId, applicantId, () => {
    setApplyStatus('ACCEPTED');
  });
  const { mutate: refuseMutate } = useRefuseApplyMutation(studyId, applicantId, () => {
    setApplyStatus('REFUSED');
  });

  return (
    <CardBox>
      <CardInner>
        <Title>{title}</Title>
        <Content>
          <ProfileSection>
            <Profile width={100} height={100} />
            <ProfileInfoBox>
              <Nickname>{nickname}</Nickname>
              <Fields>
                <Field>{email}</Field>
                <Field>{position.name}</Field>
              </Fields>
            </ProfileInfoBox>
          </ProfileSection>
          <RowDivider />
          <StatsSection>
            {!isNewbie ? (
              <>
                <Stats>
                  <li>
                    <CircularRate percentage={reviewStatistics.activeness} label="적극성" />
                  </li>
                  <li>
                    <CircularRate percentage={reviewStatistics.professionalism} label="전문성" />
                  </li>
                  <li>
                    <CircularRate percentage={reviewStatistics.communication} label="소통력" />
                  </li>
                </Stats>
                <StatsDescription>
                  다시 <Bold>함께 하고 싶어하는</Bold> 사용자예요!
                  <br />
                  주변 사람에게 <Bold>추천하고 싶은</Bold> 사용자예요!
                </StatsDescription>
              </>
            ) : (
              <StatsDescription>
                이 분은 아직 신뢰도가 측정되지 않은 <Bold>새 회원</Bold>이에요!
                <br />
                <Bold>새로운 분과 함께 하는 스터디, 설렐 것 같지 않나요?</Bold>
              </StatsDescription>
            )}
          </StatsSection>
        </Content>
      </CardInner>
      {isOwner && (
        <Buttons>
          <Button onClick={() => refuseMutate()}>거절하기</Button>
          <Button scheme="secondary" onClick={() => acceptMutate()}>
            수락하기
          </Button>
        </Buttons>
      )}
    </CardBox>
  );
};

const CardBox = styled.article`
  display: flex;
  width: 392px;
  min-width: 248px;
  max-width: 1224px;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.color.black0};
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color.black2};
  font-family: Pretendard400;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileSection = styled.section`
  display: flex;
  gap: 16px;
`;

const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard600;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Field = styled.span`
  color: ${({ theme }) => theme.color.black2};
  font-family: Pretendard500;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

const StatsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Stats = styled.ul`
  display: flex;
  gap: 12px;
`;

const StatsDescription = styled.p`
  color: ${({ theme }) => theme.color.black2};
  font-family: Pretendard400;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

const Bold = styled.span`
  color: ${({ theme }) => theme.color.black5};
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;

  & > button {
    flex: 1;
  }
`;
