import styled from 'styled-components';

export const ContactButton = () => {
  return (
    <ButtonConTainer name="contact" className="select">
      <Textwrapper disabled selected>
        연락방법
      </Textwrapper>
      <Textwrapper value="EMAIL">이메일</Textwrapper>
      <Textwrapper value="KAKAO">카카오톡</Textwrapper>
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
