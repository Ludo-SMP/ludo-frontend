import Button from '@/Components/Common/Button';
import InputText from '@/Components/Common/InputText/iindex';
import Modal from '@/Components/Common/Modal';
import { PROFILE } from '@/Constants/messages';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const EditProfileModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ nickname: string }>();

  const onSubmit = (data: { nickname: string }) => {
    console.log('중복확인');
  };

  return (
    <Modal
      handleApprove={() => {}}
      cancelBtnText="취소하기"
      approveBtnText="변경완료"
      alignTitle="center"
      isBtnWidthEqual={false}
      title={PROFILE.EDIT.title}
    >
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <p className="input__description">사용하실 닉네임을 입력해주세요.</p>
            <div className="input__section">
              <InputText
                placeholder="닉네임 (최대 20자)"
                inputType="text"
                {...register('nickname', { required: true, minLength: 1, maxLength: 20 })}
              />
              <Button scheme="secondary" type="submit" onClick={() => {}}>
                중복확인
              </Button>
            </div>
            <ErrorWrapper isError={errors.nickname}>
              <p className="error__message">글자수는 1자 이상, 20자 이하이여야 합니다.</p>
            </ErrorWrapper>
          </fieldset>
        </form>
      </FormWrapper>
    </Modal>
  );
};

const FormWrapper = styled.div`
  .input__description {
    color: ${({ theme }) => theme.color.black3};
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.small};
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
    button {
      padding: 0 16px;
      font-size: 18px;
    }
  }
  .input__section {
    display: flex;
    gap: 8px;
  }
  width: 100%;

  .error__message {
    font-size: ${({ theme }) => theme.font.small};
    color: red;
  }
`;

const ErrorWrapper = styled.div<{ isError: boolean }>`
  display: flex;
  flex-direction: column;
  visibility: ${({ isError }) => !isError && 'hidden'};
`;

export default EditProfileModal;
