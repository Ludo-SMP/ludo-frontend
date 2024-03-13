import styled from 'styled-components';

export const ProgressButton = () => {
  return (
    <ButtonConTainer name="Progress" className="select">
      <Textwrapper>진행방식</Textwrapper>
      <Textwrapper value="gathertown">온라인</Textwrapper>
      <Textwrapper value="googlemeet">오프라인</Textwrapper>
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
