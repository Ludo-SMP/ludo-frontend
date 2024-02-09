import Filter from '../../DropdownFilter';
import styled from 'styled-components';

export const FilterContent = () => {
  return (
    <ContentContainer>
      <Filter>전체</Filter>
      <Filter> 프론트엔드</Filter>
      <Filter>백엔드</Filter>
      <Filter>디자이너</Filter>
      <Filter>데이터베이스</Filter>
      <Filter>데브옵스</Filter>
      <Filter>언어</Filter>
    </ContentContainer>
  );
};

const ContentContainer = styled.section`
  width: 1096px;
  height: 60px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`;
