import SkeletonRecruitmentCard from '../SkeletonRecruitmentCard';

/** 스터디 모집 공고 목록 로딩시 보여줄 스켈레톤 */
const SkeletonRecruitmentCardList = ({ count = 6 }: { count?: number }) => {
  return (
    <>
      {[...Array(count)].map(() => {
        return <SkeletonRecruitmentCard />;
      })}
    </>
  );
};

export default SkeletonRecruitmentCardList;
