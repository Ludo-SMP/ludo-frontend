import styled from 'styled-components';
import { Calendar } from '../../Assets/Calendar';

type FilterProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export const CalendarButton = ({ children, onClick }: FilterProps) => {
  return (
    <InputContainer onClick={onClick}>
      {children}
      <IconWrap>
        <Calendar />
      </IconWrap>
    </InputContainer>
  );
};

const InputContainer = styled.section`
  width: 100%;
  height: 44px;
  display: flex;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.black1};
  align-items: center;
  align-self: stretch;
  padding: 10px 16px;
`;

const IconWrap = styled.p`
  margin-left: auto;
`;
