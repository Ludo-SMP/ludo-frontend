import { useState } from 'react';
import styled from 'styled-components';

export const Titlearea = () => {
  const [inputCount, setInputCount] = useState(0);
  const onInputHandler = (event: any) => {
    setInputCount(event.target.value.length);
  };
  return (
    <div>
      <Input onChange={onInputHandler} maxLength={50} placeholder="제목을 기입해주세요" aria-placeholder="0/50" />
      <p>
        <span>{inputCount}</span>
        <span>/50 자</span>
      </p>
    </div>
  );
};

const Input = styled.textarea`
  width: 1224px;
  height: 14px;
`;
