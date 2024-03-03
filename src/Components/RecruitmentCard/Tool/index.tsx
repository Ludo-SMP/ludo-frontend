import styled from 'styled-components';

const Tool = () => {
  return <ToolWrapper></ToolWrapper>;
};

const ToolWrapper = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.color.gray2};
`;

export default Tool;
