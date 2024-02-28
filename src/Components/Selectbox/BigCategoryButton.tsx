import { all } from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  onChange?: (event: any) => void;
  value?: any;
  onSubmit?: any;
  type?: string;
  name?: string;
  maxlength?: any;
  id?: string;
  formData?: any;
  deflautValue?: string;
};

export const BigCategoryButton = (props: any) => {
  const [selectValue, setSelectedVal] = useState('');
  const submitHandler = (event: any) => {
    setSelectedVal(event.currentTarget.value);
  };
  return (
    // <ButtonConTainer name="category" className="select" key={selectValue} value={selectValue} onChange={submitHandler}>
    //   <Textwrapper>카테고리</Textwrapper>
    //   <Textwrapper value="all">전체</Textwrapper>
    //   <Textwrapper value="algorithm">알고리즘</Textwrapper>
    //   <Textwrapper value="project">프로젝트</Textwrapper>
    // </ButtonConTainer>
    <ButtonConTainer name="categoryId" className="select" value={selectValue} onChange={submitHandler}>
      <Textwrapper>카테고리</Textwrapper>
      <Textwrapper value={1}>코딩테스트</Textwrapper>
      <Textwrapper value={2}>프로젝트</Textwrapper>
      <Textwrapper value={3}>모의면접</Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 600px;
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
