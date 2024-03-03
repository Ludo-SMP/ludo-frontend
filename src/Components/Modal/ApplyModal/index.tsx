import Modal from '@/Components/Common/Modal';
import { APPLY } from '@/Constants/messages';
import Chip from '@/Components/Common/Chip';
import { useApplyStudyMutation } from '@/Apis/study';
import { PositionType } from '@/Types/study';
import styled from 'styled-components';
import { useSelectedPositionStore } from '@/Store/position';
import { SetStateAction } from 'react';

interface ApplyModalProps {
  handleApplyApprove: React.Dispatch<SetStateAction<boolean>>;
  recruitmentId: number;
  studyId: number;
  positions: PositionType[];
}

const ApplyModal = ({ handleApplyApprove, recruitmentId, studyId, positions }: ApplyModalProps) => {
  const { selectedPosition, resetSelectedPosition } = useSelectedPositionStore();
  const { mutate } = useApplyStudyMutation(
    studyId,
    recruitmentId,
    { positionId: selectedPosition },
    handleApplyApprove,
  );

  return (
    <Modal
      title={APPLY.CHOSSE_POSITION.title}
      isBtnWidthEqual={false}
      approveBtnText="선택 완료"
      cancelBtnText="나중에 하기"
      handleApprove={() => {
        if (!selectedPosition) return;
        mutate();
        resetSelectedPosition();
      }}
      handleCancel={() => resetSelectedPosition()}
    >
      <ChipsWrapper>
        {positions.map((position) => (
          <Chip chipType="Primary" value={position}>
            {position}
          </Chip>
        ))}
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
