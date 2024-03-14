import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { OptionalCreates } from '@/Pages/Studies/CreateStudy';
import { Creates } from '@/Types/studies';

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

export const ProgressButton = ({ setForm, useForm }: Props) => {
  // const [wayValue, setForms] = useState<string>('');
  const submitHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setForm({ way: event.target.value });
  };
  return (
    <ButtonConTainer name="way" className="select" value={useForm.way} onChange={submitHandler}>
      <Textwrapper>진행방식</Textwrapper>
      <Textwrapper value="ONLINE">온라인</Textwrapper>
      <Textwrapper value="OFFLINE">오프라인</Textwrapper>
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
