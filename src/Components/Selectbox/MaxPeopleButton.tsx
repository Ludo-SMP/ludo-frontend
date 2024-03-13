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
  value?: number;
  type?: string;
  name?: string;
  maxlength?: number;
  id?: string;
  formData?: number | string;
  ref?: string;
};

export const MaxPeopleButton = ({ setForm, useForm }: Props) => {
  // const [selectValue, setForms] = useState<string>();
  const LimitHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setForm({ participantLimit: event.target.selectedIndex });
  };
  return (
    <ButtonConTainer
      name="participantLimit"
      className="select"
      value={useForm.participantLimit}
      onChange={LimitHandler}
    >
      <Textwrapper>스터디 최대인원</Textwrapper>
      <Textwrapper value={1}>1명</Textwrapper>
      <Textwrapper value={2}>2명</Textwrapper>
      <Textwrapper value={3}>3명</Textwrapper>
      <Textwrapper value={4}>4명</Textwrapper>
      <Textwrapper value={5}>5명</Textwrapper>
      <Textwrapper value={6}>6명</Textwrapper>
      <Textwrapper value={7}>7명</Textwrapper>
      <Textwrapper value={8}>8명</Textwrapper>
      <Textwrapper value={9}>9명</Textwrapper>
      <Textwrapper value={10}>10명</Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray1};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: #f2f3f3;
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const Textwrapper = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 330px;
`;
