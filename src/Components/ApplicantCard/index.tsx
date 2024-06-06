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

const Buttons = styled.div`
  display: flex;
  gap: 12px;

  & > button {
    flex: 1;
  }
`;
