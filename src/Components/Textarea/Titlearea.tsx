import { useState, useRef } from 'react';
import styled from 'styled-components';

export type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  onChange?: (event: any) => void;
  value?: any;
  type?: string;
  name?: string;
  maxlength?: any;
  id?: string;
  formData?: any;
  ref?: any;
};

//작성
const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = ({ target }: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    const { value } = target;
    setValue(value);
  };
  return { value, onChange, setValue };
};

export const Titlearea = ({ value, name, maxlength, onChange }: Props) => {
  // 글자수제한
  const [inputCount, setInputCount] = useState(0);

  // title 임시 변수
  const newTitle = useInput('');
  // console.log(newTitle);
  const onInputHandler = (event: any) => {
    setInputCount(event.target.value.length);
  };

  // input
  const [titleValue, settitleValue] = useState('');
  const titleHandler = (event: any) => {
    settitleValue(event.target.value);
  };

  const refs = useRef<string>(newTitle.value);
  // const changeValue = (event: React.ChangeEvent<HTMLInputElement>, type: React.MutableRefObject<string>) => {
  //   let values = event.target.value;
  //   type current = typeof values;
  // };

  return (
    <InputContainer id="title" className="input">
      <Input
        // className="input"
        // name="title"
        // id="title"
        // ref={refs}
        onChange={(event) => [newTitle.setValue(event.target.value), onInputHandler(event)]}
        value={newTitle.value}
        name={name}
        maxLength={50}
        placeholder="제목을 기입해주세요"
      />
      <InputText>{inputCount}/50</InputText>
    </InputContainer>
  );
};

const InputContainer = styled.section`
  width: 1224px;
  height: 44px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  align-items: center;
  align-self: stretch;
`;

const InputText = styled.p`
  font-size: 14px;
  gap: 2px;
  align-items: left;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.black2};
  padding-right: 16px;
`;

const Input = styled.textarea`
  width: 1153px;
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
