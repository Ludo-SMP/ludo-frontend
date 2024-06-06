import { Profile } from '@/Assets';
import { Member, ApplyStatus } from '@/Types/study';
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

interface ApplicantCardProps extends Omit<Member, 'role'> {
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
}: ApplicantCardProps) => {
  const [applyStatus, setApplyStatus] = useState<ApplyStatus>('UNCHECKED');
  const { isModalOpen, closeModal } = useModalStore();
  const queryClient = useQueryClient();

  const { mutate: acceptMutate } = useAcceptApplyMutation(studyId, applicantId, () => {
    setApplyStatus('ACCEPTED');
  });
  const { mutate: refuseMutate } = useRefuseApplyMutation(studyId, applicantId, () => {
    setApplyStatus('REFUSED');
  });

  return (
    <CardBox>
      <CardInner>
        <Title>지원한 스터디 이름</Title>
        <Content>
          <ProfileSection>
            <Profile width={100} height={100} />
            <ProfileInfoBox>
              <Nickname>닉네임</Nickname>
              <Fields>
                <Field>이메일</Field>
                <Field>포지션</Field>
              </Fields>
            </ProfileInfoBox>
          </ProfileSection>
          <RowDivider />
        </Content>
      </CardInner>
      <Buttons>
        <Button>거절하기</Button>
        <Button scheme="secondary">수락하기</Button>
      </Buttons>
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

const Buttons = styled.div`
  display: flex;
  gap: 12px;

  & > button {
    flex: 1;
  }
`;
