import { BackHeader } from '../../Components/Header/BackHeader';
import { Titlearea } from '../../Components/Textarea/Titlearea';
import { Mainarea } from '../../Components/Textarea/Mainarea';
// import { ContactButton } from '../../Components/Button/ContactButton';
// import { PlatformButton } from '../../Components/Button/PlatformButotn';
// import { ProgressButton } from '../../Components/Button/ProgressButton';
export const CreateStudy = () => {
  return (
    <div>
      <BackHeader />
      스터디 생성페이지!!
      <Titlearea />
      <Mainarea />
      {/* <ContactButton />
      <PlatformButton />
      <ProgressButton /> */}
    </div>
  );
};
