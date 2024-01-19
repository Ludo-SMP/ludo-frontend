import styled from 'styled-components';

type Tool = 'React' | 'Java' | 'Spring' | 'Figma' | 'Java' | 'Javascript';

const Tool: React.FC = () => {
  return <ToolWrapper></ToolWrapper>;
};

const ToolWrapper = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.color.gray2};
`;

export default Tool;
