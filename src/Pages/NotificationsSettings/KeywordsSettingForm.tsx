import { CATEGORIES_OPTION, POSITIONS_OPTIONS } from '@/Shared/study';
import { KeywordForm } from '@/Components/Common/KeywordForm';
import ChipMenu from '@/Components/Common/ChipMenu';
import Button from '@/Components/Common/Button';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { RecruitmentKeywordsForm } from '@/Types/notifications';
import { useEditNotificationsKeywords } from '@/Hooks/notifications/useEditNotificationsKeywords';
import { useState } from 'react';
import { StackModal } from '@/Components/Modal/StackModal';
import { Stack } from '@/Types/study';

const handleValues = (selectedValues: number[], id: number) => {
  return selectedValues.includes(id)
    ? selectedValues.filter((selectedValue: number) => selectedValue != id)
    : [...selectedValues, id];
};

const getSelectedStacks = (keywords: RecruitmentKeywordsForm): Stack[] => {
  const stackIds = [...keywords.stackIds];
  return stackIds.map((stackId: number) => {
    return { id: stackId, name: 'stack', imageUrl: 'imageUrl' };
  });
};

export interface KeywordsSettingFormProps {
  values: RecruitmentKeywordsForm;
}

export const KeywordsSettingForm = ({ values }: KeywordsSettingFormProps) => {
  const { mutate: editKeywordsMutate } = useEditNotificationsKeywords();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStacks, setSelectedStacks] = useState<Stack[]>(getSelectedStacks(values));
  const handleSelectedStacks = (stacks: Stack[]) => setSelectedStacks(stacks);

  const { setValue, watch, handleSubmit } = useForm<RecruitmentKeywordsForm>({
    defaultValues: {
      stackIds: [],
      positionIds: [],
      categoryIds: [],
    },
    values,
  });
  return (
    <Form
      onSubmit={handleSubmit(({ stackIds, positionIds, categoryIds }) =>
        editKeywordsMutate({ stackIds, positionIds, categoryIds }),
      )}
    >
      <KeywordsSettingBox>
        <KeywordForm label="기술 스택" type="stackIds">
          <ChipMenu
            key={'기술 스택'}
            checked={watch('stackIds').length !== 0}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {'기술 스택'}
          </ChipMenu>
          {isOpen && (
            <StackModal
              handleModal={setIsOpen}
              initialSelectedStacks={selectedStacks}
              handleSelectedStacks={handleSelectedStacks}
            />
          )}
        </KeywordForm>
        <KeywordForm label="포지션" type="positionIds">
          {POSITIONS_OPTIONS.map(({ value: id, label }) => (
            <ChipMenu
              key={label}
              checked={watch('positionIds').includes(id)}
              onClick={() => setValue('positionIds', handleValues(watch('positionIds'), id))}
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
              onClick={() => setValue('categoryIds', handleValues(watch('categoryIds'), id))}
              id={id}
            >
              {label}
            </ChipMenu>
          ))}
        </KeywordForm>
      </KeywordsSettingBox>
      <BtnsBox>
        <Button
          type="button"
          size="fullWidth"
          onClick={() => {
            setValue('stackIds', [...values.stackIds]);
            setValue('positionIds', [...values.positionIds]);
            setValue('categoryIds', [...values.categoryIds]);
          }}
        >
          취소
        </Button>
        <Button size="fullWidth" scheme="secondary">
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
