import styled from 'styled-components';

export const PositionButton = () => {
  return (
    <ButtonConTainer name="contact" className="select">
      <Textwrapper disabled selected>
        포지션
      </Textwrapper>
      <Textwrapper value="frontend">프론트엔드</Textwrapper>
      <Textwrapper value="backend">백엔드</Textwrapper>
      <Textwrapper value="pm">기획자</Textwrapper>
      <Textwrapper value="designer">디자이너</Textwrapper>
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
