import Modal from '@/Components/Common/Modal';
import { APPLY } from '@/Constants/messages';
import Chip from '@/Components/Common/Chip';
import { useApplyStudyMutation } from '@/Hooks/study/useApplyStudyMutation';
import { ApplyTryStatus, Position } from '@/Types/study';
import styled from 'styled-components';
import { useSelectedPositionStore } from '@/store/position';
import { SetStateAction } from 'react';

interface ApplyModalProps {
  handleApplyApprove: React.Dispatch<SetStateAction<ApplyTryStatus>>;
  studyId: number;
  recruitmentId: number;
  positions: Position[];
}

const ApplyModal = ({ handleApplyApprove, studyId, recruitmentId, positions }: ApplyModalProps) => {
  const { selectedPosition, resetSelectedPosition } = useSelectedPositionStore();
  const { mutate: applyMutate } = useApplyStudyMutation(studyId, recruitmentId, handleApplyApprove);

  return (
    <Modal
      title={APPLY.CHOSSE_POSITION.title}
      isBtnWidthEqual={false}
      approveBtnText="선택 완료"
      cancelBtnText="나중에 하기"
      handleApprove={() => {
        if (!selectedPosition) return;
        applyMutate(selectedPosition);
        resetSelectedPosition();
      }}
      handleCancel={() => resetSelectedPosition()}
    >
      <ChipsWrapper>
        {positions.length !== 0
          ? positions.map((position: Position) => <Chip chipType="Primary" position={position} />)
          : '선택할 수 있는 포지션이 없습니다.'}
      </ChipsWrapper>
    </Modal>
  );
};

const ChipsWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export default ApplyModal;
