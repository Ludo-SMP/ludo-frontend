import styled from 'styled-components';

export const ContactButton = () => {
  return (
    <ButtonConTainer name="contact" className="select">
      <Textwrapper disabled selected>
        연락방법
      </Textwrapper>
      <Textwrapper value="phone">핸드폰</Textwrapper>
      <Textwrapper value="email">이메일</Textwrapper>
      <Textwrapper value="kakaotalk">카카오톡</Textwrapper>
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
