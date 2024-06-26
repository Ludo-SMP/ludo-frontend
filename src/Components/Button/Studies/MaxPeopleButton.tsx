import styled from 'styled-components';

export type StudyProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

export const MaxPeopleButton = () => {
  return (
    <ButtonConTainer>
      <Textwrapper disabled selected>
        스터디 최대인원
      </Textwrapper>
      <Textwrapper value="algorithm">6명</Textwrapper>
      <Textwrapper value="8명">8명</Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 600px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray1};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.strokeDividerThick};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const Textwrapper = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 330px;
`;
