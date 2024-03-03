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
    <CardListInfoWrapper studyCategory={studyCategory}>
      <div className="studylist__title">
        {studyCategory ? `인기있는 ${studyCategory} 스터디` : `내가 필요한 스터디를 찾아보아요`}
      </div>
      {studyCategory ? (
        <Button size="normal" onClick={() => navigate('/studies')}>
          <div>더보기</div>
          <Right />
        </Button>
      ) : null}
    </CardListInfoWrapper>
  );
};

const CardListInfoWrapper = styled.div<{ studyCategory?: StudyCategoryType }>`
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
    border: none;
  }
`;

export default CardListInfo;
