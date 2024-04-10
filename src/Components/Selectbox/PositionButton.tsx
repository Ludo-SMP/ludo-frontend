import React from 'react';

// import { OptionalCreates } from '@/Pages/Studies/CreateStudy';
import { Creates } from '@/Types/studies';
import { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { SelectArrow } from '@/Assets/SelectArrow';
import { IconWrap, Container, Select, TextWrap } from './index.style';

interface IFormValues {
  positionId: number;
}

export const PositionButton = React.forwardRef<HTMLSelectElement, ReturnType<UseFormRegister<IFormValues>>>(
  ({ onChange, name }, ref) => {
    return (
      <Container>
        <Select name={name} className="select" onChange={onChange} ref={ref}>
          <TextWrap value="">포지션</TextWrap>
          <TextWrap value={1}>백엔드</TextWrap>
          <TextWrap value={2}>프론트엔드</TextWrap>
          <TextWrap value={3}>디자이너</TextWrap>
          <TextWrap value={4}>데브옵스</TextWrap>
        </Select>
        <IconWrap className="icon__right">
          <SelectArrow />
        </IconWrap>
      </Container>
    );
  },
);
