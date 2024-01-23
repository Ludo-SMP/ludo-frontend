import styled from 'styled-components';
import StudyCard, { StudyInfo, StudyCategory } from '../StudyCard';

export interface StudyCardListProps {
  studyInfos?: StudyInfo[];
  studyCategory?: StudyCategory;
}

const StudyCardList: React.FC<StudyCardListProps> = ({ studyCategory, studyInfos }) => {
  return (
    <StudyCardListWrapper>
      <div className="studyList__info">
        <div className="studylist__title">{`인기있는 ${studyCategory} 스터디`}</div>
        <div className="more__button">더보기</div>
      </div>
      <div className="studyList">
        {studyInfos?.map((studyInfo: StudyInfo) => (
          <StudyCard {...studyInfo} />
        ))}
      </div>
    </StudyCardListWrapper>
  );
};

const StudyCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .studylist {
    &__title {
      font-size: ${(props) => props.theme.font.xlarge};
      font-weight: 800;
      line-height: 50px;
    }
  }
`;

export default StudyCardList;
