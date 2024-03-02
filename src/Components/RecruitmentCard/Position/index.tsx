import styled from 'styled-components';
import { PositionType } from '@/Types/study';

export type PositionProps = { position?: PositionType };

const Position = ({ position }: PositionProps) => {
  return <PositionWrapper>{position}</PositionWrapper>;
};

const PositionWrapper = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${(props) => props.theme.color.purple2};
  color: ${(props) => props.theme.color.purple1};
  text-align: center;
  font-size: ${(props) => props.theme.font.small};
  font-weight: 500;
  line-height: 30px;
`;

export default Position;
