import styled from 'styled-components';
import { Calendar } from '../../../Assets/Calendar';
export const CalendarButton = () => {
  return (
    <ButtonConTainer>
      <Textwrapper>
        <Calendar />
      </Textwrapper>
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.button`
  width: 392px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const Textwrapper = styled.span`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 330px;
`;
