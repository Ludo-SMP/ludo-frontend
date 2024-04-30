import Heading from '@/Components/Heading';
import { ErrorMsg } from '@/Pages/CreateRecruitment/page';
import { FieldErrors, FieldValues } from 'react-hook-form';
import styled from 'styled-components';

export interface LabelFormProps<T> {
  /** 라벨 */
  label?: string;

  /** 자식 노드 (폼) */
  children: React.ReactNode;

  /** RHF와 호환되는 에러 객체 */
  errors?: FieldErrors<T>;

  /** RHF 필드 키 */
  name?: keyof T;
}

export const LabelForm = <T extends FieldValues = FieldValues>({ label, children, name, errors }: LabelFormProps<T>) => {
  return (
    <GridItem>
      {label && (
        <Heading type={'Title'} component={'Input'}>
          {label}
        </Heading>
      )}
      {children}
      {errors?.[name]?.message && <ErrorMsg>{errors?.[name]?.message}</ErrorMsg>}
    </GridItem>
  );
};

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 132px;
  gap: 12px;
`;
