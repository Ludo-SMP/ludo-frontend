import styled from 'styled-components';
export type PositionType = '백엔드' | '프론트엔드' | '기획' | '디자이너';

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
  border: 1px solid ${(props) => props.theme.color.gray5};
  background: ${(props) => props.theme.color.gray5};
  color: ${(props) => props.theme.color.white};
  text-align: center;
  font-size: ${(props) => props.theme.font.small};
  font-weight: 500;
  line-height: 30px;
`;

export default Position;
