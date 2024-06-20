import styled from 'styled-components';
import Modal, { ModalProps } from '../Common/Modal';
import { useState } from 'react';
import { Radio } from '@/Assets/Radio';
import { theme } from '@/Styles/theme';

type OptionValue = 'force' | 'request';

export interface LeaveModalProps {
  handleApprove?: (value: OptionValue) => void;
  handleCancel?: ModalProps['handleCancel'];
}

export const LeaveModal = ({ handleApprove, handleCancel }: LeaveModalProps) => {
  const [selectedOption, setSelectedOption] = useState<OptionValue | null>(null);

  return (
    <Modal
      title="탈퇴 방식을 골라주시기 바랍니다."
      approveBtnText="선택 완료"
      cancelBtnText="계속 함께하기"
      handleApprove={() => selectedOption && handleApprove(selectedOption)}
      handleCancel={handleCancel}
    >
      <Options>
        <Option $value="request" $selected={selectedOption === 'request'} onClick={() => setSelectedOption('request')}>
          <OptionContent>
            <OptionTitle>팀장에게 승인 요청 받기</OptionTitle>
            <OptionText>
              팀장에게 탈퇴 승인을 요청 하고, 팀장이 이를 수락 할 시 신뢰도에 영향이 가지 않습니다.
            </OptionText>
          </OptionContent>
          <Radio color={theme.color.purple1} checked={selectedOption === 'request'} />
        </Option>
        <Option $value="force" $selected={selectedOption === 'force'} onClick={() => setSelectedOption('force')}>
          <OptionContent>
            <OptionTitle>무단 탈퇴 하기</OptionTitle>
            <OptionText>무단 탈퇴를 하게 되면 빠른 탈퇴가 가능하나, 신뢰도가 깎이게 됩니다.</OptionText>
          </OptionContent>
          <Radio color={theme.color.orange1} checked={selectedOption === 'force'} />
        </Option>
      </Options>
    </Modal>
  );
};

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

const Option = styled.div<{
  $selected?: boolean;
  $value?: OptionValue;
}>`
  display: flex;
  padding: 12px 16px;
  gap: 24px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid
    ${({ theme, $selected, $value }) =>
      $selected ? ($value === 'request' ? theme.color.purple1 : theme.color.orange1) : theme.color.black1};
  background-color: ${({ theme, $selected, $value }) =>
    $selected ? ($value === 'request' ? theme.color.purple2 : '#FFF3EC') : theme.color.white};
`;

const OptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const OptionTitle = styled.h4`
  color: ${({ theme }) => theme.color.black5};
  font-family: Pretendard600;
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
`;

const OptionText = styled.p`
  color: ${({ theme }) => theme.color.black4};
  ${({ theme }) => theme.typo.InputField};
`;
