import styled from 'styled-components';
import { OptionalCreates } from '@/Pages/Studies/CreateStudy';
import { Creates } from '@/Types/studies';
import { ChangeEvent } from 'react';

export type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  // onChange?: (event: string) => void;
  setForm: (any: OptionalCreates) => void;
  useForm: Creates;
  value?: string;
  type?: string;
  name?: string;
  maxlength?: number;
  id?: string;
  formData?: number | string;
  ref?: string;
};

export const PositionButton = ({ setForm, useForm }: Props) => {
  const PositionHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setForm({ positionId: event.target.selectedIndex });
  };
  return (
    <ButtonConTainer name="positionId" className="select" value={useForm.positionId} onChange={PositionHandler}>
      <Textwrapper>포지션</Textwrapper>
      <Textwrapper value={1}>백엔드</Textwrapper>
      <Textwrapper value={2}>프론트엔드</Textwrapper>
      <Textwrapper value={3}>디자이너</Textwrapper>
      <Textwrapper value={4}>데브옵스</Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const Textwrapper = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;
