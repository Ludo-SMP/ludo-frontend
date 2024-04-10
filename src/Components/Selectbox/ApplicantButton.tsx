import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { SelectArrow } from '@/Assets/SelectArrow';
import { IconWrap, Container, Select, TextWrap } from './index.style';
export type Props = any;

interface IFormValues {
  applicantCount: number;
}

export const ApplicantButton = React.forwardRef<HTMLSelectElement, ReturnType<UseFormRegister<IFormValues>>>(
  ({ onChange, onBlur, name }: Props, ref) => {
    return (
      <Container>
        <Select name={name} className="select" onChange={onChange} onBlur={onBlur} ref={ref} required>
          <TextWrap value="" selected disabled>
            ex) 5명
          </TextWrap>
          <TextWrap value={1}>1명</TextWrap>
          <TextWrap value={2}>2명</TextWrap>
          <TextWrap value={3}>3명</TextWrap>
          <TextWrap value={4}>4명</TextWrap>
          <TextWrap value={5}>5명</TextWrap>
          <TextWrap value={6}>6명</TextWrap>
          <TextWrap value={7}>7명</TextWrap>
          <TextWrap value={8}>8명</TextWrap>
          <TextWrap value={9}>9명</TextWrap>
          <TextWrap value={10}>10명</TextWrap>
        </Select>
        <IconWrap className="icon__right">
          <SelectArrow />
        </IconWrap>
      </Container>
    );
  },
);
