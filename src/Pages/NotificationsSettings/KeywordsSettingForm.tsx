import { CATEGORIES_OPTION, POSITIONS_OPTIONS } from '@/Shared/study';
import { KeywordForm } from '@/Components/Common/KeywordForm';
import ChipMenu from '@/Components/Common/ChipMenu';
import Button from '@/Components/Common/Button';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { RecruitmentKeywordsForm } from '@/Types/notifications';

const handleValues = (type: keyof RecruitmentKeywordsForm, selectedValues: number[], id: number) => {
  return selectedValues.includes(id)
    ? selectedValues.filter((selectedValue: number) => selectedValue != id)
    : [...selectedValues, id];
};

export interface KeywordsSettingFormProps {
  values: RecruitmentKeywordsForm;
}

export const KeywordsSettingForm = ({ values }: KeywordsSettingFormProps) => {
  const { setValue, watch, handleSubmit } = useForm<RecruitmentKeywordsForm>({
    defaultValues: {
      stackIds: [],
      positionIds: [],
      categoryIds: [],
    },
    values,
  });
  return (
    <Form>
      <KeywordsSettingBox>
        <KeywordForm label="기술 스택" type="stackIds">
          <ChipMenu key={'기술 스택'} checked={watch('stackIds').length !== 0} onClick={() => {}}>
            {'기술 스택'}
          </ChipMenu>
        </KeywordForm>
        <KeywordForm label="포지션" type="positionIds">
          {POSITIONS_OPTIONS.map(({ value: id, label }) => (
            <ChipMenu
              key={label}
              checked={watch('positionIds').includes(id)}
              onClick={() => setValue('positionIds', handleValues('positionIds', watch('positionIds'), id))}
              id={id}
            >
              {label}
            </ChipMenu>
          ))}
        </KeywordForm>
        <KeywordForm label="카테고리" type="categoryIds">
          {CATEGORIES_OPTION.map(({ value: id, label }) => (
            <ChipMenu
              key={label}
              checked={watch('categoryIds').includes(id)}
              onClick={() => setValue('categoryIds', handleValues('categoryIds', watch('categoryIds'), id))}
              id={id}
            >
              {label}
            </ChipMenu>
          ))}
        </KeywordForm>
      </KeywordsSettingBox>
      <BtnsBox>
        <Button size="fullWidth" onClick={() => {}}>
          취소
        </Button>
        <Button size="fullWidth" scheme="secondary" onClick={() => {}}>
          저장
        </Button>
      </BtnsBox>
    </Form>
  );
};

const KeywordsSettingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const Form = styled.form`
  display: flex;
  padding: 0 0 32px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;

const BtnsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;
