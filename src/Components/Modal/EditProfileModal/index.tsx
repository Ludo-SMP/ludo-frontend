import { useEditProfileNickname } from '@/Apis/user';
import Button from '@/Components/Common/Button';
import InputText from '@/Components/Common/InputText/iindex';
import { PROFILE } from '@/Constants/messages';
import { STUDY } from '@/Constants/queryString';
import { useModalStore } from '@/Store/modal';
import { useQueryClient } from '@tanstack/react-query';
import { SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface EdiptProfileModalProps {
  userNickname: string;
  handleEdit: React.Dispatch<SetStateAction<'NOT START' | 'EDIT' | 'END'>>;
}

const EditProfileModal = ({ userNickname, handleEdit }: EdiptProfileModalProps) => {
  const { closeModal } = useModalStore();
  const queryClient = useQueryClient();
  const submitSuccessHandler = () => {
    closeModal();
    handleEdit('NOT START');
    queryClient.invalidateQueries({ queryKey: [...STUDY.MYPAGE_INFO()] });
  };

  const submitFailHandler = () => {
    handleEdit('END');
  };
  const { mutate: editProfileMutate } = useEditProfileNickname(submitSuccessHandler, submitFailHandler);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ nickname: string }>();

  const onSubmit = (data: { nickname: string }) => {
    editProfileMutate(data?.nickname);
  };

  return (
    <ModalBackDropWrapper>
      <ModalWrapper>
        <ModalTitleWrapper>
          <div className="edit__title">{PROFILE.EDIT.title}</div>
        </ModalTitleWrapper>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <p className="input__description">사용하실 닉네임을 입력해주세요.</p>
              <div className="input__section">
                <InputText
                  placeholder="닉네임 (최대 20자)"
                  inputType="text"
                  {...register('nickname', {
                    required: true,
                    minLength: 1,
                    maxLength: 20,
                    pattern: /^(?!\s).{1,20}(?<!\s)$/,
                    validate: (value) => value !== userNickname,
                  })}
                />
              </div>
              <ErrorWrapper isError={!!errors?.nickname}>
                <p className="error__message">
                  {errors?.nickname?.type && errors?.nickname?.type === 'required'
                    ? PROFILE.NICNAME_ERROR.REQUIRED
                    : errors?.nickname?.type === 'pattern'
                    ? PROFILE.NICNAME_ERROR.WHITE_SPACE
                    : errors?.nickname?.type === 'validate'
                    ? PROFILE.NICNAME_ERROR.SAME
                    : PROFILE.NICNAME_ERROR.LEGNTH}
                </p>
              </ErrorWrapper>
            </fieldset>
            <ModalBtnsWrapper>
              <Button type="submit" scheme="normal" className="approve__btn" onClick={closeModal}>
                취소하기
              </Button>
              <Button className="submit__btn" scheme="primary" onClick={() => {}}>
                변경하기
              </Button>
            </ModalBtnsWrapper>
          </form>
        </FormWrapper>
      </ModalWrapper>
    </ModalBackDropWrapper>
  );
};
const ModalBackDropWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.color.black1};
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  .edit__title {
    display: flex;
    justify-content: center;
    height: 40px;
    padding: 5px 0px;
    align-items: center;
    align-self: stretch;
    color: ${({ theme }) => theme.color.black5};
    text-align: center;
    font-family: Pretendard;
    font-size: ${({ theme }) => theme.font.large};
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
`;

const FormWrapper = styled.div`
  width: 520px;
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
  }
  .input__section {
    display: flex;
    gap: 8px;
  }

  .error__message {
    font-size: ${({ theme }) => theme.font.small};
    color: red;
  }
`;

const ErrorWrapper = styled.div<{ isError: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  visibility: ${({ isError }) => !isError && 'hidden'};
`;

const ModalBtnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 158fr 338fr;
  margin-top: 32px;
  align-items: flex-start;
  align-self: stretch;

  button {
    width: 100%;
  }
`;

export default EditProfileModal;
