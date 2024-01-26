import styled from 'styled-components';

// export type StudyProps = {
//   onClick: () => void;
//   closeModal?: () => void;
//   children?: React.ReactNode;
// };

export type StudyProps = {
  onClick: () => void;
  children?: React.ReactNode;
};

export const StackButton = ({ children, onClick }: StudyProps) => {
  return (
    <ButtonConTainer onClick={onClick}>
      <StudyText>{children}</StudyText>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.button`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const StudyText = styled.option`
  background: #f2f3f3;
  color: gray;
  text-align: left;
  /* padding-left: 150px; */
`;
