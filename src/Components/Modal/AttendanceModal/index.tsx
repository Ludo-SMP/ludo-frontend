import Button from '@/Components/Common/Button';
import Chip from '@/Components/Common/Chip';
import { RowDivider } from '@/Components/Common/Divider/RowDivider';
import { Position } from '@/Types/study';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const AttendanceModal = () => {
  const test: Position[] = [
    { id: 1, name: '백엔드' },
    { id: 2, name: '프론트엔드' },
    { id: 3, name: '디자이너' },
    { id: 4, name: '데브옵스' },
  ];
  return (
    <ModalLayout>
      <ModalInner>
        <ModalHeader>
          <ModalText>스터디 출석일을 골라주세요.</ModalText>
        </ModalHeader>
        <ModalBody>
          <FormSection title="평일">
            <ButtonBox>
              {test.map((el: Position) => (
                <Chip chipType="Secondary" position={el} />
              ))}
            </ButtonBox>
          </FormSection>
          <FormSection title="주말">
            <ButtonBox>
              {test.map((el: Position) => (
                <Chip chipType="Secondary" position={el} />
              ))}
            </ButtonBox>
          </FormSection>
        </ModalBody>
        <ModalFooter>
          <Button>선택 취소</Button>
          <Button>선택 완료</Button>
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
`;
