import Button from '@/Components/Common/Button';
import { Buttons } from './Layout';
import { useNavigate } from 'react-router-dom';

const EditButtons = () => {
  const navigate = useNavigate();

  return (
    <Buttons>
      <Button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        수정 취소
      </Button>
      <Button scheme="secondary">수정 완료</Button>
    </Buttons>
  );
};

export { EditButtons };
