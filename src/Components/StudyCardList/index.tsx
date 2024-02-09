import styled from 'styled-components';
import StudyCard, { StudyCardProps } from '../StudyCard';

import NotFound from '../NotFound';
export interface StudyCardListProps {
  studyCardsProps?: StudyCardProps[];
}

const StudyCardList = ({ studyCardsProps }: StudyCardListProps) => {
  return (
    <StudyCardsWrapper>
      {studyCardsProps?.length ? (
        studyCardsProps?.map((studyCardProps: StudyCardProps) => (
          <StudyCard key={studyCardProps.recruitmentId} {...studyCardProps} />
        ))
      ) : (
        <NotFound />
      )}
    </StudyCardsWrapper>
  );
};

const StudyCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  gap: 21px;
`;
export default StudyCardList;
