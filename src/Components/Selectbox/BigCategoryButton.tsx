// import { all } from 'axios';
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

export const BigCategoryButton = ({ setForm, useForm }: Props) => {
  // const [selectValue, setForms] = useState<number>(0);
  const submitHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setForm({ categoryId: event.target.selectedIndex });
  };
  return (
    <ButtonConTainer name="categoryId" className="select" value={useForm.categoryId} onChange={submitHandler}>
      <Textwrapper>카테고리</Textwrapper>
      <Textwrapper value={1}>프로젝트</Textwrapper>
      <Textwrapper value={2}>코딩 테스트</Textwrapper>
      <Textwrapper value={3}>모의 면접</Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray1};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const Textwrapper = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 330px;
`;
