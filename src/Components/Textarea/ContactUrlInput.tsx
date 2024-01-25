import styled from 'styled-components';

export const ContactUrlInput = () => {
  return <InputContainer placeholder="ex)오픈 카카오톡 링크" />;
};

const InputContainer = styled.input`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;
