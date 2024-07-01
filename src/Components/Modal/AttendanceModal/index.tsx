import { PropsWithChildren, useRef } from 'react';

import Button from '@/Components/Common/Button';
import ChipMenu from '@/Components/Common/ChipMenu';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import styled from 'styled-components';
import { ATTENDANCE_DAY } from '@/Shared/study';
import { useModalStore } from '@/store/modal';
import { useOutSideClick } from '@/Hooks/useOutsideClick';
import { AttendanceType } from '@/Hooks/useAttendanceModal';

export interface AttendanceModalProps {
  attendanceDay: AttendanceType[] | null;
  toggleAttendanceDay: (day: AttendanceType) => void;
  saveAttendanceDay?: () => void;
  resetAttendanceDay?: () => void;
}

const AttendanceModal = ({
  attendanceDay,
  toggleAttendanceDay,
  saveAttendanceDay,
  resetAttendanceDay,
}: AttendanceModalProps) => {
  const { closeModal } = useModalStore();

  const modalRef = useRef<HTMLDivElement>(null);

  useOutSideClick(modalRef, closeModal);

  const handleChecked = (checked: AttendanceType): boolean =>
    (attendanceDay ?? []).findIndex((day) => day.id === checked.id) !== -1;

  return (
    <ModalLayout ref={modalRef}>
      <ModalInner>
        <ModalHeader>
          <ModalText>스터디 출석일을 골라주세요.</ModalText>
        </ModalHeader>
        <ModalBody>
          <FormSection title="평일">
            <ButtonBox>
              {ATTENDANCE_DAY.slice(0, 5).map((day: AttendanceType) => (
                <ChipMenu key={`chip-${day.id}`} onClick={() => toggleAttendanceDay(day)} checked={handleChecked(day)}>
                  {day.name}
                </ChipMenu>
              ))}
            </ButtonBox>
          </FormSection>
          <FormSection title="주말">
            <ButtonBox>
              {ATTENDANCE_DAY.slice(5).map((day: AttendanceType) => (
                <ChipMenu key={`chip-${day.id}`} onClick={() => toggleAttendanceDay(day)} checked={handleChecked(day)}>
                  {day.name}
                </ChipMenu>
              ))}
            </ButtonBox>
          </FormSection>
        </ModalBody>
        <ModalFooter onClick={closeModal}>
          <Button scheme="normal" type="button" className="button__cancel" onClick={resetAttendanceDay}>
            선택 취소
          </Button>
          <Button scheme="primary" type="submit" className="button__approve" onClick={saveAttendanceDay}>
            선택 완료
          </Button>
        </ModalFooter>
      </ModalInner>
    </ModalLayout>
  );
};

export { AttendanceModal };

export interface FormSectionProps {
  title: string;
}

const FormSection = ({ title, children }: PropsWithChildren<FormSectionProps>) => {
  return (
    <FormSectionBox>
      <ModalText>{title}</ModalText>
      <RowDivider rowHeight={1} margin={12} />
      {children}
    </FormSectionBox>
  );
};

const FormSectionBox = styled.div`
  & + & {
    margin-top: 24px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;

const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 600px;
  min-width: 300px;
  max-width: 600px;
  padding: 32px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.black1};
`;

const ModalInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ModalText = styled.div`
  color: ${({ theme }) => theme.color.black5};
  font-family: 'Pretendard600';
  ${({ theme }) => theme.typo.PageTitle};
`;

const ModalHeader = styled.div``;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;

  button.button__cancel {
    width: 158px;
  }
  button.button__approve {
    width: 354px;
  }
`;
