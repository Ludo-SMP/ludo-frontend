import styled from 'styled-components';
import RecruitmentCard, { RecruitmentCardProps } from '../RecruitmentCard';
import NotFound from '../NotFound';
import { FilterOptionsType, StudyBasicInfoType } from '@/Types/study';
import { useMemo } from 'react';
import useIntersectionObservable from '@/Hooks/userIntersectionObservable';
import { convertRecruitmentsToRecruitmentCardProps } from '@/Utils/propertyConverter';
import { useRecruitments } from '@/Apis/recruitment';
import { INFINITE_RECRUITMENTS_COUMT_PER_PAGE } from '@/Constants/common';

export interface RecruitmentCardListProps {
  filterOptions?: FilterOptionsType;
  studyCategory?: StudyBasicInfoType;
}

const RecruitmentCardList = ({ filterOptions }: RecruitmentCardListProps) => {
  const { data, hasNextPage, isFetching, fetchNextPage, isFetchingNextPage } = useRecruitments({
    filterOptions,
    recruitmentsPerPage: INFINITE_RECRUITMENTS_COUMT_PER_PAGE,
  });

  const recruitments = convertRecruitmentsToRecruitmentCardProps(
    useMemo(() => (data ? data.pages.flatMap(({ data }) => data) : []), [data]),
  );

  const ref = useIntersectionObservable((entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) fetchNextPage();
  });

  return (
    <RecruitmentCardsWrapper>
      {recruitments ? (
        recruitments?.map((recruitment: RecruitmentCardProps) => (
          <RecruitmentCard key={recruitment.recruitmentId} {...recruitment} />
        ))
      ) : (
        <NotFound />
      )}
      {filterOptions && <Target ref={ref}>{isFetchingNextPage && hasNextPage ? 'Loading...' : null}</Target>}
    </RecruitmentCardsWrapper>
  );
};

const RecruitmentCardsWrapper = styled.li`
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
export default RecruitmentCardList;
