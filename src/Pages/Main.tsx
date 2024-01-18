import StudyCard from '../Components/StudyCard';
import { studyCardInfoDummy } from '../Shared/dummy';

export const Main = () => {
  return (
    <div>
      <StudyCard {...studyCardInfoDummy} />
    </div>
  );
};
