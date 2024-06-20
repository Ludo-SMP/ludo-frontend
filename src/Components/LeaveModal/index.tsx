import styled from 'styled-components';
import Modal, { ModalProps } from '../Common/Modal';
import { useState } from 'react';
import { Radio } from '@/Assets/Radio';
import { theme } from '@/Styles/theme';
import { LEAVE } from '@/Constants/messages';

type OptionValue = 'force' | 'request';

export interface LeaveModalProps {
  /**
   * 확인 버튼 클릭 시 실행 함수
   *
   * 아무 방법도 선택하지 않았을 경우 실행되지 않습니다.
   */
  handleApprove?: (value: OptionValue) => void;

  /**
   * 취소 버튼 클릭 시 실행 함수
   */
  handleCancel?: ModalProps['handleCancel'];
}

/*
 * 탈퇴 방식을 선택하는 모달
 */
export const LeaveModal = ({ handleApprove, handleCancel }: LeaveModalProps) => {
  const [selectedOption, setSelectedOption] = useState<OptionValue | null>(null);

  return (
    <Modal
      title={LEAVE.MEMBER.SELECT.title}
      approveBtnText="선택 완료"
      cancelBtnText="계속 함께하기"
      handleApprove={() => selectedOption && handleApprove(selectedOption)}
      handleCancel={handleCancel}
    >
      <Options>
        <Option $value="request" $selected={selectedOption === 'request'} onClick={() => setSelectedOption('request')}>
          <OptionContent>
            <OptionTitle>{LEAVE.MEMBER.SELECT.request.title}</OptionTitle>
            <OptionText>{LEAVE.MEMBER.SELECT.request.content}</OptionText>
          </OptionContent>
          <Radio color={theme.color.purple1} checked={selectedOption === 'request'} />
        </Option>
        <Option $value="force" $selected={selectedOption === 'force'} onClick={() => setSelectedOption('force')}>
          <OptionContent>
            <OptionTitle>{LEAVE.MEMBER.SELECT.force.title}</OptionTitle>
            <OptionText>{LEAVE.MEMBER.SELECT.force.content}</OptionText>
          </OptionContent>
          <Radio color={theme.color.orange1} checked={selectedOption === 'force'} />
        </Option>
      </Options>
    </Modal>
  );
};

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

const Option = styled.li<{
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
