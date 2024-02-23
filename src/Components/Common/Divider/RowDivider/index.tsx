import styled from 'styled-components';

interface RowDividerProps {
  rowHeight?: number;
}

export const RowDivider = ({ rowHeight = 1 }: RowDividerProps) => {
  return <RowDividerWrapper rowHeight={rowHeight}></RowDividerWrapper>;
};

const RowDividerWrapper = styled.div<{ rowHeight: number }>`
  width: 100%;
  height: ${(props) => `${props.rowHeight}px`};
  background-color: ${(props) => props.theme.color.black1};
`;
