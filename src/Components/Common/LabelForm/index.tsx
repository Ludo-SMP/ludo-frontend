import { FieldErrors, FieldValues } from 'react-hook-form';
import styled, { css } from 'styled-components';

export interface LabelFormProps<T extends FieldValues = FieldValues> {
  /** 라벨 */
  label?: string;

  /** 자식 노드 (폼) */
  children: React.ReactNode;

  /** RHF와 호환되는 에러 객체 */
  errors?: FieldErrors<T>;

  /** RHF 필드 키 */
  name?: keyof T;

  /** 비활성화 여부 */
  disabled?: boolean;
}

export const LabelForm = <T extends FieldValues = FieldValues>({
  label,
  children,
  name,
  errors,
  disabled,
}: LabelFormProps<T>) => {
  return (
    <GridItem>
      {label && <Heading $disabled={disabled}>{label}</Heading>}
      {children}
      {errors?.[name]?.message && <ErrorMsg>{(errors?.[name] as FieldErrors)?.message?.toString()}</ErrorMsg>}
    </GridItem>
  );
};

const Heading = styled.h3<{
  $disabled?: boolean;
}>`
  ${({ theme }) => theme.typo.InputTitle};
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.65;
      color: ${({ theme }) => theme.color.black2};
    `}
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 132px;
  gap: 12px;
`;

export const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.color.negative};
`;
