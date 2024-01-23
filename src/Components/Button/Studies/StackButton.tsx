import styled from 'styled-components';

export type StudyProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

export const StackButton = () => {
  return (
    <ButtonConTainer>
      <Textwrapper disabled selected>
        카테고리
      </Textwrapper>
      <Textwrapper value="algorithm">알고리즘</Textwrapper>
      <Textwrapper value="project">프로젝트</Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 600px;
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
  padding-left: 330px;
`;
