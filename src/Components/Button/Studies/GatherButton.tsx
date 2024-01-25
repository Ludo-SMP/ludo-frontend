import styled from 'styled-components';

export const GatherButton = () => {
  return (
    <ButtonConTainer name="contact" className="select">
      <Textwrapper disabled selected>
        모집인원
      </Textwrapper>
      <Textwrapper value="3명">3명</Textwrapper>
      <Textwrapper value="6명">6명</Textwrapper>
      <Textwrapper value="8명">8명</Textwrapper>
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
