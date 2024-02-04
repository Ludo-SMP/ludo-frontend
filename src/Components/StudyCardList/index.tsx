import styled from 'styled-components';
import StudyCard, { StudyCardProps } from '../StudyCard';
import { RightBold } from '../../Assets/icons/RightBold';
import Filter from '../Filter';
import { DownBold } from '../../Assets/icons/DownBold';
import MoreButton from '../Button/MoreButton';
import { useNavigate } from 'react-router-dom';
import { StudyCategoryType } from '@/Types/study';

export interface StudyCardListProps {
  studyCardsProps?: StudyCardProps[];
  studyCategory?: StudyCategoryType;
}

const StudyCardList = ({ studyCategory, studyCardsProps }: StudyCardListProps) => {
  const navigate = useNavigate();
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
          <MoreButton onClick={() => navigate('/studies')}>
            <div>더보기</div>
            <RightBold />
          </MoreButton>
        )}
      </div>
      <div className="studylist__cards">
        {studyCardsProps?.map((studyCardProps: StudyCardProps) => (
          <StudyCard key={studyCardProps.recruitmentId} {...studyCardProps} />
        ))}
      </div>
    </StudyCardListWrapper>
  );
};

const StudyCardListWrapper = styled.div<{ studyCategory?: StudyCategoryType }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  .studylist {
    &__info {
      display: flex;
      justify-content: 'flex-start';
      gap: ${(props) => (props.studyCategory === 'All' ? '40px' : '820px')};
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
