import { FilterButton } from '../Components/Button/FilterButton';
import { StudyButton } from '../Components/Button/StudyButton';
import { Hamberger } from '../Assets/Hamberger';
import { Alarm } from '../Assets/Alarm';
export const Main = () => {
  return (
    <div>
      <FilterButton onClick={() => onclick}>스터디 모아보기</FilterButton>
      <StudyButton onClick={() => onclick}>내가 지원한 스터디</StudyButton>
      <Hamberger />
      <Alarm />
    </div>
  );
};
