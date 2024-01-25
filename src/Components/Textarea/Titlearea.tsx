import { useState } from 'react';
import styled from 'styled-components';

export const Titlearea = () => {
  const [inputCount, setInputCount] = useState(0);
  const onInputHandler = (event: any) => {
    setInputCount(event.target.value.length);
  };
  return (
    <InputContainer>
      <Input onChange={onInputHandler} maxLength={50} placeholder="제목을 기입해주세요" />
      <InputText>{inputCount}/50</InputText>
    </InputContainer>
  );
};

const InputContainer = styled.section`
  width: 1224px;
  height: 44px;
  display: flex;
  flex-direction: row;
  background-color: gray;
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: #f2f3f3;
  align-items: center;
  align-self: stretch;
`;

const InputText = styled.p`
  font-size: 14px;
  gap: 2px;
  align-items: left;
  background: #f2f3f3;
  color: '#262D31';
  padding-right: 16px;
`;

const Input = styled.textarea`
  width: 1153px;
  height: 24px;
  background-color: gray;
  align-items: center;
  align-self: stretch;
  align-items: center;
  border: 1px solid #cbcdd1;
  border-width: 0;
  background: #f2f3f3;
  resize: none;
  flex: 1 0 0;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  padding-left: 16px;
`;
