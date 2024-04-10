import React from 'react';

import { ChangeEvent } from 'react';
// import { OptionalCreates } from '@/Pages/Studies/CreateStudy';
import { Creates } from '@/Types/studies';
import { UseFormRegister } from 'react-hook-form';
import { Container, IconWrap, Select, TextWrap } from './index.style';
import { SelectArrow } from '@/Assets/SelectArrow';

interface IFormValues {
  contact: string;
}
export const ContactButton = React.forwardRef<HTMLSelectElement, ReturnType<UseFormRegister<IFormValues>>>(
  ({ onChange, name }, ref) => {
    return (
      <Container>
        <Select name={name} className="select" onChange={onChange} ref={ref}>
          <TextWrap>연락방법</TextWrap>
          <TextWrap value="EMAIL">이메일</TextWrap>
          <TextWrap value="KAKAO">카카오톡</TextWrap>
        </Select>
        <IconWrap>
          <SelectArrow />
        </IconWrap>
      </Container>
    );
  },
);
