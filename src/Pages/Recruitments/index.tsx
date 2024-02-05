import styled from 'styled-components';
import StudyCardList from '../../Components/StudyCardList';
import { bannerDummy } from '../../Shared/dummy';
import Banner from '../../Components/Banner';
import Gnb from '../../Components/Gnb';
import CreateButton from '../../Components/Button/CreateButton';
import BlankCircle from '../../Components/Common/BlankCirecle';
import MoveToTopButton from '../../Components/Button/MoveToTopButton';
import { UpBold } from '../../Assets/icons/UpBold';
import { useRecruitments } from '@/Apis/study';
import { convertRecruitmentsToStudyCardProps } from '@/Utils/propertyConverter';

const Recruitments = () => {
  const { data, isLoading } = useRecruitments();
  const recruitments = isLoading ? null : convertRecruitmentsToStudyCardProps(data.data);
  console.log(recruitments);
  return (
    <ContentsWrapper>
      <Gnb />
      <ButtonsWrapper>
        <MoveToTopButton>
          <UpBold />
        </MoveToTopButton>
        <CreateButton>
          <BlankCircle />
        </CreateButton>
      </ButtonsWrapper>
      <Banner {...bannerDummy} />
      {isLoading ? <div>Loading...</div> : <StudyCardList studyCategory="All" studyCardsProps={recruitments} />}
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px 348px 80px 348px;
`;

const ButtonsWrapper = styled.span`
  position: fixed;
  right: 188px;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  background-color: none;
  padding: 40px;
  gap: 20px;
`;

export default Recruitments;
