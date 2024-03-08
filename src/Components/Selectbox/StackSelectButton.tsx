import styled from 'styled-components';
import { OptionalCreates } from '@/Pages/Studies/GatherStudy';
import { Creates, ItemCategory } from '@/Types/studies';
import { ChangeEvent, useState, useRef } from 'react';
import { StackItem } from '@/Types/studies';
import { useStack } from '@/Apis/stack';

export type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  // onChange?: (event: string) => void;
  setForm: (any: OptionalCreates) => void;
  useForm: Creates;
  value?: string;
  type?: string;
  name?: string;
  maxlength?: number;
  id?: string;
  formData?: number | string;
  ref?: string;
  item?: StackItem;
};

export const StackSelectButton = ({ setForm, useForm, item }: Props) => {
  const { data } = useStack();
  const StackHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setForm({ stackId: event.target.selectedIndex });
    console.log(setForm({ stackId: event.target.selectedIndex }));
  };
  return (
    <ButtonConTainer name="stackId" className="select" onChange={StackHandler} value={(useForm.stackId = item.id)}>
      {data?.stacks.map((item: ItemCategory) => (
        <Textwrapper value={item.id} key={item.name}>
          {item.name}
        </Textwrapper>
      ))}
    </ButtonConTainer>
  );
};

const ButtonConTainer = styled.select`
  width: 392px;
  height: 44px;
  background-color: ${(props) => props.theme.color.gray3};
  border-radius: 8px;
  border: 1px solid #cbcdd1;
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
`;

const Textwrapper = styled.option`
  background: ${(props) => props.theme.color.gray1};
  color: ${(props) => props.theme.color.gray3};
  padding-left: 16px;
  & option:focus {
    background: #efecff;
    color: #9f99e5;
  }
`;
