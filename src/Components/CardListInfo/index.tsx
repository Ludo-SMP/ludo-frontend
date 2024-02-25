import { StudyCategoryType } from '@/Types/study';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';
import styled from 'styled-components';
import { Right } from '@/Assets';

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
        <Button onClick={() => navigate('/studies')}>
          <div>더보기</div>
          <Right />
        </Button>
      ) : null}
    </StudyCardListInfoWrapper>
  );
};

const StudyCardListInfoWrapper = styled.div<{ studyCategory?: StudyCategoryType }>`
  display: flex;
  justify-content: ${(props) => (props.studyCategory ? 'space-between' : 'flex-start')};
  gap: ${(props) => props.studyCategory && '40px'};
  align-items: center;
  align-self: stretch;

  .studylist__title {
    color: ${(props) => props.theme.color.black4};
    font-size: ${(props) => props.theme.font.xlarge};
    font-weight: 800;
    line-height: 50px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme.color.black3};
    font-size: calc((${(props) => props.theme.font.small} + ${(props) => props.theme.font.medium}) / 2);
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
  }
`;

export default CardListInfo;
