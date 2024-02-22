import styled from 'styled-components';
import StudyCard, { StudyCardProps } from '../StudyCard';

import NotFound from '../NotFound';
import { FilterOptionsType, StudyBasicInfoType } from '@/Types/study';
import { useMemo } from 'react';
import useIntersectionObservable from '@/Hooks/userIntersectionObservable';
import { convertRecruitmentsToStudyCardProps } from '@/Utils/propertyConverter';
import { useRecruitments } from '@/Apis/recruitment';

export interface StudyCardListProps {
  filterOptions?: FilterOptionsType;
  studyCategory?: StudyBasicInfoType;
}
export const recruitmentsPerPage = 9;

const StudyCardList = ({ filterOptions }: StudyCardListProps) => {
  const { data, hasNextPage, isFetching, fetchNextPage, isFetchingNextPage } = useRecruitments(
    filterOptions,
    recruitmentsPerPage,
  );

  const recruitments = convertRecruitmentsToStudyCardProps(
    useMemo(() => (data ? data.pages.flatMap(({ data }) => data) : []), [data]),
  );
  const ref = useIntersectionObservable((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) fetchNextPage();
  });

  return (
    <StudyCardsWrapper>
      {recruitments ? (
        recruitments?.map((recruitment: StudyCardProps) => (
          <StudyCard key={recruitment.recruitmentId} {...recruitment} />
        ))
      ) : (
        <NotFound />
      )}
      {filterOptions && <Target ref={ref}>{isFetchingNextPage && hasNextPage ? 'Loading...' : 'No Result'}</Target>}
    </StudyCardsWrapper>
  );
};

const StudyCardsWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  gap: 21px;
`;

const Target = styled.div`
  height: 1px;
`;
export default StudyCardList;
