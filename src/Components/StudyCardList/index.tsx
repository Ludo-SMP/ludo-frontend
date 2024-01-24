import styled from 'styled-components';
import StudyCard, { StudyInfo, StudyCategory } from '../StudyCard';
import { RightBold } from '../../Assets/icons/RightBold';

export interface StudyCardListProps {
  studyInfos?: StudyInfo[];
  studyCategory?: StudyCategory;
}

const StudyCardList = ({ studyCategory, studyInfos }: StudyCardListProps) => {
  return (
    <StudyCardListWrapper>
      <div className="studylist__info">
        <div className="studylist__title">{`인기있는 ${studyCategory} 스터디`}</div>
        <button className="more__btn">
          <div>더보기</div>
          <RightBold />
        </button>
      </div>
      <div className="studylist__cards">
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
  align-items: flex-start;
  gap: 16px;

  .studylist {
    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }

    &__title {
      color: var(--Font-Text-active, rgba(0, 0, 0, 0.85));
      font-size: ${(props) => props.theme.font.xlarge};
      font-weight: 800;
      line-height: 50px;
    }

    &__cards {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      gap: 24px;
    }
  }

  .more__btn {
    display: flex;
    padding: 0 12px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    opacity: 0.65;
    gap: 8px;

    & > div:first-child {
      height: 100%;
      color: ${(props) => props.theme.color.black4};
      text-align: center;
      font-size: ${(props) => props.theme.font.xsmall};
      font-weight: 600;
      line-height: 44px;
    }
  }
`;

export default StudyCardList;
