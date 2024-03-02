import Modal from '@/Components/Common/Modal';
import { APPLY } from '@/Constants/messages';
import Chip from '@/Components/Common/Chip';
import { applyStudy } from '@/Apis/study';
import { PositionType } from '@/Types/study';
import styled from 'styled-components';
import { useSelectedPositionStore } from '@/Store/position';

interface ApplyModalProps {
  recruitmentId: number;
  studyId: number;
  positions: PositionType[];
}

const ApplyModal = ({ recruitmentId, studyId, positions }: ApplyModalProps) => {
  const { selectedPosition, resetSelectedPosition } = useSelectedPositionStore();

  return (
    <Modal
      title={APPLY.CHOSSE_POSITION.title}
      isBtnWidthEqual={false}
      approveBtnText="선택 완료"
      cancelBtnText="나중에 하기"
      handleApprove={() => {
        applyStudy(recruitmentId, studyId, { positionId: selectedPosition });
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
