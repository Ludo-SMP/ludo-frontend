import styled from 'styled-components';
import StudyCard, { StudyInfo, StudyCategory } from '../StudyCard';
import { RightBold } from '../../Assets/icons/RightBold';
import Filter from '../Filter';
import { DownBold } from '../../Assets/icons/DownBold';

export interface StudyCardListProps {
  studyInfos?: StudyInfo[];
  studyCategory?: StudyCategory;
}

const StudyCardList = ({ studyCategory, studyInfos }: StudyCardListProps) => {
  return (
    <StudyCardListWrapper studyCategory={studyCategory}>
      <div className="studylist__info">
        <div className="studylist__title">
          {studyCategory === 'All' ? `내가 필요한 스터디를 찾아보아요` : `인기있는 ${studyCategory} 스터디`}
        </div>
        {studyCategory === 'All' ? (
          <div className="filters">
            <Filter checked={true}>
              <span className="filter__text">모의 면접</span>
              <DownBold color={'#FFFFFF'} />
            </Filter>
            <Filter checked={false}>
              <span className="filter__text">기술 스택</span>
              <DownBold />
            </Filter>
            <Filter checked={false}>
              <span className="filter__text">포지션</span>
              <DownBold />
            </Filter>
            <Filter checked={false}>
              <span className="filter__text">진행 방식</span>
              <DownBold />
            </Filter>
            <Filter checked={false}>
              <span className="filter__text">목록 정렬 방식</span>
              <DownBold />
            </Filter>
          </div>
        ) : (
          <button className="more__btn">
            <div>더보기</div>
            <RightBold />
          </button>
        )}
      </div>
      <div className="studylist__cards">
        {studyInfos?.map((studyInfo: StudyInfo) => (
          <StudyCard {...studyInfo} />
        ))}
      </div>
    </StudyCardListWrapper>
  );
};

const StudyCardListWrapper = styled.div<{ studyCategory?: StudyCategory }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  .studylist {
    &__info {
      display: flex;
      justify-content: ${(props) => (props.studyCategory === 'All' ? 'flex-start' : 'space-between')};
      gap: ${(props) => (props.studyCategory === 'All' ? '40px' : 0)};
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
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;
      gap: 21px;
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

  .filter__text {
    text-align: center;
    font-size: ${(props) => props.theme.font.small};
    font-weight: 500;
    line-height: 30px;
  }

  .filters {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export default StudyCardList;
