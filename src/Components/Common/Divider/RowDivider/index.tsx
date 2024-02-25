import styled from 'styled-components';

<<<<<<< HEAD
export const RowDivider = () => {
  return <RowDividerWrapper></RowDividerWrapper>;
};

const RowDividerWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(38, 45, 49, 0.2);
=======
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
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
`;
