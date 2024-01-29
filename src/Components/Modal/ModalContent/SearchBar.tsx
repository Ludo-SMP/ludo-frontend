// import { useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../../Assets/SearchIcon';

export const SearchBar = () => {
  // const [, setInputCount] = useState(0);
  // const onInputHandler = (event: any) => {
  //   setInputCount(event.target.value.length);
  // };
  //  onChange={onInputHandler}
  return (
    <InputContainer>
      <Input maxLength={50} placeholder="기술스택" />
      <InputText>
        <SearchIcon />
      </InputText>
    </InputContainer>
  );
};

const InputContainer = styled.section`
  width: 1096px;
  height: 44px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  align-items: center;
  align-self: stretch;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const InputText = styled.p`
  font-size: 14px;
  gap: 2px;
  align-items: left;
  padding-right: 16px;
`;

const Input = styled.textarea`
  width: 1032px;
  height: 24px;
  background-color: ${(props) => props.theme.color.gray3};
  align-items: center;
  align-self: stretch;
  align-items: center;
  border: 1px solid #cbcdd1;
  border-width: 0;
  background: ${(props) => props.theme.color.gray1};
  resize: none;
  flex: 1 0 0;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  padding-left: 16px;
`;
