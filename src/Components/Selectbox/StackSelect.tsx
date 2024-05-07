import styled from 'styled-components';
// import { OptionalCreates } from '@/Pages/Studies/CreateRecruitment';
import { Creates, ItemCategory } from '@/Types/studies';
import { ChangeEvent, forwardRef } from 'react';
import { StackItem } from '@/Types/studies';
import { useStack } from '@/Hooks/stack/useStack';
import { IconWrap, Container, Select, TextWrap } from './index.style';
import { UseFormRegister } from 'react-hook-form';
import { SelectArrow } from '@/Assets/SelectArrow';

export type Props = {
  item?: StackItem;
};

interface IFormValues {
  stackId: number;
}
export const StackSelect = forwardRef<HTMLSelectElement, ReturnType<UseFormRegister<IFormValues>> & Props>(
  ({ name, onChange }, ref) => {
    const { data } = useStack();

    return (
      <Container>
        <Select name={name} className="select" onChange={onChange} ref={ref}>
          {data?.stacks?.map((item: ItemCategory) => (
            <TextWrap key={item.id} value={item.id}>
              {item.name}
            </TextWrap>
          ))}
        </Select>
        <IconWrap className="icon__right">
          <SelectArrow />
        </IconWrap>
      </Container>
    );
  },
);
