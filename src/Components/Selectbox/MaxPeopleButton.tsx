import styled from 'styled-components';

export type StudyProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

export const MaxPeopleButton = () => {
  return (
    <ButtonConTainer name="participantLimit">
      <Textwrapper disabled selected>
        스터디 최대인원
      </Textwrapper>
      <Textwrapper value={1}>1명</Textwrapper>
      <Textwrapper value={2}>2명</Textwrapper>
      <Textwrapper value={3}>3명</Textwrapper>
      <Textwrapper value={4}>4명</Textwrapper>
      <Textwrapper value={5}>5명</Textwrapper>
      <Textwrapper value={6}>6명</Textwrapper>
      <Textwrapper value={7}>7명</Textwrapper>
      <Textwrapper value={8}>8명</Textwrapper>
      <Textwrapper value={9}>9명</Textwrapper>
      <Textwrapper value={10}>10명</Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 600px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray1};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: #f2f3f3;
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const Textwrapper = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 330px;
`;
function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}
