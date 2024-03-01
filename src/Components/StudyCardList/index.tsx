import styled from 'styled-components';
import StudyCard, { StudyCardProps } from '../StudyCard';
import NotFound from '../NotFound';
import { FilterOptionsType, StudyBasicInfoType } from '@/Types/study';
import { useMemo } from 'react';
import useIntersectionObservable from '@/Hooks/userIntersectionObservable';
import { convertRecruitmentsToStudyCardProps } from '@/Utils/propertyConverter';
import { useRecruitments } from '@/Apis/recruitment';
import { INFINITE_RECRUITMENTS_COUMT_PER_PAGE } from '@/Constants/common';
// import { recruitmentsMockData } from '@/Shared/dummy';

export interface StudyCardListProps {
  filterOptions?: FilterOptionsType;
  studyCategory?: StudyBasicInfoType;
}

const StudyCardList = ({ filterOptions }: StudyCardListProps) => {
  const { data, hasNextPage, isFetching, fetchNextPage, isFetchingNextPage } = useRecruitments({
    filterOptions,
    recruitmentsPerPage: INFINITE_RECRUITMENTS_COUMT_PER_PAGE,
  });

  const recruitments = convertRecruitmentsToStudyCardProps(
    useMemo(() => (data ? data.pages.flatMap(({ data }) => data) : []), [data]),
  );

  const ref = useIntersectionObservable((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) fetchNextPage();
  });

  // const recruitments = convertRecruitmentsToStudyCardProps(recruitmentsMockData);

  return (
    <StudyCardsWrapper>
      {recruitments ? (
        recruitments?.map((recruitment: StudyCardProps) => (
          <StudyCard key={recruitment.recruitmentId} {...recruitment} />
        ))
      ) : (
        <NotFound />
      )}
      {filterOptions && <Target ref={ref}>{isFetchingNextPage && hasNextPage ? 'Loading...' : null}</Target>}
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
