import { useNavigate } from 'react-router-dom';
import { Buttons, StudyCreateForm } from './Layout';
import { useTempSaved } from '@/Hooks/useTempSaved';
import Button from '@/Components/Common/Button';
import { saveTemporary } from '@/utils/temporarySavedUtils';

interface CreateButtonsProps {
  formData?: StudyCreateForm;
}

const CreateButtons = ({ formData }: CreateButtonsProps) => {
  const navigate = useNavigate();
  const { savedKey } = useTempSaved();

  return (
    <Buttons>
      <Button
        type="button"
        onClick={() => {
          saveTemporary(savedKey, 1, 'STUDY', formData);
          navigate('/mypage');
        }}
      >
        임시저장
      </Button>
      <Button scheme="secondary">등록하기</Button>
    </Buttons>
  );
};

export { CreateButtons };
