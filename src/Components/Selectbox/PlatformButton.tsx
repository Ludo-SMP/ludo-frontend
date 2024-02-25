import { useState } from 'react';
import styled from 'styled-components';

export const PlatformButton = () => {
  const [Value, setValue] = useState('');
  const submitHandler = (event: any) => {
    setValue(event.currentTarget.value);
  };
  return (
    <ButtonConTainer name="platform" className="select" value={Value} onChange={submitHandler}>
      <Textwrapper disabled selected>
        플랫폼
      </Textwrapper>
      <Textwrapper value="gathertown">게더타운</Textwrapper>
      <Textwrapper value="googlemeet">구글미트</Textwrapper>
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
