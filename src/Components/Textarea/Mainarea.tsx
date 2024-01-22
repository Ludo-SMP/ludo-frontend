import { useState } from 'react';
import styled from 'styled-components';

export const Mainarea = () => {
  const [inputCount, setInputCount] = useState(0);
  const onInputHandler = (event: any) => {
    setInputCount(event.target.value.length);
  };
  return (
    <div>
      <Input onChange={onInputHandler} maxLength={2000} placeholder="상세내용을 기입하세요" />
      <p>
        <span>{inputCount}</span>
        <span>/2000 자</span>
      </p>
    </div>
  );
};

const Input = styled.textarea`
  width: 1224px;
  height: 354px;
`;
