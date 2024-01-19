import styled from 'styled-components';
export type Position = '백엔드' | '프론트엔드' | '기획' | '디자이너';

export type PositionProps = { position?: Position };

const ActivityPosition: React.FC<PositionProps> = ({ position }) => {
  return <ActivityPositionWrapper>{position}</ActivityPositionWrapper>;
};

const ActivityPositionWrapper = styled.div`
  display: flex;
  aligin-items: center;
  text-align: center;
  padding: 0.25rem 0.75rem;
  border: 1px solid ${(props) => props.theme.color.baseBlackAlpha45};
  border-radius: 1.5rem;
  font-size: ${(props) => props.theme.font.xsmall};
  font-weight: 600;
  line-height: 1.5rem;
  background: ${(props) => props.theme.color.backgroundBgSurface};
  background-blend-mode: multiply;
  color: rgba(0, 0, 0, 0.45);
  & > div:first-child {
  }
`;

export default ActivityPosition;
