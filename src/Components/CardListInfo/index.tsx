import { StudyCategoryType } from '@/Types/study';
import { RightBold } from '../../Assets/icons/RightBold';
import MoreButton from '../Button/MoreButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface CardListInfoProps {
  studyCategory?: StudyCategoryType;
}

const CardListInfo = ({ studyCategory }: CardListInfoProps) => {
  const navigate = useNavigate();
  return (
    <StudyCardListInfoWrapper studyCategory={studyCategory}>
      <div className="studylist__title">
        {studyCategory ? `인기있는 ${studyCategory} 스터디` : `내가 필요한 스터디를 찾아보아요`}
      </div>
      {studyCategory ? (
        <MoreButton onClick={() => navigate('/studies')}>
          <div>더보기</div>
          <RightBold />
        </MoreButton>
      ) : null}
    </StudyCardListInfoWrapper>
  );
};

const StudyCardListInfoWrapper = styled.div<{ studyCategory?: StudyCategoryType }>`
  display: flex;
  justify-content: 'flex-start';
  gap: ${(props) => (props.studyCategory ? '820px' : '40px')};
  align-items: center;
  align-self: stretch;

  .studylist__title {
    color: ${(props) => props.theme.color.black4};
    font-size: ${(props) => props.theme.font.xlarge};
    font-weight: 800;
    line-height: 50px;
  }
`;

export default CardListInfo;
