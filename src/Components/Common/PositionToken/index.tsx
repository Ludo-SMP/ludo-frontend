import styled from 'styled-components';
import { Position } from '@/Types/study';

const PositionToken = ({ name }: Position) => {
  return <PositionWrapper>{name}</PositionWrapper>;
};

const PositionWrapper = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.purple1};
  text-align: center;
  font-size: ${(props) => props.theme.font.small};
  font-weight: 500;
  line-height: 30px;
  white-space: nowrap;
`;

export default PositionToken;
