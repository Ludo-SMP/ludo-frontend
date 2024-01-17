import { FilterButton } from '../Components/Button/FilterButton';
import { StudyButton } from '../Components/Button/StudyButton';
import { Hamberger } from '../Assets/Hamberger';
import { Alarm } from '../Assets/Alarm';
export const Main = () => {
  return (
    <div>
      <FilterButton />
      <StudyButton />
      <Hamberger />
      <Alarm />
    </div>
  );
};
