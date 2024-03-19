import SkeletonRecruitmentCard from '../SkeletonRecruitmentCard';

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
