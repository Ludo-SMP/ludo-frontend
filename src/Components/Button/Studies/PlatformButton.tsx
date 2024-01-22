import styled from 'styled-components';

export const PlatformButton = () => {
  return (
    <ButtonConTainer name="Progress" className="select">
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
  background-color: gray;
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: #f2f3f3;
  color: gray;
  padding-left: 16px;
`;

const Textwrapper = styled.option`
  background: #f2f3f3;
  color: gray;
  padding-left: 16px;
`;
