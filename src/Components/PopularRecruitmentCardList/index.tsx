import styled from 'styled-components';
import RecruitmentCard, { RecruitmentCardProps } from '../RecruitmentCard';

import NotFound from '../NotFound';
export interface PopularRecruitmentCardListProps {
  recruitmentCardsProps?: RecruitmentCardProps[];
}

const PopularRecruitmentCardList = ({ recruitmentCardsProps }: PopularRecruitmentCardListProps) => {
  return (
    <PopularRecruitmentCardListWrapper>
      {recruitmentCardsProps?.length ? (
        recruitmentCardsProps?.map((recruitmentCardProps: RecruitmentCardProps) => (
          <RecruitmentCard key={recruitmentCardProps.recruitmentId} {...recruitmentCardProps} />
        ))
      ) : (
        <NotFound />
      )}
    </PopularRecruitmentCardListWrapper>
  );
};

const PopularRecruitmentCardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  gap: 21px;
`;
export default PopularRecruitmentCardList;
