import { useState } from 'react';
import styled from 'styled-components';

export const Mainarea = () => {
  const [inputCount, setInputCount] = useState(0);
  const onInputHandler = (event: any) => {
    setInputCount(event.target.value.length);
  };
  return (
    <MainContainer>
      <Input onChange={onInputHandler} maxLength={2000} placeholder="상세내용을 기입하세요" />
      <InputText>{inputCount}/2000</InputText>
    </MainContainer>
  );
};

const MainContainer = styled.section`
  width: 1224px;
  height: 354px;
  display: flex;
  flex-direction: row;
  background-color: gray;
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: #f2f3f3;
`;

const InputText = styled.p`
  font-size: 14px;
  gap: 2px;
  padding-top: 300px;
  align-items: center;
  background: '#f2f3f3';
  color: '#262D31';
  padding-right: 16px;
`;
const Input = styled.textarea`
  width: 1112px;
  height: 322px;
  align-items: center;
  background-color: gray;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding-left: 16px;
  align-items: center;
  border: 1px solid #cbcdd1;
  border-width: 0;
  background: #f2f3f3;
  resize: none;
  flex: 1 0 0;
  margin-top: 16px;
`;
