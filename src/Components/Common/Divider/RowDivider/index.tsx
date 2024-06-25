import styled, { css } from 'styled-components';

interface RowDividerProps {
  rowHeight?: number;
  margin?: number;
}

/** 가로 구분선 */
export const RowDivider = ({ rowHeight = 1, margin }: RowDividerProps) => {
  return <Divider $rowHeight={rowHeight} $margin={margin}></Divider>;
};

const Divider = styled.hr<{ $rowHeight: number; $margin?: number }>`
  width: 100%;
  height: ${(props) => `${props.$rowHeight}px`};
  background-color: ${(props) => props.theme.color.black1};

  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin}px 0;
    `}
`;
