import styled from 'styled-components';

export const RowDivider: React.FC = () => {
  return <RowDividerWrapper></RowDividerWrapper>;
};

const RowDividerWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(38, 45, 49, 0.2);
`;
