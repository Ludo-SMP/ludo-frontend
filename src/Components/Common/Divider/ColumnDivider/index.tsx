import styled from 'styled-components';

export const ColumnDivider: React.FC = () => {
  return <ColumnDividerWrapper></ColumnDividerWrapper>;
};

const ColumnDividerWrapper = styled.div`
  height: 0.8rem;
  border: 1px solid rgba(38, 45, 49, 0.2);
`;
