import { CATEGORIES_OPTION, POSITION } from '@/Shared/study';
import { KeywordForm } from '@/Components/Common/KeywordForm';
import ChipMenu from '@/Components/Common/ChipMenu';
import Button from '@/Components/Common/Button';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { RecruitmentKeywordsForm } from '@/Types/notifications';
import { useEditNotificationsKeywords } from '@/Hooks/notifications/useEditNotificationsKeywords';
import { useState } from 'react';
import { StackModal } from '@/Components/Modal/StackModal';
import { Stack, Option } from '@/Types/study';

const handleValues = (selectedValues: number[], id: number) => {
  return selectedValues.includes(id)
    ? selectedValues.filter((selectedValue: number) => selectedValue !== id)
    : [...selectedValues, id];
};

const getSelectedStacks = (keywords: RecruitmentKeywordsForm): Stack[] => {
  const stackIds = [...keywords.stackIds];
  return stackIds.map((stackId: number) => {
    return { id: stackId, name: 'stack', imageUrl: 'imageUrl' };
  });
};

const isEqualValues = (selectedValues: number[], defaultValues: number[]) => {
  return (
    selectedValues.length == defaultValues.length &&
    selectedValues.every((selectedValue: number) => defaultValues.includes(selectedValue))
  );
};

const isEqualKeywords = (selectedKeywords: RecruitmentKeywordsForm, defaultKeywords: RecruitmentKeywordsForm) => {
  const { stackIds: newStackIds, positionIds: newPositionIds, categoryIds: newCategoryIds } = selectedKeywords;
  const { stackIds: defStackIds, positionIds: defPositionIds, categoryIds: defCategoryIds } = defaultKeywords;
  return (
    isEqualValues(newStackIds, defStackIds) &&
    isEqualValues(newPositionIds, defPositionIds) &&
    isEqualValues(newCategoryIds, defCategoryIds)
  );
};

export interface KeywordsSettingFormProps {
  values: RecruitmentKeywordsForm;
  disabled?: boolean;
}

export const KeywordsSettingForm = ({ values, disabled }: KeywordsSettingFormProps) => {
  const { mutate: editKeywordsMutate } = useEditNotificationsKeywords();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedStacks, setSelectedStacks] = useState<Stack[]>(getSelectedStacks(values));

  const { setValue, watch, handleSubmit } = useForm<RecruitmentKeywordsForm>({
    defaultValues: {
      stackIds: [],
      positionIds: [],
      categoryIds: [],
    },
    values,
  });

  const handleSelectedStacks = (stacks: Stack[]) => {
    setSelectedStacks(stacks);
    setValue('stackIds', [...stacks.map((stack: Stack) => stack.id)]);
  };

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
            disabled={disabled}
          >
            기술 스택
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
          {(POSITION as Option[]).map(({ value: id, label }) => (
            <ChipMenu
              key={label}
              checked={watch('positionIds').includes(Number(id))}
              onClick={() => setValue('positionIds', handleValues(watch('positionIds'), Number(id)))}
              id={Number(id)}
              disabled={disabled}
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
              disabled={disabled}
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
          disabled={
            disabled ||
            isEqualKeywords(
              { stackIds: watch('stackIds'), positionIds: watch('positionIds'), categoryIds: watch('categoryIds') },
              values,
            )
          }
        >
          취소
        </Button>
        <Button
          size="fullWidth"
          scheme="secondary"
          disabled={
            disabled ||
            isEqualKeywords(
              { stackIds: watch('stackIds'), positionIds: watch('positionIds'), categoryIds: watch('categoryIds') },
              values,
            )
          }
        >
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
  padding-bottom: 32px;
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
