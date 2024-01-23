import styled from 'styled-components';

export const ProgressButton = () => {
  return (
    <ButtonConTainer name="Progress" className="select">
      <Textwrapper disabled selected>
        진행방식
      </Textwrapper>
      <Textwrapper value="gathertown">온라인</Textwrapper>
      <Textwrapper value="googlemeet">오프라인</Textwrapper>
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
