import { BackHeader } from '../../Components/Header/BackHeader';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { Mainarea } from '../../Components/Textarea/Mainarea';
import { ContactButton } from '../../Components/Button/Studies/ContactButton';
import { PlatformButton } from '../../Components/Button/Studies/PlatformButton';
import { ProgressButton } from '../../Components/Button/Studies/ProgressButton';
import { CalendarButton } from '../../Components/Button/Studies/CalendarButton';
import { StackButton } from '../../Components/Button/Studies/StackButton';

export const CreateStudy = () => {
  return (
    <div>
      <BackHeader />
      스터디 생성페이지!!
      <Titlearea />
      <Mainarea />
      <ContactButton />
      <PlatformButton />
      <ProgressButton />
      <CalendarButton />
      <StackButton />
    </div>
  );
};
