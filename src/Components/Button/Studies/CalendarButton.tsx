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
  background-color: gray;
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: #f2f3f3;
  color: gray;
  padding-left: 16px;
`;

const Textwrapper = styled.span`
  background: #f2f3f3;
  color: gray;
  padding-left: 330px;
`;
