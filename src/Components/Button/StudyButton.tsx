import styled from 'styled-components';

export const StudyButton = () => {
  return <StudyContainer />;
};

const StudyContainer = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray4};
  text-align: center;
  width: 156px;
  height: 46px;
`;
